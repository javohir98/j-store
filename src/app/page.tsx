import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="p-8 bg-white">
      <ProductList apiUrl="https://fakestoreapi.com/products" />
    </main>
  );
}
