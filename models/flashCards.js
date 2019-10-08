module.exports = function(sequelize, DataTypes) {
  var Flashcards = sequelize.define(
    "Flashcards",
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Flashcards;
};
