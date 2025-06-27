import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fs from "fs";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();
// Try to load .env from backend directory first, then fallback to parent
const backendEnv = path.join(__dirname, ".env");
const parentEnv = path.join(__dirname, "../.env");
if (fs.existsSync(backendEnv)) {
  dotenv.config({ path: backendEnv });
} else {
  dotenv.config({ path: parentEnv });
}
console.log("Environment variables:", process.env);

// const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["https://vartalaap-uuln.onrender.com"],
    credentials: true,
  })
);
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(process.env.MONGO_URI);
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
