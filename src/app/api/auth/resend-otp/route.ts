import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import { generateOTP } from "@/features/auth/otp/generateOTP";
import { sendVerificationEmail } from "@/features/auth/services/mail.service";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    if (user.emailVerified) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is already verified",
        },
        {
          status: 400,
        }
      );
    }

    const otp = generateOTP();

    const hashedOtp = await bcrypt.hash(
      otp,
      10
    );

    user.otp = hashedOtp;
    user.otpExpiry = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await user.save();

    await sendVerificationEmail({
      name: user.name,
      email: user.email,
      otp,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "OTP sent successfully. Please check your email.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Resend OTP Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}