import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Re: Puro Coffee
      </h1>

      <p className="text-gray-600 mb-6">
        We bring the purest coffee to your life ☕
      </p>

      <Link
        href="/menu"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        View Menu
      </Link>
    </div>
  );
}