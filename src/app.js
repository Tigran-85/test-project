require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const start = require('./config/db');

const userRouter = require('./routes/userRoute');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${process.env.API_PREFIX}/users`, userRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Page not found',
    });
});

start(app);
