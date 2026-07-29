import mongoose, {
  Document,
  Schema,
  Types,
} from "mongoose";

export interface IMember extends Document {
  name: string;

  groupId: Types.ObjectId;

  createdBy: Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}

const memberSchema = new Schema<IMember>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
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

export default
  mongoose.models.Member ||
  mongoose.model<IMember>(
    "Member",
    memberSchema
  );