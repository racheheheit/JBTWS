import express from 'express';
import { getCultureActivities } from '../controllers/cultureController.js';

const router = express.Router();
router.get('/', getCultureActivities);

export default router;
