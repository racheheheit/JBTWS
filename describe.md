# Project Tracker & File Manifest — `describe.md`

**Organization**: Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi (जौनसार बावर जनजातीय कल्याण समिति, दिल्ली)  
**Tech Stack**: MERN (MongoDB, Express.js, React + Vite, Node.js)  
**Last Updated**: September 5, 2026

---

## 📌 Purpose of this Document
This file (`describe.md`) serves as the **master changelog and file tracker** for the Jaunsar Bawar Janjatiya Kalyan Samiti website codebase. Every file created, modified, or deleted, along with future updates and architectural decisions, is documented here so the user can easily track all work done.

---

## 📁 Complete File Manifest & Descriptions

### 🌐 Root Directory
| File | Status | Description |
| :--- | :---: | :--- |
| `describe.md` | **[NEW]** | Master project tracker and file changelog (this file). |
| `package.json` | **[NEW]** | Root package configuration containing `concurrently` scripts (`npm run setup`, `npm run dev`, `npm run client`, `npm run server`) to launch client and server together. |
| `README.md` | **[NEW]** | Complete project documentation, setup guide, architecture overview, and API references. |
| `.gitignore` | **[NEW]** | Standard git ignore rules for `node_modules`, build artifacts (`dist/`), `.env` secrets, and OS junk. |

---

### 💻 Client Directory (`/client`) — React + Vite Frontend

#### Core Config & Entry
| File | Status | Description |
| :--- | :---: | :--- |
| `client/package.json` | **[NEW]** | Dependencies for React, Vite, React Router DOM, Tailwind CSS, Framer Motion, and Lucide React icons. |
| `client/vite.config.js` | **[NEW]** | Vite build and dev server configuration. |
| `client/index.html` | **[NEW]** | HTML entry point featuring SEO metadata, site title, and Devanagari font references. |
| `client/src/index.css` | **[NEW]** | Global CSS styling, font imports (Inter, Noto Sans Devanagari, Playfair Display), custom Himalayan color variables, and pattern utility classes. |
| `client/src/main.jsx` | **[NEW]** | React DOM root mounting file. |
| `client/src/App.jsx` | **[NEW]** | Main application router containing all 13 page routes wrapped in `LanguageProvider`. |

#### Data & State Context
| File | Status | Description |
| :--- | :---: | :--- |
| `client/src/context/LanguageContext.jsx` | **[NEW]** | React context provider delivering global Dual-Language toggle state (`EN | हिंदी`) across all components. |
| `client/src/data/contentData.js` | **[NEW]** | Factual organizational copy in English and Hindi for org history, mission, 17th Medical Camp, 8 cultural pillars, and 2023 calendar months. |
| `client/src/data/images.js` | **[NEW]** | Centralized placeholder image dictionary specifying semantic tags, aspect ratios, titles, and category labels (allowing clean future wiring to Cloudinary/S3). |
| `client/src/services/api.js` | **[NEW]** | Central REST API client communicating with Express endpoints (`/api/events`, `/api/gallery`, `/api/volunteers`, etc.) with graceful fallback data. |

#### Layout & Common UI Components
| File | Status | Description |
| :--- | :---: | :--- |
| `client/src/components/layout/Navbar.jsx` | **[NEW]** | Sticky top navigation bar featuring organization branding in Hindi and English, desktop navigation links, persistent `EN | हिंदी` language toggle button, Donate button, and responsive mobile drawer menu. |
| `client/src/components/layout/Footer.jsx` | **[NEW]** | Rich editorial footer with Hindi/English mission statement, quick navigation links, archive links, contact info, legal notices, and copyright. |
| `client/src/components/common/ImagePlaceholder.jsx` | **[NEW]** | Reusable visual frame component rendering placeholder image tags, aspect ratios, category badges, subtle Himalayan grid motifs, and click-to-view triggers. |
| `client/src/components/common/SectionHeading.jsx` | **[NEW]** | Editorial section header component displaying dual-language titles, subtitles, category badges, and decorative color lines. |
| `client/src/components/common/LightboxModal.jsx` | **[NEW]** | Full-screen interactive modal viewer for gallery images, medical camp posters, and calendar pages with Next/Prev/Close navigation. |

