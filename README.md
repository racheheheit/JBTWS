# Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi — MERN Stack Website

**Hindi Name**: जौनसार बावर जनजातीय कल्याण समिति, दिल्ली

A production-quality MERN stack website for **Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi**, a community welfare organization connected with the Jaunsar-Bawar region of Dehradun district, Uttarakhand.

---

## Technical Stack & Architecture

- **Frontend (`/client`)**:
  - React.js + Vite
  - React Router DOM
  - Tailwind CSS
  - Framer Motion
  - Lucide React Icons
  - Dual-Language System (`LanguageContext` for English & Devanagari Hindi)
  - Centralized Image Configuration (`client/src/data/images.js`)
  - Centralized REST API Service (`client/src/services/api.js`)

- **Backend (`/server`)**:
  - Node.js + Express.js
  - MongoDB + Mongoose Schemas (`Event`, `Gallery`, `Healthcare`, `Education`, `Culture`, `Calendar`, `Volunteer`, `Contact`)
  - CORS, Helmet, Central Error Handling
  - Protected Admin & Public REST API endpoints

---

## Directory Structure

```
jaunsar-bawar-website/
├── client/                     # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         # ImagePlaceholder, LightboxModal, SectionHeading
│   │   │   └── layout/         # Navbar (EN/HI toggle), Footer
│   │   ├── context/
│   │   │   └── LanguageContext.jsx # Global Dual Language Toggle
│   │   ├── data/
│   │   │   ├── contentData.js  # Source-backed organizational content
│   │   │   └── images.js       # Centralized image placeholder mapping
│   │   ├── pages/              # Home, About, OurWork, Culture, Healthcare, Education, Events, Gallery, Calendar, GetInvolved, Donate, Contact, Admin
│   │   ├── services/
│   │   │   └── api.js          # REST API Client
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                     # Node.js + Express + MongoDB Backend
│   ├── config/
│   │   └── db.js               # MongoDB Mongoose Connection
│   ├── controllers/            # REST API Controllers with fallback data
│   ├── models/                 # Mongoose Data Models
│   ├── routes/                 # Express API Endpoint Routes
│   ├── server.js               # Main Server Entry
│   ├── .env.example
│   └── package.json
│
├── package.json                # Root package with concurrently scripts
└── README.md
```

---

## Quick Start & Setup

### 1. Install Dependencies
Run from the root directory:
```bash
npm run setup
```
*(Or `npm install` in root, `client/`, and `server/` individually).*

### 2. Environment Variables
Create `server/.env` based on `server/.env.example`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/jaunsar_bawar_db
JWT_SECRET=jaunsar_bawar_delhi_secret_jwt_key_2026
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Run Development Environment
To launch both frontend and backend concurrently:
```bash
npm run dev
```

- **React Client**: `http://localhost:5173`
- **Express REST API**: `http://localhost:5000/api`

---

## Pages Implemented

1. **Home (`/`)**: Hero section, 3 Core Pillars, Cultural Grid, Social Impact, 17th Free Medical Camp showcase, 2023 Calendar preview.
2. **About Us (`/about`)**: Organization background, mission, official registration reference, core objectives.
3. **Our Work (`/our-work`)**: Overview of social welfare initiatives in healthcare, education, environment, and culture.
4. **Culture (`/culture`)**: 8 Cultural Pillars (Architecture, Folk Dance, Traditional Dress, Festivals, Food, Agriculture, Rituals, Community Life).
5. **Healthcare (`/healthcare`)**: 17th Free Medical Camp showcase, free consultations, medicine distribution.
6. **Education (`/education`)**: Educational infrastructure, classroom support, student guidance.
7. **Events (`/events`)**: Category-filtered event listings (Healthcare, Education, Culture, Environment).
8. **Gallery (`/gallery`)**: Masonry grid layout with interactive Lightbox viewer.
9. **Calendar (`/calendar`)**: 2023 12-month digital interactive calendar browser.
10. **Get Involved (`/get-involved`)**: Volunteer registration form connected to `/api/volunteers`.
11. **Donate (`/donate`)**: Transparent bank details & UPI payment gateway placeholders.
12. **Contact (`/contact`)**: Official contact info, direct message form, map placeholder.
13. **Admin Dashboard (`/admin`)**: CMS management portal for events, gallery, healthcare, education, volunteers, and messages (Passcode: `admin123`).

---

## Image & Media Strategy

Per guidelines, binary media files are not uploaded directly into the repository. Instead:
- All image containers utilize `ImagePlaceholder.jsx` configured via `client/src/data/images.js`.
- High-quality placeholder frames, tags, aspect ratios, and lightbox views allow easy connection to Cloudinary or AWS S3 URLs in future CMS passes.
