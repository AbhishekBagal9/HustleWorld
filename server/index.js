import  express from "express";
import env from "dotenv";
import connectDB from "./database/db.js";

env.config();//after import just package we need to config it so we are telling take data form .envfile.
connectDB();
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port "http://localhost:${PORT}"`);
});

