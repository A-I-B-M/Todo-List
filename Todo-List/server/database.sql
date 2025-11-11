CREATE DATABASE todo_app;

CREATE TABLE todo (
    todo_id Serial PRIMARY KEY,
    description VARCHAR(255)
);