const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

// server-side rendering
// read file as text
// send text content to the client
const header = fs.readFileSync(__dirname + '/public/header/header.html', 'utf-8'),
    frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', 'utf-8'),
    footer = fs.readFileSync(__dirname + '/public/footer/footer.html', 'utf-8'),
    projects = fs.readFileSync(__dirname + '/public/projects/projects.html', 'utf-8'),
    skills = fs.readFileSync(__dirname + '/public/skills/skills.html', 'utf-8'),
    contact = fs.readFileSync(__dirname + '/public/contact/contact.html', 'utf-8');

app.get('/', (req, res) => {
    res.send(header + frontpage + footer);
});

app.get('/skills', (req, res) => {
    res.send(header + skills + footer);
});

app.get('/projects', (req, res) => {
    res.send(header + projects + footer);
});

app.get('/contact', (req, res) => {
    res.send(header + contact + footer);
});



const server = app.listen(port, (error) => {
    if (error) { 
        console.log(error); 
    } else { 
        console.log('Server running on port', server.address().port); 
    }
});