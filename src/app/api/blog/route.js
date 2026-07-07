import { NextResponse } from "next/server";
import blog from "../../data/blog.json";

export async function GET() {
  return NextResponse.json(blog);
}

