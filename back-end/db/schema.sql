DROP DATABASE IF EXISTS pokemon_log;
CREATE DATABASE pokemon_log; 

\c pokemon_log; 

CREATE TABLE pokemon (
    id SERIAL PRIMARY KEY,
    pokedex INT,
    name TEXT,
    type TEXT,
    region TEXT,
    favorite BOOLEAN,
    image TEXT
);