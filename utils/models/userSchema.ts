import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    _id: { type: String, required: true },
    _type: { type: String, required: true },
    loggedIn: { type: Number, default: 1 },
    password: { type: String },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
  },
  {
    // add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
