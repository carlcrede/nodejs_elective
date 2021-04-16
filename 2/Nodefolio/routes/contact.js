const router = require('express').Router();

router.post('/api/contact', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = {
    router
}