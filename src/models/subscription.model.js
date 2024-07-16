import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who subcribing
      ref: "User",
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId, //one who is being subscribed
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
export const Subscription = mongoose.model("Subscription", subscriptionSchema);
 