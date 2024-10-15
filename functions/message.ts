import fs from "fs";
import Message from "../models/Message";
import { saveOrUpdateChat } from "./chat";

const saveMessage = async (body: any) => {
  try{
    saveOrUpdateChat(body.message.chat);
  }catch{(err : Error) => {
    console.error(err);
  }}
  fs.writeFileSync(`./messages/${body.update_id}.json`, JSON.stringify(body));
  Message.create(body)
    .then((res: any) => {
      return true;
    })
    .catch((err: any) => {
      console.error(err);
      return false;
    });
  return true;
};

const getAllMessages = async () => {
  try {
    const messages = await Message.find({});
    return messages;
  } catch {
    (err: any) => {
      console.error(err);
      return [];
    };
  }
};

const getMessagesByChatId = async (id: Number) => {
  try {
    const messages = await Message.find({ "message.chat.id": id });
    return messages;
  } catch {
    (err: any) => {
      console.error(err);
      return [];
    };
  }
};

export { saveMessage, getAllMessages, getMessagesByChatId };
