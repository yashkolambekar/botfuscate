require("dotenv").config();
import Express from "express";
const app = Express();
import v1Router from "./routes/v1";

import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL || "");

app.use(Express.json());
app.use("/v1", v1Router);


app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
