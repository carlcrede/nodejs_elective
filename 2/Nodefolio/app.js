const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

// server-side rendering
// read file as text
// send text content to the client
const header = fs.readFileSync(__dirname + '/public/header/header.html', 'utf-8');
const frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf-8');
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf-8');
const projects_page = fs.readFileSync(__dirname + '/public/projects/projects.html', 'utf-8');

app.get('/', (req, res) => {
    res.send(header + frontpage + footer);
});

app.get('/projects', (req, res) => {
    res.send(header + projects_page + footer);
});


const server = app.listen(port, (error) => {
    if (error) { 
        console.log(error); 
    } else { 
        console.log('Server running on port', server.address().port); 
    }
});