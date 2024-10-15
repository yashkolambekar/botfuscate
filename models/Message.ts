const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    update_id: Number,
    message: {
      message_id: Number,
      from: {
        id: Number,
        is_bot: Boolean,
        first_name: String,
        username: String,
        language_code: String,
      },
      chat: {
        id: Number,
        first_name: String,
        username: String,
        type: String,
      },
      date: Number,
      text: String,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("Message", messageSchema);
