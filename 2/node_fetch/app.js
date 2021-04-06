const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fetch = require('node-fetch');

const google_url = 'https://www.google.com/';

// using async-await
app.get('/proxy', async (req, res) => {
    const response = await fetch(google_url);
    const body = await response.text();
    res.send(body);
});

// using promises
/* app.get('/proxy', (req, res) => {
    fetch('https://www.google.com/')
        .then(response => response.text())
        .then(html => res.send(html))
        .catch()
}); */

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});