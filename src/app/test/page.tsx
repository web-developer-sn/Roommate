"use client";

import { showToast } from "@/components/ui/toast";



export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl space-y-4">
        <h1 className="text-2xl font-bold text-center">
          🎉 Toast Test Page
        </h1>

        <button
          onClick={() =>
            showToast.success(
              "Success!",
              "Expense added successfully."
            )
          }
          className="w-full rounded-xl bg-emerald-600 py-3 font-medium text-white hover:bg-emerald-700 transition"
        >
          Success Toast
        </button>

        <button
          onClick={() =>
            showToast.error(
              "Error!",
              "Something went wrong."
            )
          }
          className="w-full rounded-xl bg-red-600 py-3 font-medium text-white hover:bg-red-700 transition"
        >
          Error Toast
        </button>

        <button
          onClick={() =>
            showToast.warning(
              "Warning!",
              "Please fill all required fields."
            )
          }
          className="w-full rounded-xl bg-yellow-500 py-3 font-medium text-white hover:bg-yellow-600 transition"
        >
          Warning Toast
        </button>

        <button
          onClick={() =>
            showToast.info(
              "Information",
              "New update is available."
            )
          }
          className="w-full rounded-xl bg-sky-600 py-3 font-medium text-white hover:bg-sky-700 transition"
        >
          Info Toast
        </button>

        <button
          onClick={() => {
            showToast.success("Success", "This is success.");
            setTimeout(() => {
              showToast.error("Error", "This is error.");
            }, 800);
            setTimeout(() => {
              showToast.warning("Warning", "This is warning.");
            }, 1600);
            setTimeout(() => {
              showToast.info("Info", "This is information.");
            }, 2400);
          }}
          className="w-full rounded-xl bg-violet-600 py-3 font-medium text-white hover:bg-violet-700 transition"
        >
          Test All Toasts
        </button>
      </div>
    </div>
  );
}