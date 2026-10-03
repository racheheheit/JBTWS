import express from 'express';
import { getHealthcarePrograms } from '../controllers/healthcareController.js';

const router = express.Router();
router.get('/', getHealthcarePrograms);

export default router;
