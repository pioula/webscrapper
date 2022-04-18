import express from 'express';

const app = express();
const port = 3001;

app.use((req, res) => {
    res.status(200).send(`<div>Hi! Wassup!</div>`);
    res.end();
});

app.listen(port);