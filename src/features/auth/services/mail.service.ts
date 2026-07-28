import nodemailer from "nodemailer";
import { verifyEmailTemplate } from "../templates/verify-email.template";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});

interface SendVerificationEmailProps {
  name: string;
  email: string;
  otp: string;
}

export async function sendVerificationEmail({
  name,
  email,
  otp,
}: SendVerificationEmailProps) {
  try {
    const info = await transporter.sendMail({
      from: `"Room Partner" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email - Room Partner",
      html: verifyEmailTemplate({
        name,
        otp,
      }),
    });

    console.log("✅ Email Sent:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("❌ Email Error:", error);

    throw new Error("Failed to send verification email");
  }
}