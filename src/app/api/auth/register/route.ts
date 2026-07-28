import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { registerSchema } from "@/features/auth/schemas/register.schema";
import { sendVerificationEmail } from "@/lib/mail";
import { generateOTP } from "@/features/auth/otp/generateOTP";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const validatedData = registerSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validatedData.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const {
      name,
      email,
      password,
    } = validatedData.data;

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    }).lean();

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists",
        },
        {
          status: 409,
        }
      );
    }

   const hashedPassword = await bcrypt.hash(password, 12);

const otp = generateOTP();

const hashedOtp = await bcrypt.hash(otp, 10);

const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

const user = await User.create({
  name: name.trim(),
  email: normalizedEmail,
  password: hashedPassword,

  otp: hashedOtp,
  otpExpiry,
  emailVerified: false,
});

await sendVerificationEmail({
  name: user.name,
  email: user.email,
  otp,
});
   return NextResponse.json(
  {
    success: true,
    message: "Verification OTP sent successfully.",

    data: {
      email: user.email,
    },
  },
  {
    status: 201,
  }
);
  } catch (error) {
    console.error("Register Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}