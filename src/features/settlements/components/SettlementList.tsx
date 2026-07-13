import SettlementCard from "./SettlementCard";
import { Settlement } from "../types/settlement.types";

interface SettlementListProps {
  settlements: Settlement[];
}

export default function SettlementList({
  settlements,
}: SettlementListProps) {
  if (settlements.length === 0) {
    return (
      <div className="rounded-xl border p-6 text-center">
        <p className="font-medium">
          All partners are settled 🎉
        </p>

        <p className="mt-1 text-sm text-gray-500">
          No pending payments found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {settlements.map((settlement, index) => (
        <SettlementCard
          key={`${settlement.fromUserId}-${settlement.toUserId}-${index}`}
          settlement={settlement}
        />
      ))}
    </div>
  );
}