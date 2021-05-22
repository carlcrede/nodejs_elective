import express from 'express';
const app = express();

import helmet from 'helmet';
app.use(helmet());

import rateLimit from 'express-rate-limit';
const baseLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
  });
app.use(baseLimiter);
app.use('/auth/*', authLimiter);

const ipLogger = (req, res, next) => {
    console.log('The clients IP is:', req.ip);
    req.myData = 'this could be an alternative body';
    next();
};

app.use(ipLogger);

import session from 'express-session';
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

import sessionRouter from './router/session.mjs';
app.use(sessionRouter);

import bcrypt from './util/password.mjs';

app.get('/', (req, res, next) => {
    console.log('First route was hit but passed it on.');
    next();
});

app.get('/', (req, res) => {
    res.send(`<h1>Second Route</h1>`);
});

app.get('/modified', (req, res) => {
    res.send(req.myData);
});

app.get('/*', (req, res) => {
    res.status(404).send(`<h1>The page you were looking for was not found.</h1>`);
});

const server = app.listen(8080);





/*  For testing with test.mjs
import {oven} from './test.mjs';

console.log(oven); */