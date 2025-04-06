import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    wallet: { type: Number, default: 400 },
    isAdmin: { type: Boolean, default: false } // <--- add this
  });
  

const User = mongoose.model("User", userSchema);
export default User;
