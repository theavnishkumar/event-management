import express from 'express';
import { handleCreateEvent, handleShowEvent, handleShowEventById } from '../controllers/event.controller.js';

const eventRouter = express.Router();

eventRouter.post('/create', handleCreateEvent);
eventRouter.get('/event', handleShowEvent);
eventRouter.get('/event/:id', handleShowEventById);

export default eventRouter;