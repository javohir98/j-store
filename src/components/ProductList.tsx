"use client";

import ProductCard, { Product } from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

interface ProductListProps {
  apiUrl: string;
  className?: string;
}

export default function ProductList({ apiUrl, className }: ProductListProps) {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products", apiUrl],
    queryFn: async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const items: Array<Record<string, unknown>> = Array.isArray(data)
        ? data
        : data.products || [];
      return items.map((p) => ({
        id: Number(p.id),
        title: String(p.title),
        description: String(p.description),
        price: p.price as number,
        image: (p.image || p.thumbnail || "") as string,
      }));
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container !mx-auto">
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 ${
          className ?? ""
        }`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
