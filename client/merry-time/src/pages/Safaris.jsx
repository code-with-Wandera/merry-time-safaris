import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const safariCategories = [
  "All Safaris",
  "Kenya Safaris",
  "Tanzania Safaris",
  "Kenya & Tanzania",
  "Zanzibar Beach",
  "Gorilla Trekking",
  "Mountain Expeditions",
  "Cultural Tours"
];

const mockSafaris = [
  {
    id: 1,
    title: "Classic Maasai Mara & Amboseli Adventure",
    category: "Kenya Safaris",
    duration: "7 Days / 6 Nights",
    destinations: "Nairobi -> Maasai Mara -> Lake Nakuru -> Amboseli",
    startingPrice: "2,450",
    accommodation: "Mid-range Tented Camps & Lodges",
    highlights: ["Big Five game viewing", "Mount Kilimanjaro backdrop", "Maasai cultural village visit"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Serengeti & Ngorongoro Crater Explorer",
    category: "Tanzania Safaris",
    duration: "6 Days / 5 Nights",
    destinations: "Arusha -> Tarangire -> Serengeti -> Ngorongoro",
    startingPrice: "2,890",
    accommodation: "Luxury Lodges & Permanent Tents",
    highlights: ["Great Migration viewing points", "Ngorongoro Caldera game drive", "Baobab trees in Tarangire"],
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Ultimate East Africa Wildlife & Beach",
    category: "Kenya & Tanzania",
    duration: "12 Days / 11 Nights",
    destinations: "Nairobi -> Maasai Mara -> Serengeti -> Ngorongoro -> Zanzibar",
    startingPrice: "4,600",
    accommodation: "Luxury & Boutique Resorts",
    highlights: ["Cross-border migration safari", "Stone Town historical tour", "Pristine white sand beaches"],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Mount Kilimanjaro Machame Route Climb",
    category: "Mountain Expeditions",
    duration: "7 Days / 6 Nights",
    destinations: "Moshi -> Machame Gate -> Uhuru Peak",
    startingPrice: "2,300",
    accommodation: "Mountain Camping Tents",
    highlights: ["Roof of Africa (5,895m)", "Professional mountain guides & porters", "Scenic diverse ecological zones"],
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Rwanda Bwindi & Volcanoes Gorilla Trek",
    category: "Gorilla Trekking",
    duration: "4 Days / 3 Nights",
    destinations: "Kigali -> Volcanoes National Park",
    startingPrice: "3,100",
    accommodation: "Eco-Lodge Forest Retreat",
    highlights: ["Face-to-face with Mountain Gorillas", "Golden monkey tracking option", "Scenic hills of Rwanda"],
    image: "https://images.unsplash.com/photo-1609137144813-772868bd46d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Zanzibar Spice & Relaxation Escape",
    category: "Zanzibar Beach",
    duration: "5 Days / 4 Nights",
    destinations: "Stone Town -> Nungwi Beach",
    startingPrice: "1,250",
    accommodation: "Beachfront Resort",
    highlights: ["Spice farm tour", "Snorkeling at Mnemba Atoll", "Sunset dhow cruise"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  }
];

export default function Safaris() {
  const [selectedCategory, setSelectedCategory] = useState("All Safaris");

  const filteredSafaris = selectedCategory === "All Safaris"
    ? mockSafaris
    : mockSafaris.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-light py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-gold text-navy-dark font-bold text-xs uppercase px-3 py-1 rounded-full mb-3 inline-block">
            Curated Itineraries
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">
            Explore Our Signature Safaris & Expeditions
          </h1>
          <p className="text-gray max-w-2xl mx-auto">
            Hand-crafted adventures across Kenya, Tanzania, Zanzibar, and beyond. Every journey is fully customisable to match your dates and budget.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {safariCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-sm md:btn-md font-medium rounded-full ${
                selectedCategory === category
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-gray hover:bg-gray-200 border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Safari Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSafaris.map((safari) => (
            <div key={safari.id} className="card bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
              <figure className="relative h-56">
                <img src={safari.image} alt={safari.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">
                  {safari.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                  From USD ${safari.startingPrice} p.p.
                </span>
              </figure>
              <div className="card-body p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-teal mb-2">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {safari.duration}</span>
                </div>
                <h2 className="card-title text-xl text-navy font-bold mb-2">{safari.title}</h2>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-coral" /> {safari.destinations}
                </p>

                <div className="space-y-1.5 mb-6 flex-grow">
                  <p className="text-xs font-bold text-navy uppercase tracking-wider">Highlights:</p>
                  {safari.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-sky flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{safari.accommodation}</span>
                  <Link to="/tailor-made" className="btn bg-navy hover:bg-navy-light text-white btn-sm flex items-center gap-1">
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}