export function formatCurrency(amountPaise: number): string {
  const amountInRupees = amountPaise / 100;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amountInRupees);
}