type MenuItem = {
  name: string;
  price: string;
  img: string;
};

const items: MenuItem[] = [
  { name: "Oat Latte", price: "21.000", img: "/coffee.png" },
  { name: "Americano", price: "18.000", img: "/coffee.png" },
  { name: "Mocha", price: "23.000", img: "/coffee.png" },
  { name: "Matcha", price: "22.000", img: "/coffee.png" },
];

export default function Menu() {
  return (
    <div id="menu" className="px-6 py-10">
      <h2 className="text-center text-2xl font-bold text-[#1f3f6b] mb-6">
        MENU
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="border p-3 rounded text-center">
            <img src={item.img} className="mx-auto" />
            <h3 className="text-sm mt-2">{item.name}</h3>
            <p className="text-sm">Rp {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
