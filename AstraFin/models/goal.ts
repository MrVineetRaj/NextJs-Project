import mongoose from "mongoose";

// <<<<<<< nitin

export interface IGoal {
  _id?: string;
  userId?: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date | number;
  category: string;
  description: string;
  createdAt: Date | number;
}

const GoalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    targetAmount: {
      type: Number,
      required: true,
      min: 1,
    },
    currentAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    targetDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      default: "other",
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
// =======

// const GoalSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   targetAmount: {
//     type: Number,
//     required: true,
//   },
//   currentAmount: {
//     type: Number,
//     default: 0,
//   },
//   targetDate: {
//     type: Date,
//     required: true,
//   },
//   category: {
//     type: String,
//     default: "other",
//   },
//   description: {
//     type: String,
//     default: "",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });
// >>>>>>> main

GoalSchema.virtual("progress").get(function () {
// <<<<<<< nitin
  return Math.round((this.currentAmount / this.targetAmount) * 100) || 0;
});
// =======
//   return Math.round((this.currentAmount / this.targetAmount) * 100);
// });

// Ensure virtuals are included in JSON output
GoalSchema.set("toJSON", { virtuals: true });
GoalSchema.set("toObject", { virtuals: true });
// >>>>>>> main

export const Goal = mongoose.models.Goal || mongoose.model("Goal", GoalSchema);
