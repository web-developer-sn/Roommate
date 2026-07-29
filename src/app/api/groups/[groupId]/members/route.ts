import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { getCurrentUser } from "@/lib/auth";

import Member from "@/models/Member";
import Group from "@/models/Group";

import { createMemberSchema } from "@/features/members/schemas/create-member.schema";


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
  try {
    await connectDB();

    const user = await getCurrentUser();

    const { groupId } = await params;

    const group = await Group.findOne({
      _id: groupId,
      createdBy: user.userId,
    });
  
    if (!group) {
      return NextResponse.json(
        {
          success: false,
          message: "Group not found",
        },
        {
          status: 404,
        }
      );
    }

    const members = await Member.find({
      groupId,
      createdBy: user.userId,
    }).sort({
      createdAt: 1,
    });
    
    return NextResponse.json(
      {
        success: true,
        members,
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

/* =========================================
   ADD MEMBER
   POST /api/groups/:groupId/members
========================================= */

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      groupId: string;
    }>;
  }
) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const { groupId } = await params;

    const body = await request.json();

    const validated =
      createMemberSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors:
            validated.error.flatten()
              .fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const group = await Group.findOne({
      _id: groupId,
      createdBy: user.userId,
    });

    if (!group) {
      return NextResponse.json(
        {
          success: false,
          message: "Group not found",
        },
        {
          status: 404,
        }
      );
    }

    const existingMember =
      await Member.findOne({
        groupId,
        name: validated.data.name,
      });

    if (existingMember) {
      return NextResponse.json(
        {
          success: false,
          message: "Member already exists",
        },
        {
          status: 409,
        }
      );
    }

    const member =
      await Member.create({
        name: validated.data.name,
        groupId,
        createdBy: user.userId,
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Member added successfully",
        member,
      },
      {
        status: 201,
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