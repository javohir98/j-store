"use client";

import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";

interface ProductListProps {
  apiUrl: string;
  className?: string;
}

export default function ProductList({ apiUrl, className }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const items: Array<Record<string, unknown>> = Array.isArray(data)
          ? data
          : data.products || [];
        if (!ignore) {
          setProducts(
            items.map((p) => ({
              id: Number(p.id),
              title: String(p.title),
              description: String(p.description),
              price: p.price as number,
              image: (p.image || p.thumbnail || "") as string,
            }))
          );
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 ${className ?? ""}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

