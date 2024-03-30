import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO).
then(console.log("DB connected")).catch(err => console.log(err)) ;

app.listen(3000, () => {
  console.log("Server running in port 3000");
});

// app.use("http://localhost:3000/addUser", userRouter);

// app.get("/", testRoute);
