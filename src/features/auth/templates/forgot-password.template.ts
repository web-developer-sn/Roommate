interface ForgotPasswordTemplateProps {
  name: string;
  otp: string;
}

export function forgotPasswordTemplate({
  name,
  otp,
}: ForgotPasswordTemplateProps) {
  return `
<h2>Hello ${name}</h2>

<p>Your password reset OTP is</p>

<h1>${otp}</h1>

<p>This OTP expires in 10 minutes.</p>
`;
}