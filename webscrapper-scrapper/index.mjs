import express from 'express';
import pagesRouter from './src/routes/pages.route.mjs';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use('/pages', pagesRouter);

app.use((req, res, next) => {
    next(404);
});

app.use((err, req, res, next) => {
    res.status(err).json(null);
})

app.listen(port);