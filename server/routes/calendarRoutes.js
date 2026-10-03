import express from 'express';
import { getCalendarByYear } from '../controllers/calendarController.js';

const router = express.Router();
router.get('/:year', getCalendarByYear);
router.get('/', getCalendarByYear);

export default router;
