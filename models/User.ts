import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    location: String
});

module.exports = mongoose.model("User", userSchema);
