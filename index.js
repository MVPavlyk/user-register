const express = require('express');

const {learnRouter} = require('./routes');

const {constants} = require('./config');

const app = express();

app.use(express.json());

app.use('/learn', learnRouter);

app.use(() => (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "54.76.178.89");
    res.header("Access-Control-Allow-Origin", "54.154.216.60");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});


app.listen(constants.PORT, () => {
    console.log(`Started on port ${constants.PORT}`);
});