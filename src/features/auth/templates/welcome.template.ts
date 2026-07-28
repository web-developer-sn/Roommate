interface WelcomeTemplateProps {
  name: string;
}

export function welcomeTemplate({
  name,
}: WelcomeTemplateProps) {
  return `
<h2>Welcome ${name} 🎉</h2>

<p>

Your account has been successfully verified.

</p>

<p>

Now you can create groups,
add roommates,
track expenses
and settle balances.

</p>
`;
}