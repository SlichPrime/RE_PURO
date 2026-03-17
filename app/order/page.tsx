"use client";

import { useState } from "react";
import { Order } from "@/types";

export default function OrderPage() {
  const [form, setForm] = useState<Order>({
    name: "",
    drink: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Order Now</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          className="border p-2 w-full mb-3"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Your Drink"
          className="border p-2 w-full mb-3"
          onChange={(e) =>
            setForm({ ...form, drink: e.target.value })
          }
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          Submit Order
        </button>
      </form>

      {message && (
        <p className="mt-4 text-green-600">{message}</p>
      )}
    </div>
  );
}