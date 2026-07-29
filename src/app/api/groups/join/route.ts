import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { getCurrentUser } from "@/lib/auth";

import Group from "@/models/Group";

export async function POST(
  request: NextRequest
) {
  try {
    await connectDB();

    await getCurrentUser();

    const { inviteCode } =
      await request.json();

    if (!inviteCode) {
      return NextResponse.json(
        {
          success: false,
          message: "Invite code is required",
        },
        {
          status: 400,
        }
      );
    }

    const group = await Group.findOne({
      inviteCode: inviteCode
        .toUpperCase()
        .trim(),
    }).select("_id");

    if (!group) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid invite code",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        groupId: group._id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}