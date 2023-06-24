import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { questionsRoute } from "./services/questions";
const server = express();
config();

server.use("/questions", questionsRoute)


mongoose
  .connect(process.env.MONGOOSE_URI as string)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log("OK!");
    });
  });
