import mongoose, {
  Schema,
  Types,
} from "mongoose";

export interface IExpense {
  groupId: Types.ObjectId;

  title: string;

  amount: number;

  paidBy: Types.ObjectId;

  splitBetween: Types.ObjectId[];

  createdBy: Types.ObjectId;
}

const expenseSchema = new Schema<IExpense>(
  {
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    paidBy: {
      type: Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },

    splitBetween: [
      {
        type: Schema.Types.ObjectId,
        ref: "Member",
      },
    ],

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default
mongoose.models.Expense ||
mongoose.model<IExpense>(
  "Expense",
  expenseSchema
);