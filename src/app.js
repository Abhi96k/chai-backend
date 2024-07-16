import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    orgin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "30kb",
    extended: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "30kb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";

//route deleration
app.use("/api/v1/users", userRouter);

//http://localhost:8000/api/v1/users/login

//http://localhost:8000/api/v1/users/register

export { app };
