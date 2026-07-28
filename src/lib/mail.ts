import { verifyEmailTemplate } from "@/features/auth/templates/verify-email.template";
import nodemailer from "nodemailer";


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
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: verifyEmailTemplate({
      name,
      otp,
    }),
  });
}