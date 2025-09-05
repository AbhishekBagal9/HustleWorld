import  express from "express";
import env from "dotenv";
import connectDB from "./database/db.js";
import { User } from "./models/user.model.js";
import cors from "cors";
import userRoute from "./routes/useroute.js";
import cookieParser from "cookie-parser";

env.config();//after import just package we need to config it so we are telling take data form .envfile.
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://hustle-world-chj9.vercel.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


const PORT = process.env.PORT || 3000;
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port "http://localhost:${PORT}"`);
});

