export default function Navbar() {
  return (
    <div className="bg-[#1f3f6b] text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold">RE:PURO</h1>
      <div className="flex gap-4 text-sm">
        <a href="#">About</a>
        <a href="#menu">Menu</a>
        <a href="#">News</a>
        <button className="border px-3 py-1 rounded-full">Contact</button>
      </div>
    </div>
  );
}