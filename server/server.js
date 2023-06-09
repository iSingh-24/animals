const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./api/index');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.use('/api', router);

app.post('/', (req, res) => {
    console.log(req.body, 'here is req body');
    res.send('request was met');
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
