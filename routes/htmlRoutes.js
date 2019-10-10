var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/user", function(req, res) {
    res.render("user", {});
  });

  app.get("/subjects/:subjectId", function(req, res) {
    var subjectId = req.params.subjectId;
    db.Subject.findOne({
      where: {
        id: subjectId
      }
    })
      .then(function(subject) {
        db.Flashcard.findAll({
          where: {
            SubjectId: subjectId
          }
        })
          .then(function(flashcards) {
            console.log("SUBJECT, FLASHCARDS", subject, flashcards);
            res.render("viewCards", {
              subject: subject,
              flashcards: flashcards
            });
          })
          .catch(function(err) {
            console.log("ERR - No Flashcards for Subject", err);
            res.render("viewCards", {
              subject: subject,
              flashcards: []
            });
          });
      })
      .catch(function(err) {
        console.log("ERR - No subject for ID", err);
        res.redirect("404");
      });
  });

  app.get("/create", function(req, res) {
    res.render("create", {});
  });

  app.get("/subjects", function(req, res) {
    res.render("subjects", {});
  });

  app.get("/login", function(req, res) {
    res.render("login", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
