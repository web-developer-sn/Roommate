import { ExpensePartner } from "../types/expense.types";

interface SplitSelectorProps {
  partners: ExpensePartner[];
  selectedUserIds: string[];
  onChange: (userIds: string[]) => void;
}

export default function SplitSelector({
  partners,
  selectedUserIds,
  onChange,
}: SplitSelectorProps) {
  function handleToggle(userId: string) {
    const isSelected =
      selectedUserIds.includes(userId);

    if (isSelected) {
      onChange(
        selectedUserIds.filter(
          (id) => id !== userId
        )
      );

      return;
    }

    onChange([...selectedUserIds, userId]);
  }

  return (
    <div>
      <p className="mb-2 font-medium">
        Split Between
      </p>

      <div className="space-y-2">
        {partners.map((partner) => (
          <label
            key={partner.id}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="checkbox"
              checked={selectedUserIds.includes(
                partner.id
              )}
              onChange={() =>
                handleToggle(partner.id)
              }
            />

            <span>{partner.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}