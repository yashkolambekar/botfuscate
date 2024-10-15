import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: false
    }
})

export default mongoose.model("Chat", chatSchema);