#### Pages (`client/src/pages/`)
| File | Status | Description |
| :--- | :---: | :--- |
| `Home.jsx` | **[NEW]** | Main homepage following prompt layout: Hero section with overlay tagline, Org Intro, 3 Core Pillars, Cultural Grid, 17th Medical Camp feature card, Classroom Education showcase, 2023 Calendar preview, and Get Involved call-to-action. |
| `About.jsx` | **[NEW]** | Organization profile page detailing history, native region connection, official registration context, and 4 core objectives. |
| `OurWork.jsx` | **[NEW]** | Social impact overview page detailing healthcare, education, environmental cleanliness, and cultural programs. |
| `Culture.jsx` | **[NEW]** | Cultural heritage page detailing 8 categories (Architecture, Folk Dance, Traditional Dress, Festivals, Food, Agriculture, Rituals, Community Life) with interactive modal details. |
| `Healthcare.jsx` | **[NEW]** | Dedicated healthcare page highlighting the **17th Free Medical Camp** poster, specialist checkups, free medicine distribution, and health screenings. |
| `Education.jsx` | **[NEW]** | Education page featuring classroom support photographs, student guidance initiatives, and youth mentorship pillars. |
| `Events.jsx` | **[NEW]** | Filterable events listing page (All, Healthcare, Education, Culture, Environment). |
| `Gallery.jsx` | **[NEW]** | Masonry image gallery with category filter pills and interactive full-screen Lightbox modal viewer. |
| `Calendar.jsx` | **[NEW]** | 2023 Digital 12-Month Interactive Calendar browser with month-by-month navigation and original PDF link. |
| `GetInvolved.jsx` | **[NEW]** | Volunteer registration page with interactive form connected to Express REST API (`POST /api/volunteers`). |
| `Donate.jsx` | **[NEW]** | Transparent support page displaying bank transfer details, UPI configuration frame, and payment gateway placeholders. |
| `Contact.jsx` | **[NEW]** | Official contact page with headquarters info, interactive contact form connected to `/api/contact`, and map location placeholder. |
| `Admin.jsx` | **[NEW]** | CMS Management Portal with passcode login (`admin123`) to manage Events, Gallery, Healthcare, Education, Volunteers, and Messages. |

---

### ⚙️ Server Directory (`/server`) — Node.js + Express + MongoDB Backend

