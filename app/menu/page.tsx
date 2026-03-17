import { menu } from "@/data/menu";
import ProductCard from "@/components/productCard";

export default function MenuPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Menu</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {menu.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}