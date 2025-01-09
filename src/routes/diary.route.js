import express from 'express';
import { PostEntry, GetAllEntries,GetEntryById, UpdateEntry, DeleteEntry } from '../controllers/diary.controller.js';

const router = express.Router();

// Define routes
router.post('/entries', PostEntry);
router.get('/Gentries', GetAllEntries);
router.get('/Gentries/:id', GetEntryById);
router.put('/Pentries/:id', UpdateEntry);
router.delete('/Dentries/:id', DeleteEntry);

export default router;