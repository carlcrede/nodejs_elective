const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fetch = require('node-fetch');

const google_url = 'https://www.google.com/';

// using async-await
app.get('/proxy', async (req, res) => {
    const response = await fetch(google_url);
    const body = await response.textConverted();  // using package 'encoding' to use textConverted for getting the correct encoding
    res.send(body);
});

// using promises
/* app.get('/proxy', (req, res) => {
    fetch('https://www.google.com/')
        .then(response => response.textConverted())
        .then(html => res.send(html))
        .catch(err => console.log('Something went wrong', err))
}); */

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});