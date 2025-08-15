import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: string | number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border rounded-lg p-3 flex flex-col transition-shadow hover:shadow-md">
      <Link href={`/product/${product.id}`} className="flex flex-col flex-grow">
        <div className="relative w-full aspect-square mb-3">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-2"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-semibold text-red-600">
          {typeof product.price === "number" ? product.price.toLocaleString() : product.price}
        </span>
        <button
          aria-label="Add to favourites"
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
