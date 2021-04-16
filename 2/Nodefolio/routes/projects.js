const router = require('express').Router();

router.get('/api/projects', (req, res) => {
    res.send({projects});
});

/*
    Project Schema

    Title - (string)
    Description: (string)
    Creation date: (date)
    Language(s): (array)
    Tech used: (array)
    Image: (string)
    HostedLink: (string)
    GitLink: (string)
*/

const projects = [
    {
        title: 'Nodefolio',
        description: 'Personal portfolio',
        startDate: new Date('2021-04-08').toLocaleDateString('en-EN'),
        endDate: new Date('2021-04-15').toLocaleDateString('en-EN'),
        gitLink: 'https://github.com/carlcrede/nodejs_elective/tree/main/2/Nodefolio'
    }
];

module.exports = {
   router 
};