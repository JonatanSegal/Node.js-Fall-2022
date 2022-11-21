import db from "./connection_mysql.js"

// taks Define a table the contains animals
const isInDeleteMode = true

if(isInDeleteMode){
    db.execute(`
    DROP TABLE IF EXISTS animal_feed_stock
    `),
    db.execute(`
    DROP TABLE IF EXISTS animal_feed_types
    `)
}

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_types (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    is_vegetarian BOOLEAN
    )
`)
db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_stock (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    initial_amount INTEGER,
    remaining_amount INTEGER,
    addded_to_stock TIMESTAMP NOT NULL DEFAULT NOW(),
    animal_feed_type_id INTEGER,
    CONSTRAINT fk_feed_type FOREIGN KEY (id) REFERENCES animal_feed_types(id)
    )
`)

//seed the database
if(isInDeleteMode){
db.execute(`INSERT INTO animal_feed_types (name) VALUES("Salmon")`)
db.execute(`INSERT INTO animal_feed_types (name) VALUES("Carrot")`)
db.execute(`INSERT INTO animal_feed_types (name) VALUES("Banana")`)

db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES(300, 300 , 1)`)
db.execute(`INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES(120, 120 , 2)`)
}

db.end()
