import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { getCurrentUser } from "@/lib/auth";

import Group from "@/models/Group";
import Member from "@/models/Member";
import Expense from "@/models/Expense";

export async function GET(
  request: NextRequest
) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const searchParams =
      request.nextUrl.searchParams;

    const groupId =
      searchParams.get("groupId");

    const memberId =
      searchParams.get("memberId");

    if (!groupId || !memberId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "groupId and memberId are required",
        },
        {
          status: 400,
        }
      );
    }

    const group = await Group.findOne({
      _id: groupId,
      createdBy: user.userId,
    }).select("_id name");

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

    const currentMember =
      await Member.findOne({
        _id: memberId,
        groupId,
      }).select("_id name");

    if (!currentMember) {
      return NextResponse.json(
        {
          success: false,
          message: "Member not found",
        },
        {
          status: 404,
        }
      );
    }

    // Total Members
    const memberCount =
      await Member.countDocuments({
        groupId,
      });

    // Total Expense
    const expenseSummary =
      await Expense.aggregate([
        {
          $match: {
            groupId: group._id,
          },
        },
        {
          $group: {
            _id: null,
            totalExpense: {
              $sum: "$amount",
            },
          },
        },
      ]);

    const totalExpense =
      expenseSummary.length > 0
        ? expenseSummary[0]
            .totalExpense
        : 0;

    // Recent Expenses
    const recentExpenses =
      await Expense.find({
        groupId,
      })
        .populate(
          "paidBy",
          "name"
        )
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select(
          "_id title amount paidBy createdAt"
        );

    return NextResponse.json(
      {
        success: true,

        group,

        currentMember,

        summary: {
          memberCount,

          totalExpense,

          totalBalance: 0,

          toSettle: 0,
        },

        recentExpenses,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Dashboard Error:",
      error
    );

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