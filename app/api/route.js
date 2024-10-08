import { connectDB } from "@/lib/database/db";
import { todoModel } from "@/lib/models/Todo";
import { NextResponse } from "next/server";

connectDB();

export async function POST(request) {
  const { title } = await request.json();

  await todoModel.create({ title });
  return NextResponse.json({ success: true });
}

export async function GET(request) {
  const todos = await todoModel.find({});
  return NextResponse.json(todos);
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await todoModel.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
