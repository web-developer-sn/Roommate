import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      groupId: string;
    }>;
  }
) {
  const { groupId } = await params;

  return NextResponse.json({
    success: true,
    message: "Dummy GET Route",
    groupId,
  });
}

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      groupId: string;
    }>;
  }
) {
  const { groupId } = await params;

  return NextResponse.json({
    success: true,
    message: "Dummy PUT Route",
    groupId,
  });
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      groupId: string;
    }>;
  }
) {
  const { groupId } = await params;

  return NextResponse.json({
    success: true,
    message: "Dummy DELETE Route",
    groupId,
  });
}