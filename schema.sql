DROP DATABASE IF EXISTS flashee;
CREATE DATABASE flashee;

USE flashee;

<<<<<<< HEAD:schema.sql
CREATE TABLE cards (
=======
CREATE TABLE Flashcard (
>>>>>>> ca3a0f90b7b589cc5fbca1808b441b931ebb0beb:models/schema.sql
id INT NOT NULL AUTO_INCREMENT,
question VARCHAR(100),
answer VARCHAR (100),
PRIMARY KEY (id)
);

