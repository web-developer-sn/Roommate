import { MemberBalance } from "../types/balance.types";
import { formatCurrency } from "@/utils/formatCurrency";

interface BalanceTableProps {
  balances: MemberBalance[];
}

export default function BalanceTable({
  balances,
}: BalanceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-3 text-left">
              Partner
            </th>

            <th className="border p-3 text-right">
              Total Paid
            </th>

            <th className="border p-3 text-right">
              Actual Share
            </th>

            <th className="border p-3 text-right">
              Net Balance
            </th>
          </tr>
        </thead>

        <tbody>
          {balances.map((balance) => (
            <tr key={balance.userId}>
              <td className="border p-3">
                {balance.name}
              </td>

              <td className="border p-3 text-right">
                {formatCurrency(
                  balance.totalPaidPaise
                )}
              </td>

              <td className="border p-3 text-right">
                {formatCurrency(
                  balance.actualSharePaise
                )}
              </td>

              <td className="border p-3 text-right font-semibold">
                {balance.netBalancePaise > 0 && "+"}

                {formatCurrency(
                  balance.netBalancePaise
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}