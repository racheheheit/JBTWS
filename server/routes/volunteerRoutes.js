import express from 'express';
import { submitVolunteer, getVolunteers } from '../controllers/volunteerController.js';

const router = express.Router();
router.post('/', submitVolunteer);
router.get('/', getVolunteers);

export default router;
