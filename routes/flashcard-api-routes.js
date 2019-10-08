// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the flashcards
  app.get("/api/flashcards", function(req, res) {
    var query = {};
    if (req.query.subject_id) {
      query.SubjectId = req.query.subject_id;
    }
    // 1. Add a join here to include all of the Subjects to these flashcards
    db.Flashcard.findAll({
      where: query,
      include: [db.Subject]
    }).then(function(dbFlashcard) {
      res.json(dbFlashcard);
    });
  });

  // Get route for retrieving a single flashcard
  app.get("/api/flashcards/:id", function(req, res) {
    // 2. Add a join here to include the Subject who wrote the Flashcard
    db.Flashcard.findOne({
      where: {
        id: req.params.id,
        include: [db.Subject]
      }
    }).then(function(dbFlashcard) {
      console.log(dbFlashcard);
      res.json(dbFlashcard);
    });
  });

  // POST route for saving a new flashcard
  app.post("/api/flashcards", function(req, res) {
    db.Flashcard.create(req.body).then(function(dbFlashcard) {
      res.json(dbFlashcard);
    });
  });

  // DELETE route for deleting flashcards
  app.delete("/api/flashcards/:id", function(req, res) {
    db.Flashcard.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFlashcard) {
      res.json(dbFlashcard);
    });
  });

  // PUT route for updating flashcards
  app.put("/api/flashcards", function(req, res) {
    db.Flashcard.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbFlashcard) {
      res.json(dbFlashcard);
    });
  });
};
