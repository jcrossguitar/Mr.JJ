var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
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


  // subject api routes
  app.get("/api/subjects", function(req, res) {
    // var query = {};
    // if (req.query.flashcard_id) {
    //   query.FlashcardId = req.query.flashcard_id;
    // }
    // 1. Add a join to include all of each Subject's Posts
    db.Subject.findAll({
      // where: query,
      // include: [db.Post]
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.get("/api/subjects/:id", function(req, res) {
    // 2; Add a join to include all of the Subject's Posts here
    db.Subject.findOne({
      where: {
        id: req.params.id,
        include: [db.Post]
      }
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.post("/api/subjects", function(req, res) {
    db.Subject.create(req.body).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });

  app.delete("/api/subjects/:id", function(req, res) {
    db.Subject.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSubject) {
      res.json(dbSubject);
    });
  });
};
