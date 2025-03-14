'use client';

import { useState } from 'react';

const timelineEvents = [
  { year: "Year 1", description: "Club founded by a group of space enthusiasts.", icon: "🚀" },
  { year: "Year 2", description: "Hosted our first space quiz with 100+ participants.", icon: "🔭" },
  { year: "Year 3", description: "Organized a stargazing event with local observatories.", icon: "🌌" },
  { year: "Year 4", description: "Launched our first space-related research project.", icon: "🛰️" },
  { year: "Year 5", description: "Won a national-level space innovation challenge.", icon: "🏆" },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative z-10 w-full max-w-4xl mt-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        Our Journey 🛰️
      </h2>

      <div className="relative flex flex-col space-y-8 pb-20">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className={`flex items-center space-x-4 px-6 py-4 rounded-lg border border-gray-600 shadow-md transition-all duration-300 
              ${hoveredIndex === index ? "bg-gray-700/80 scale-105 shadow-blue-500/50" : "bg-gray-800/50"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-2xl">{event.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{event.year}</h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
