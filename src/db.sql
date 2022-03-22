CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title varchar not null,
    content text,
    created datetime not null,
    updated datetime not null,
    user varchar not null
)