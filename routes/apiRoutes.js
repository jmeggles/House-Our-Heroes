/* eslint-disable linebreak-style */
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const app = require("express").Router();
// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
// GET route for getting all of the posts
app.get("/posts/", function (req, res) {
  db.Post.findAll({})
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

// Get route for returning posts of a specific category
app.get("/posts/category/:category", function (req, res) {
  db.Post.findAll({
    where: {
      category: req.params.category
    }
  })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

// Get route for retrieving a single post
app.get("/posts/:id", function (req, res) {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

// POST route for saving a new post
app.post("/posts", function (req, res) {
  console.log(req.body);
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

// DELETE route for deleting posts
app.delete("/posts/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

// PUT route for updating posts
app.put("/posts", function (req, res) {
  db.Post.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

app.get("/resources/:state", function (req, res) {
  console.log(req.params.state);
  db.Stat.findOne({
    where: {
      state: req.params.state
    }
  })
    .then(function (dbResults) {
      console.log(dbResults);
      res.json(dbResults);
    });
});
module.exports = app;
