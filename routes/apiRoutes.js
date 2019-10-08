var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  // mine
  app.get("/api/flashcards", function(req, res) {
    db.Flashcards.findAll({}).then(function(dbFlashcard) {
      res.json(dbFlashcard);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // mine
  app.post("/api/flashcards", function(req, res) {
    db.Flashcards.create(req.body).then(function(dbFlashcard) {
      res.json(dbFlashcard);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
