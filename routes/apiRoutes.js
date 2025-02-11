const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
  db.raman_assesment.findAll().then((todos) => res.send(todos));
});

// get single todo by id
router.get("/find/:id", (req, res) => {
  db.raman_assesment
    .findAll({
      where: {
        id: req.params.id,
      },
    })
    .then((todo) => res.send(todo));
});

// post new todo
router.post("/new", (req, res) => {
  db.raman_assesment
    .create({
      text: req.body.text,
    })
    .then((submitedTodo) => res.send(submitedTodo));
});

// delete todo
router.delete("/delete/:id", (req, res) => {
  db.raman_assesment
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.send("success"));
});

// edit a todo
router.put("/edit", (req, res) => {
  db.raman_assesment
    .update(
      {
        text: req.body.text,
      },
      {
        where: { id: req.body.id },
      }
    )
    .then(() => res.send("success"));
});

module.exports = router;
