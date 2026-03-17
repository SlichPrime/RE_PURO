import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">Re: Puro</h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/order">Order</Link>
      </div>
    </nav>
  );
}