import express from 'express';
import { handleCreateEvent } from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/create', handleCreateEvent);

export default eventRouter;