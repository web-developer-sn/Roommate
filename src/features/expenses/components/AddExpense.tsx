"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Controller,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  createExpenseSchema,
  type CreateExpenseInput,
} from "../schemas/create-expense.schema";

import { useAddExpense } from "../hooks/useAddExpense";
import { useMembers } from "@/features/members/hooks/useMembers";
import item from "./item";

type ExpenseFormData = z.infer<
  typeof createExpenseSchema
>;

export default function AddExpense() {
    
  const router = useRouter();

  const [groupId, setGroupId] =
    useState("");

  useEffect(() => {
    const id =
      localStorage.getItem("groupId") ??
      "";

    setGroupId(id);
  }, []);

  const { data } =
    useMembers(groupId);

  const members =
    data?.members ?? [];

  const addExpenseMutation =
    useAddExpense();

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(
      createExpenseSchema
    ),

    defaultValues: {
      category:"",
      title: "",

      amount: 0,

      paidBy: "",

      splitBetween: [],
    },
  });

  const onSubmit = (
    item: ExpenseFormData
  ) => {
    addExpenseMutation.mutate(
      {
        groupId,

        data:{
          category:item?.category,
          title:(item?.category==="other")?item.title:item?.category,
          amount:item?.amount,
          paidBy:item?.paidBy,
          splitBetween:item?.splitBetween
        },
      },
      {
        onSuccess() {
          router.push(
            "/dashboard"
          );
        },

        onError(error: any) {
          console.log(
            error.response?.data
          );
        },
      }
    );
  };
  const category=watch("category")
const dropDownData=item()
  return (
    <main className="flex min-h-screen justify-center bg-[#F7F4FF] py-8">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-[35px] bg-white shadow-xl"
      >

        {/* Header */}

        <div className="flex items-center px-6 py-6">

          <ArrowLeft
            className="cursor-pointer"
            onClick={() =>
              router.back()
            }
          />

          <h1 className="flex-1 text-center text-2xl font-bold">
            Add Expense
          </h1>

          <div className="w-6" />

        </div>

        <div className="space-y-6 px-6 pb-8">
                      {/* Expense Name */}

          <div>
            <label className="mb-2 block font-semibold">
              Expense Name
            </label>

<select {...register("category")}
 className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-violet-500"
>
  {
    dropDownData.map((item)=>(
      <option 
      key={item.value} 
      value={item.value}
      >
{item.label}
      </option>
    ))
  }
</select>
            { 
            category==="other" && (
              <input
              {...register("title")}
              placeholder="Milk"
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-violet-500 mt-2"
            />) }

            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Amount */}

          <div>
            <label className="mb-2 block font-semibold">
              Amount
            </label>

            <input
              type="number"
              {...register("amount", {
                valueAsNumber: true,
              })}
              placeholder="120"
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-violet-500"
            />

            {errors.amount && (
              <p className="mt-1 text-sm text-red-500">
                {errors.amount.message}
              </p>
            )}
          </div>

          {/* Paid By */}

          <div>
            <label className="mb-2 block font-semibold">
              Paid By
            </label>

            <Controller
              control={control}
              name="paidBy"
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-violet-500"
                >
                  <option value="">
                    Select Member
                  </option>

                  {members.map((member: any) => (
                    <option
                      key={member._id}
                      value={member._id}
                    >
                      {member.name}
                    </option>
                  ))}
                </select>
              )}
            />

            {errors.paidBy && (
              <p className="mt-1 text-sm text-red-500">
                {errors.paidBy.message}
              </p>
            )}
          </div>

          {/* Split Between */}

          <div>
            <label className="mb-3 block font-semibold">
              Split Between
            </label>

            <Controller
              control={control}
              name="splitBetween"
              render={({ field }) => (
                <div className="space-y-3">

                  {members.map((member: any) => (
                    <label
                      key={member._id}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3"
                    >
                      <input
                        type="checkbox"
                        checked={field.value.includes(
                          member._id
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            field.onChange([
                              ...field.value,
                              member._id,
                            ]);
                          } else {
                            field.onChange(
                              field.value.filter(
                                (id) =>
                                  id !== member._id
                              )
                            );
                          }
                        }}
                      />

                      <span>
                        {member.name}
                      </span>

                    </label>
                  ))}

                </div>
              )}
            />

            {errors.splitBetween && (
              <p className="mt-1 text-sm text-red-500">
                {errors.splitBetween.message}
              </p>
            )}
          </div>

          {/* Save Button */}

          <button
            type="submit"
            disabled={addExpenseMutation.isPending}
            className="w-full rounded-xl bg-gradient-to-r from-violet-700 to-violet-500 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {addExpenseMutation.isPending
              ? "Saving..."
              : "Save Expense"}
          </button>

        </div>
      </form>
    </main>
  );
}