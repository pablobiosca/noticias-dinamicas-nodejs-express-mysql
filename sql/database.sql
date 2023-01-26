CREATE DATABASE news_portal;

USE news_portal;

CREATE TABLE news (
    id_news INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO news( title,news )
VALUES ("primera noticia","anastasia se convierte en una superheroina que vuela y reparte canutos desde el cielo...")