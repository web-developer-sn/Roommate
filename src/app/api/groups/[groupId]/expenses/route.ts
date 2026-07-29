import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { getCurrentUser } from "@/lib/auth";

import Expense from "@/models/Expense";
import Group from "@/models/Group";
import Member from "@/models/Member";

import { createExpenseSchema } from "@/features/expenses/schemas/create-expense.schema";

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
      createExpenseSchema.safeParse(body);

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

    const {
      title,
      amount,
      paidBy,
      splitBetween,
    } = validated.data;

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

    const paidByMember =
      await Member.findOne({
        _id: paidBy,
        groupId,
      });

    if (!paidByMember) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid paidBy member",
        },
        {
          status: 400,
        }
      );
    }

    const members =
      await Member.find({
        _id: {
          $in: splitBetween,
        },
        groupId,
      });

    if (
      members.length !==
      splitBetween.length
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid split members",
        },
        {
          status: 400,
        }
      );
    }

    const expense =
      await Expense.create({
        groupId,

        title,

        amount,

        paidBy,

        splitBetween,

        createdBy: user.userId,
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Expense added successfully",
        expense,
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

    const expenses =
      await Expense.find({
        groupId,
      })
        .populate(
          "paidBy",
          "name"
        )
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      {
        success: true,
        expenses,
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