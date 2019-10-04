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
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/user", function(req, res) {
    res.render("user", {});
  });

  app.get("/user/sprints", function(req, res) {
    res.render("sprints", {});
  });

  app.get("/user/classes", function(req, res) {
    res.render("classes", {});
  });

  app.get("/user/subjects", function(req, res) {
    res.render("subjects", {});
  });

  app.get("/create", function(req, res) {
    res.render("create", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
