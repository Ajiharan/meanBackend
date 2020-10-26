import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("<p>Hi Express js</p>");
});

app.listen(5000 || process.env.PORT, () => {
  console.log("server is connected");
});
