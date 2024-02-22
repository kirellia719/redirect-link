import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import router from "./routes.js";

dotenv.config();
const app = express();

// Public
app.use("/public", express.static("public/"));

// Middleware
app.use(cors());
app.use(morgan("short"));

// Route
app.use("/", router);

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
