const db = require('./connection').connection;

// queries

db.query('INSERT INTO beers VALUES(?, ?)', ['Quadzilla', 13.2], (error, result, fields) => {
    console.log(result);
});

db.query('SELECT * FROM beers', (error, result, fields) => {
    console.log(result);
});