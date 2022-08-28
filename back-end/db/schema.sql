DROP DATABASE IF EXISTS pokemon_log;
CREATE DATABASE pokemon_log; 

\c pokemon_log; 

CREATE TABLE pokemon (
    id SERIAL PRIMARY KEY,
    pokedex INT NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    region TEXT,
    favorite BOOLEAN,
    image TEXT
);