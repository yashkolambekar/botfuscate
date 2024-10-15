import express from "express";
import axios from "axios";
import fs from "fs";
import { constructUrl } from "../functions/urlhelpers";

const v1Router = express.Router();

v1Router.post("/webhook", (req, res) => {
  console.log(req.body);
  fs.writeFileSync(`./messages/${req.body.update_id}.json`, JSON.stringify(req.body));
  if (req.body.message) {
    console.log("is a message");
    if (req.body.message.photo) {
      console.log(req.body.message.photo[0]);
    }
  } else {
    console.log("not a message");
  }
  res.json({
    success: true,
  });
});

export default v1Router;
