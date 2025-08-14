import Image from "next/image";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="mb-4 w-full h-auto object-cover"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 flex-grow">{product.description}</p>
      <p className="mt-2 font-bold">{product.price}</p>
    </div>
  );
}
