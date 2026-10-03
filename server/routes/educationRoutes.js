import express from 'express';
import { getEducationPrograms } from '../controllers/educationController.js';

const router = express.Router();
router.get('/', getEducationPrograms);

export default router;
