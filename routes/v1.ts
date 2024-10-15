import express from "express";
import {
  getAllMessages,
  getMessagesByChatId,
  saveMessage,
} from "../functions/message";
import { isNumberObject } from "util/types";
import { getAllChats } from "../functions/chat";

const v1Router = express.Router();

v1Router.post("/webhook", (req, res) => {
  saveMessage(req.body);
  res.json({
    success: true,
  });
});

v1Router.get("/messages", async (req, res) => {

  if (req.query.chat != undefined) {
    if(isNaN(+req.query.chat)){
      res.sendStatus(400);
      return;
    }
    getMessagesByChatId(Number(req.query.chat))
      .then((nestedres) => {
        res.json(nestedres);
        return;
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        return;
      });
  }
  
  getAllMessages()
    .then((nestedres) => {
      res.json(nestedres);
      return;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
      return;
    });
});

v1Router.get("/chats", async (req, res) => {
  const chats = await getAllChats();
  res.json(chats);
});

export default v1Router;
