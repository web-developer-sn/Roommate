interface VerifyEmailTemplateProps {
  name: string;
  otp: string;
}

export function verifyEmailTemplate({
  name,
  otp,
}: VerifyEmailTemplateProps) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>
body{
font-family:Arial,sans-serif;
background:#f4f4f4;
padding:40px;
}

.container{
max-width:600px;
margin:auto;
background:#fff;
padding:40px;
border-radius:16px;
}

.otp{
font-size:32px;
font-weight:bold;
letter-spacing:8px;
color:#7C3AED;
}

.footer{
margin-top:30px;
font-size:13px;
color:#888;
}
</style>
</head>

<body>

<div class="container">

<h2>Hello ${name} 👋</h2>

<p>
Welcome to Room Partner.
</p>

<p>
Use this OTP to verify your email.
</p>

<div class="otp">
${otp}
</div>

<p>
OTP expires in <strong>10 minutes</strong>.
</p>

<div class="footer">
If you didn't create this account, please ignore this email.
</div>

</div>

</body>
</html>
`;
}