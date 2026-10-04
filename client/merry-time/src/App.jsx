import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MessageCircle, Compass } from 'lucide-react';
import Safaris from './pages/Safaris';

function Home() {
  return (
    <div className="min-h-screen bg-gray-light">
      {/* Hero Section */}
      <div className="relative bg-navy text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="bg-gold text-navy-dark font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 inline-block">
            Kenya, Tanzania & East Africa
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Explore Africa. Live the Adventure.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience breathtaking wildlife, majestic mountains, and pristine beaches with Merry Time Africa Safaris & Expeditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/safaris" className="btn bg-gold hover:bg-yellow-400 text-navy-dark font-bold border-none px-6">
              View Safaris
            </Link>
            <Link to="/tailor-made" className="btn bg-coral hover:bg-red-500 text-white border-none px-6">
              Plan Your Trip
            </Link>
            <a 
              href="https://wa.me/254700000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-teal hover:bg-teal-700 text-white border-none px-6 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar bg-navy text-white sticky top-0 z-50 shadow-md px-4 md:px-8">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gold">
          <Compass className="w-6 h-6 text-sky" />
          <span>Merry Time Africa</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-1">
          <li><Link to="/" className="hover:text-sky">Home</Link></li>
          <li><Link to="/safaris" className="hover:text-sky">Safaris</Link></li>
          <li><Link to="/expeditions" className="hover:text-sky">Expeditions</Link></li>
          <li><Link to="/destinations" className="hover:text-sky">Destinations</Link></li>
          <li><Link to="/tailor-made" className="hover:text-sky">Tailor-Made</Link></li>
          <li><Link to="/about" className="hover:text-sky">About Us</Link></li>
          <li><Link to="/gallery" className="hover:text-sky">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-sky">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/tailor-made" className="btn bg-coral hover:bg-red-500 text-white border-none btn-sm md:btn-md">
          Plan My Safari
        </Link>
      </div>
    </nav>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      aria-label="Chat with a Safari Specialist"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-semibold text-sm">
        Chat with a Safari Specialist
      </span>
    </a>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safaris" element={<Safaris />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}