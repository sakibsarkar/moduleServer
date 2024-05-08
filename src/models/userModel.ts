import mongoose from "mongoose";

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false, // todo -> true
  },
  lastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  webLink: {
    type: String,
    required: false,
  },
  profile_link: {
    type: String,
    required: true,
  },
  contactNum: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  privacy: {
    type: String,
    enum: ["public", "private"],
    default: "public",
  },
  otp: {
    type: Number,
    default: 0,
  },
  isVarify: {
    type: Boolean,
    default: false,
  },
  file: {
    type: String,
    default: "",
  },
});

export default mongoose.model("user", User);