#### Core Setup & Database
| File | Status | Description |
| :--- | :---: | :--- |
| `server/package.json` | **[NEW]** | Express server dependencies (`express`, `mongoose`, `cors`, `helmet`, `dotenv`, `jsonwebtoken`, `bcryptjs`, `nodemon`). |
| `server/.env.example` | **[NEW]** | Environment variable template file. |
| `server/.env` | **[NEW]** | Development environment variables (`PORT=5000`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`). |
| `server/server.js` | **[NEW]** | Main Express server entry point configuring CORS, Helmet, JSON parsing, API routes, health check, and error middleware. |
| `server/config/db.js` | **[NEW]** | Mongoose connection helper connecting to MongoDB with graceful error handling. |
| `server/middleware/errorMiddleware.js` | **[NEW]** | Express central error handling middleware returning uniform JSON responses. |

#### Data Models (`server/models/`)
| File | Status | Description |
| :--- | :---: | :--- |
| `Event.js` | **[NEW]** | Mongoose schema for events (title, titleHindi, description, category, date, location, image, status). |
| `Gallery.js` | **[NEW]** | Mongoose schema for gallery items (title, titleHindi, category, image, year, location). |
| `Healthcare.js` | **[NEW]** | Mongoose schema for healthcare programs and medical camp posters. |
| `Education.js` | **[NEW]** | Mongoose schema for education drives and classroom initiatives. |
| `Culture.js` | **[NEW]** | Mongoose schema for cultural activities and traditions. |
| `Calendar.js` | **[NEW]** | Mongoose schema for calendar years and monthly breakdowns. |
| `Volunteer.js` | **[NEW]** | Mongoose schema for volunteer application submissions. |
| `Contact.js` | **[NEW]** | Mongoose schema for direct contact messages. |

#### Controllers & REST Routes (`server/controllers/` & `server/routes/`)
| File | Status | Description |
| :--- | :---: | :--- |
| `eventController.js` & `eventRoutes.js` | **[NEW]** | REST endpoints (`/api/events`) for fetching and managing events with sample seed fallback. |
| `galleryController.js` & `galleryRoutes.js` | **[NEW]** | REST endpoints (`/api/gallery`) for gallery items. |
| `healthcareController.js` & `healthcareRoutes.js` | **[NEW]** | REST endpoints (`/api/healthcare`) for healthcare programs. |
| `educationController.js` & `educationRoutes.js` | **[NEW]** | REST endpoints (`/api/education`) for education drives. |
| `cultureController.js` & `cultureRoutes.js` | **[NEW]** | REST endpoints (`/api/culture`) for cultural pillars. |
| `calendarController.js` & `calendarRoutes.js` | **[NEW]** | REST endpoints (`/api/calendar/:year`) for 2023 calendar data. |
| `volunteerController.js` & `volunteerRoutes.js` | **[NEW]** | REST endpoints (`/api/volunteers`) handling volunteer submissions. |
| `contactController.js` & `contactRoutes.js` | **[NEW]** | REST endpoints (`/api/contact`) handling contact form submissions. |

---

## 📜 Activity Log & Change History

### Step 1: Research & Plan Approval
- Analyzed prompt directives, MERN stack requirements, dual-language needs, placeholder image strategy, and organizational facts.
- Created `implementation_plan.md` artifact and obtained user approval.

### Step 2: Project Setup & Package Scaffolding
- Initialized root project with `package.json` and `.gitignore`.
- Scaffolded React client using Vite inside `/client` and installed dependencies (`react-router-dom`, `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`, `@tailwindcss/vite`).
- Configured Express server inside `/server` and installed dependencies (`express`, `mongoose`, `cors`, `helmet`, `dotenv`, `jsonwebtoken`, `bcryptjs`).

### Step 3: Backend REST Architecture
- Built MongoDB connection module (`server/config/db.js`).
- Created Mongoose models: `Event`, `Gallery`, `Healthcare`, `Education`, `Culture`, `Calendar`, `Volunteer`, `Contact`.
- Created Express controllers and route modules with REST API endpoints and built-in fallback data.
- Built Express entry file `server/server.js` and central error middleware.

### Step 4: Frontend Design System & Dual-Language
- Configured `client/src/index.css` with Google Fonts (Inter, Noto Sans Devanagari, Playfair Display), custom Himalayan palette variables, and background patterns.
- Built `LanguageContext.jsx` for global `EN | हिंदी` toggle.
- Created `contentData.js` storing factual organizational copy in English and Hindi.
- Created `images.js` centralized image placeholder mapping dictionary.
- Created REST API service `client/src/services/api.js`.

### Step 5: Components & Initial Pages Implementation
- Built `Navbar.jsx` with logo badge, dual-language organization titles, navigation links, EN/हिंदी toggle, Donate button, and mobile menu drawer.
- Built `Footer.jsx` with Hindi/English mission details, quick links, contact info, and legal notices.
- Built common UI components: `ImagePlaceholder.jsx`, `SectionHeading.jsx`, `LightboxModal.jsx`.
- Built all 13 pages: `Home`, `About`, `OurWork`, `Culture`, `Healthcare`, `Education`, `Events`, `Gallery`, `Calendar`, `GetInvolved`, `Donate`, `Contact`, `Admin`.

### Step 6: Verification & Documentation
- Executed `npm run build` in `/client` — compilation succeeded cleanly in **383ms** with **0 errors**.
- **Pixel-Perfect Alignment & Grid Sizing**:
  1. Section 2 ("About Our Organization"): Fixed 3-column alignment with text on left, wide image in center (`aspect-[4/3]`), and 5 feature items with circular icons on right.
  2. Section 3 ("Our Core Areas"): Fixed 3-card grid with floating circular icon badge overlapping bottom-left of image frame.
  3. Section 4 ("Living Heritage"): 8 horizontal cards in a single row with top thumbnail (`aspect-[4/3]`) and bottom category label box.
  4. Section 5 ("Our Impact Areas"): 6 circular icon pills aligned horizontally in a single row.
  5. Section 6 ("Events & Programs"): Fixed 3 event cards with a left date box (`15 MAR`, `12 APR`, `21 MAY`) inside the card container.
- Configured `@tailwindcss/vite` plugin in `client/vite.config.js`.
- Executed Node syntax check `node --check server/server.js` — passed cleanly with **0 errors**.
- Started Vite React dev server on `http://localhost:5173/`.
### Step 7: Navbar Optimization & Live Preview Verification
- **Navbar Brand Optimization**: Updated `Navbar.jsx` header to prominently display `JBTWS` as the primary brand text (with Hindi/English organization names below) so that all 9 desktop navigation links fit seamlessly without horizontal overflow or text clipping across 1080p and 1440p viewports.
- **Live Preview Audit**: Verified active Vite dev server (`http://localhost:5173/`) and Express REST API backend server (`http://localhost:5001/`).
- **Production Build Verification**: Re-ran `npm run build` in `/client` — compiled cleanly in **338ms** with **0 errors**.
- **Server Re-activation & Verification**: Both frontend Vite dev server and backend Express Node API server started in background daemons and verified visually.

### Step 8: 100% Width Hero Artwork Scene & JBTWS Overlay
- **Asset Integration**: Added user-provided Jaunsar-Bawar heritage illustration (`media_1790945714502.png`) to `client/public/assets/hero_art.png`.
- **100% Width Scene**: Transformed homepage hero section into a full 100% viewport width heritage scene featuring the traditional Jaunsari woman, Mahasu Devta temple architecture, and Jaunsari man.
- **"JBTWS" Overlay**: Rendered bold, monumental **`JBTWS`** typography directly over the top-center of the artwork scene with subtle gold sub-brand text (*JAUNSAR BAWAR JANJATIYA KALYAN SAMITI, DELHI*).

### Step 9: Central Temple Center of Attraction Refinement
- **Unhidden Mandir Architecture**: Re-architected the hero overlay in `Home.jsx` so that the central Mahasu Devta wooden pagoda temple is **100% unobscured and unhidden**, making it the primary visual centerpiece of the hero section.
- **Sky-Positioned Typography**: Shifted **JBTWS** title, taglines, and Devanagari text into the upper sky region above the temple spires.
- **Base-Positioned Action Buttons**: Moved the action buttons (*Discover Our Work* & *Explore Culture*) into a subtle floating glass pill at the bottom base, ensuring zero visual overlap with the temple entrance or stone facade.

### Step 10: 100% Uncropped Artwork Frame Refinement
- **Scaled Artwork Image**: Scaled down the artwork container height slightly and applied `object-contain` framing so that the **entire artwork illustration** (blue sky, traditional Jaunsari woman, complete multi-tiered Mahasu Devta temple spires to stone base, and traditional Jaunsari man) is **100% completely visible and uncropped**.
- **Zero Overlay Text**: Positioned all typography (**JBTWS** title, taglines, Devanagari text) cleanly above the image container and CTA buttons below it, ensuring 0% text overlap on the temple.

### Step 11: 1-to-1 Reference Mockup Composition Match
- **Seamless Sky Palette (`#E3F3FD`)**: Set hero container background to exact light sky blue `#E3F3FD` matching the sky tone of the artwork.
- **Typography & Layout Replicating Mockup `media_1790946199099.png`**:
  1. Rendered large black Cormorant Garamond serif title **JBTWS**.
  2. Rendered blue monospace uppercase sub-brand title (*JAUNSAR BAWAR JANJATIYA KALYAN SAMITI, DELHI*).
  3. Rendered headline *Preserving Heritage. Empowering Communities.* across two lines.
  4. Rendered blue Devanagari tagline (*परंपरा का संरक्षण, समुदाय का सशक्तिकरण*).
- **Seamless Cutout Illustration**: Positioned artwork image at the bottom of the section with zero box frames or dark borders, blending 100% seamlessly into the `#E3F3FD` sky background.

### Step 12: Complete JBJWS Cultural Website Implementation
- **Design System Palette Configured**: Updated `index.css` with exact color variables: Sky blue (`#E2F1F8`), Soft blue (`#D2E8F0`), Ivory (`#FAF7EF`), Deep charcoal (`#1C2326`), Slate (`#394D52`), Mountain green (`#49605C`), Muted sage (`#89A49C`), Accent blue (`#2B5B97`), and Subtle gold (`#BE9A5B`).
- **Logo Placeholder Component**: Built reusable [`LogoPlaceholder.jsx`](file:///Users/rachitsinghrana/Desktop/music/JBTWS/client/src/components/common/LogoPlaceholder.jsx) for easy future replacement with the organization's vector emblem.
- **Sticky Navigation**: Implemented glassmorphic header in `Navbar.jsx` featuring `[LOGO PLACEHOLDER]` emblem, `JBJWS` name, uppercase navigation links (`HOME`, `ABOUT`, `HERITAGE`, `INITIATIVES`, `GALLERY`, `GET INVOLVED`, `CONTACT`), persistent language switch, and mobile menu drawer.
- **About Section**: Built *"Rooted in the Mountains. Connected to Delhi."* section with 4 hover-animated cards (`HERITAGE`, `COMMUNITY`, `CULTURE`, `YOUTH`).
- **Heritage Section**: Built *"A Culture Shaped by Mountain Landscapes"* section with 4 visual editorial cards (`Architecture`, `Attire`, `Festivals`, `Crafts`).
- **Initiatives Section**: Built *"From Preservation to Participation"* 3-column layout featuring 6 core programmes.
- **Gallery Section**: Built *"A Visual Archive of Place & People"* editorial masonry gallery with category filter pills and interactive Lightbox modal viewer.
- **Get Involved Section**: Built *"Carry the Story Forward"* section with 4 avenues (`VOLUNTEER`, `SHARE A STORY`, `COLLABORATE`, `SUPPORT`) and prominent *"START A CONVERSATION"* CTA.
- **Contact Section**: Built *"Let's Stay Connected"* section with address, phone, email (`info@jbjws.org`), social links, and modern enquiry form.
- **Deep Charcoal Footer**: Built `#1C2326` footer with emblem, links, tagline *"Preserving Heritage • Empowering Communities"*, and location pills (`Delhi • Jaunsar Bawar • Community • Culture`).

### Step 13: Hero Clean-up & Illustration Enlargement
- **Removed Hero Buttons**: Removed the *"Explore Our Story"* and *"Get Involved"* buttons from the hero section to keep the sky area completely airy and clean.
- **Removed Dark Statement Strip**: Removed the floating translucent dark strip from the bottom of the hero scene as requested.
- **Enlarged Illustration**: Increased the max-width and scale of the mountain heritage illustration (`max-w-7xl scale-105`) so the traditional woman, Mahasu Devta temple architecture, and traditional man render larger, crisper, and more prominent at the base of the hero.

### Step 14: Transparent PNG Conversion & Zero Gap Refinement
- **Transparent PNG Asset Generated**: Converted the hero artwork into a high-resolution 100% transparent PNG (`client/public/assets/hero_art_transparent.png`) with alpha-masking, removing the solid sky background rectangle.
- **Eliminated Empty Top Sky Gap**: Cropped out the top empty sky area from the image file so the tips of the Mahasu Devta temple spires sit directly below the Hindi tagline (*परंपरा का संरक्षण, समुदाय का सशक्तिकरण*) with tight, elegant spacing.
- **Removed All Container Frames**: Eliminated all image borders, boxes, and padding frames around the artwork.

### Step 15: Original PNG Asset Integration
- **Updated to User's High-Res Original PNG**: Processed user's original high-definition PNG (`media_1790948378525.png`) into `client/public/assets/hero_art_transparent.png` and `client/public/assets/hero_art_original.png`.
- **Tight Bounding Box (879px x 310px)**: Cropped the top empty sky area (from y=266px down) so the highest temple spire tip sits cleanly right under the Hindi tagline with zero artificial vertical gap.

---

## 📝 Future Updates Protocol
Whenever any future changes, file additions, or edits are performed:
1. Update the **Last Updated** date at the top of `describe.md`.
2. Add any new files to the **File Manifest** table under the appropriate directory section.
3. Log the change details in the **Activity Log & Change History** section.
