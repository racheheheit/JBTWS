import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import eventRoutes from './routes/eventRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import healthcareRoutes from './routes/healthcareRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import cultureRoutes from './routes/cultureRoutes.js';
import calendarRoutes from './routes/calendarRoutes.js';
import volunteerRoutes from './routes/volunteerRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
  })
);
app.use(express.json());

// API Routes
app.use('/api/events', eventRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/healthcare', healthcareRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/culture', cultureRoutes);
app.use('/api/calendar', calendarRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', organization: 'Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi' });
});

// Central Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
