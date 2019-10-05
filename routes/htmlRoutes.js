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

  app.get("/view_cards", function(req, res) {
    res.render("viewCards", {});
  });

  app.get("/user/chapters_concepts", function(req, res) {
    res.render("chaptersConcepts", {});
  });

  app.get("/user/classes", function(req, res) {
    res.render("classes", {});
  });

  app.get("/user/tests", function(req, res) {
    res.render("tests", {});
  });

  app.get("/user/tests/view_test", function(req, res) {
    res.render("viewtest", {});
  });

  app.get("/user/archives", function(req, res) {
    res.render("archives", {});
  });

  app.get("/create", function(req, res) {
    res.render("create", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
