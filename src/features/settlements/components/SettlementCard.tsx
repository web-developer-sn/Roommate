import { Settlement } from "../types/settlement.types";
import { formatCurrency } from "@/utils/formatCurrency";

interface SettlementCardProps {
  settlement: Settlement;
}

export default function SettlementCard({
  settlement,
}: SettlementCardProps) {
  return (
    <div className="rounded-xl border p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold">
            {settlement.fromName}
          </p>

          <p className="text-sm text-gray-500">
            pays
          </p>

          <p className="font-semibold">
            {settlement.toName}
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold">
            {formatCurrency(settlement.amountPaise)}
          </p>
        </div>
      </div>
    </div>
  );
}