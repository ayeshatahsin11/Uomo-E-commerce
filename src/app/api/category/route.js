import { NextResponse } from "next/server";
import category from "../../data/category.json";

export async function GET() {
  return NextResponse.json(category);
}

