import { NextResponse } from "next/server";
import { Order } from "@/types";

export async function POST(req: Request) {
  const body: Order = await req.json();

  console.log("Order Received:", body);

  return NextResponse.json({
    message: "Order successfully submitted!",
    data: body,
  });
}