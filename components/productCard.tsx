import { Product } from "@/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>
      <p className="mt-1 font-semibold">Rp {product.price}</p>
    </div>
  );
}