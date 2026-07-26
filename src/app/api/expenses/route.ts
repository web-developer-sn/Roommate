import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Expenses API Working",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(body);
}