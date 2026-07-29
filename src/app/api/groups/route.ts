import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { getCurrentUser } from "@/lib/auth";

import Group from "@/models/Group";

import { createGroupSchema } from "@/features/groups/schemas/create-group.schema";

export async function POST(
  request: NextRequest
) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const body = await request.json();

    const validated =
      createGroupSchema.safeParse(body);

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

    const { name, description } =
      validated.data;

    const group = await Group.create({
      name,
      description,

      createdBy: user.userId,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Group created successfully",

        group,
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