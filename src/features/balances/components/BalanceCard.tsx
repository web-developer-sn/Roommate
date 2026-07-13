import { MemberBalance } from "../types/balance.types";
import { formatCurrency } from "@/utils/formatCurrency";

interface BalanceCardProps {
  balance: MemberBalance;
}

export default function BalanceCard({
  balance,
}: BalanceCardProps) {
  const isPositive = balance.netBalancePaise > 0;
  const isNegative = balance.netBalancePaise < 0;

  let status = "Settled";

  if (isPositive) {
    status = "You will receive";
  }

  if (isNegative) {
    status = "You need to pay";
  }

  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">
        {balance.name}
      </h3>

      <div className="mt-3 space-y-2">
        <p>
          Total Paid:{" "}
          {formatCurrency(balance.totalPaidPaise)}
        </p>

        <p>
          Actual Share:{" "}
          {formatCurrency(balance.actualSharePaise)}
        </p>

        <p className="font-semibold">
          Net Balance:{" "}
          {formatCurrency(balance.netBalancePaise)}
        </p>

        <p className="text-sm">
          {status}
        </p>
      </div>
    </div>
  );
}