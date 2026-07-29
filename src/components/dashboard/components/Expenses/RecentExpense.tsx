import {
  ClipboardList,
  Plus,
} from "lucide-react";

interface Expense {
  _id: string;
  title: string;
  amount: number;

  paidBy: {
    _id: string;
    name: string;
  };

  createdAt: string;
}
interface RecentExpenseProps {
  expenses: Expense[];
}

export default function RecentExpense({
  expenses,
}: RecentExpenseProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-5 text-xl font-bold">
        Recent Expenses
      </h2>

      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

        {expenses.length === 0 ? (
          <>
            <div className="flex justify-center">

              <ClipboardList
                size={70}
                className="text-violet-500"
              />

            </div>

            <h3 className="mt-6 text-center text-2xl font-bold">
              No expenses yet
            </h3>

            <p className="mt-3 text-center text-gray-500">
              Add your first expense
            </p>

            <button className="mx-auto mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 font-semibold text-white">

              <Plus size={18} />

              Add Expense

            </button>
          </>
        ) : (
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div
                key={expense._id}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {expense.title}
                  </h3>

                  <p className="text-sm text-gray-500">
  Paid by {expense.paidBy.name}
</p>
                </div>

                <h3 className="font-bold text-violet-600">
                  ₹{expense.amount}
                </h3>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}