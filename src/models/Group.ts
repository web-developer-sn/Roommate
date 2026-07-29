import mongoose, {
  Schema,
  Types,
  Document,
} from "mongoose";

export interface IGroup extends Document {
  name: string;

  description?: string;

  inviteCode: string;

  createdBy: Types.ObjectId;

  createdAt: Date;
  updatedAt: Date;
}

const groupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    inviteCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

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

const Group =
  mongoose.models.Group ||
  mongoose.model<IGroup>(
    "Group",
    groupSchema
  );

export default Group;