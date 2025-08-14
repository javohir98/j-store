import ProductCard, { Product } from "@/components/ProductCard";

const products: Product[] = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    price: "$10",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    price: "$20",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description for product 3",
    price: "$30",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description for product 4",
    price: "$40",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description for product 5",
    price: "$50",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description for product 6",
    price: "$60",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description for product 7",
    price: "$70",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description for product 8",
    price: "$80",
    image: "https://via.placeholder.com/300",
  },
];

export default function Home() {
  return (
    <main className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

