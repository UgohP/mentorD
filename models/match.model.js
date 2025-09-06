import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    mentor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mentee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "completed", "declined"],
      default: "pending",
    },
    startDate: { type: Date },
    endDate: { type: Date },
    notes: { type: String },
  },
  { timestamps: true }
);

MatchSchema.index({ mentor: 1, status: 1 });
MatchSchema.index({ mentee: 1, status: 1 });

const Match = mongoose.model("Match", MatchSchema);
export default Match;