import express from 'express';

import pagesController from '../controllers/pages.controller.mjs';

const pagesRouter = express.Router();

pagesRouter.get('/', pagesController.get);

export default pagesRouter;