import { NextResponse } from "next/server";
import Products from "../../data/products.json";

export async function GET() {
  return NextResponse.json(Products);
}

