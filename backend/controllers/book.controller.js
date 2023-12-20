import { db } from "../config.js";

export const allBooks = (req, res) => {
  const sql = "SELECT * FROM book";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
};

export const createBook = (req, res) => {
  const sql = "INSERT INTO book (publisher, name, date) VALUES (?)";
  const values = [req.body.publisher, req.body.name, req.body.date];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
};

export const updateBook = (req, res) => {
  const sql = "update book set publisher = ?, name=?, date = ? where id = ?";
  const values = [req.body.publisher, req.body.name, req.body.date];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
};

export const deleteBook = (req, res) => {
  const sql = "delete from book where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
};

export const getBook = (req, res) => {
  const sql = "SELECT * FROM book where id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    return res.json(data);
  });
};
