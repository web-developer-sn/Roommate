import {
  ClipboardList,
  Plus,
} from "lucide-react";

export default function RecentExpense() {
  return (
   <section className="mt-8">
  <h2 className="mb-5 text-xl font-bold">
    Recent Expenses
  </h2>

  <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
    <div className="flex justify-center">
      ...
    </div>

    <h3 className="mt-6 text-center text-2xl font-bold">
      No expenses yet
    </h3>

    <p className="mt-3 text-center text-gray-500">
      Add your first expense
    </p>

    <button className="mx-auto mt-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 font-semibold text-white">
      Add Expense
    </button>
  </div>
</section>
  );
}