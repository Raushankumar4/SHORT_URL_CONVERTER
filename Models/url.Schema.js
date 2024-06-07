import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    longUrl: String,
  },
  { timestamps: true }
);

export const Url = mongoose.model("shortUrl", urlSchema);
