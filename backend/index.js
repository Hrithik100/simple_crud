import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { db } from "./config.js";
import bookRoutes from "./routes/book.route.js"

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT;

app.use("/book", bookRoutes)

app.listen(port, () => {
  console.log("Running");
});
