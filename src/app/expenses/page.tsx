import ExpenseManager from "@/features/expenses/components/ExpenseManager";

export default function ExpensesPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Room Expenses
      </h1>

      <ExpenseManager />
    </main>
  );
}