import express from 'express';

const app = express();

app.get('/index', function (req, res, next) {
    console.log('aaa');
    res.status(200).send("index");
});

module.exports = app;