import express from "express";
import {
  allBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook,
} from "../controllers/book.controller.js";

const router = express();

router.get("/", allBooks);
router.post("/create", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);
router.get("/getrecord/:id", getBook);

export default router;
