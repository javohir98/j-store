import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 bg-white">
      <Image src={"/logo.png"} alt="Vercel Logo" width={100} height={24} />
      <ProductList apiUrl="https://fakestoreapi.com/products" />
    </main>
  );
}
