const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema({
  update_id: {
    type: Number,
    required: true,
  },
  message: {
    message_id: {
      type: Number,
      required: true,
    },
    from: {
      id: {
        type: Number,
        required: true,
      },
      is_bot: {
        type: Boolean,
        required: true,
      },
      first_name: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      language_code: {
        type: String,
      },
    },
    chat: {
      id: {
        type: Number,
        required: true,
      },
      first_name: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: false
      },
      type: {
        type: String,
        required: true,
        enum: ["private", "group", "supergroup", "channel"],
      },
    },
    media_group_id: {
      type: String,
      required: false
    },
    date: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    entities: {
      type: Array,
      required: false,
    },
    photo: {
      type: Array,
      required: false,
    },
    video: {
      type: Array,
      required: false,
    },
  },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
