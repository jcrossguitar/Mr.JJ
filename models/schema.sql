DROP DATABASE IF EXISTS flashcards_db;

CREATE DATABASE flashcards_db;

USE flashcards_db;

-- Create the database task_saver_db and specified it for use.


-- Create the table tasks.
CREATE TABLE cards (
  id INT NOT NULL AUTO_INCREMENT,
  cardTitle varchar(255) NOT NULL,
  subjectName varchar(500)  NOT NULL,
  content varchar(1000) NOT NULL,
  PRIMARY KEY (id)
);