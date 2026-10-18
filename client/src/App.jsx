import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { OurWork } from './pages/OurWork';
import { Culture } from './pages/Culture';
import { Healthcare } from './pages/Healthcare';
import { Education } from './pages/Education';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { CalendarPage } from './pages/Calendar';
import { GetInvolved } from './pages/GetInvolved';
import { Donate } from './pages/Donate';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { GoverningBody } from './pages/GoverningBody';

export function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-900 selection:bg-amber-400 selection:text-slate-950">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/healthcare" element={<Healthcare />} />
              <Route path="/education" element={<Education />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/governing-body" element={<GoverningBody />} />
              <Route path="/governing-body/:tab" element={<GoverningBody />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
