// app/events/page.tsx

// Define event type
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}

// Sample events data
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Spring Stargazing Night",
    date: "March 20, 2025",
    time: "8:00 PM - 11:00 PM",
    description: "Join us for a night of stargazing at the university observatory. We'll observe the spring constellations and deep sky objects with professional telescopes.",
    location: "University Observatory"
  },
  {
    id: 2,
    title: "Space Quiz Competition",
    date: "April 5, 2025",
    time: "4:00 PM - 6:00 PM",
    description: "Test your space knowledge in our cosmic quiz competition! Prizes for top performers and refreshments for all participants.",
    location: "Science Building, Room 301"
  },
  {
    id: 3,
    title: "Workshop: Build Your Own Mars Rover",
    date: "April 15, 2025",
    time: "2:00 PM - 5:00 PM",
    description: "A hands-on workshop where participants will build small-scale Mars rover models and learn about the engineering challenges of space exploration.",
    location: "Engineering Lab, Room 102"
  },
  {
    id: 4,
    title: "Guest Lecture: The Future of Space Travel",
    date: "May 3, 2025",
    time: "6:30 PM - 8:00 PM",
    description: "Featuring a special guest from the aerospace industry discussing the latest developments in space travel technology.",
    location: "Main Auditorium"
  }
];

export default function Events() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start text-white">
      {/* Main Content Container - reduced top margin from mt-32 to mt-16 */}
      <div className="relative z-10 mt-2 max-w-5xl p-10 rounded-xl backdrop-blur-lg bg-gray-800/50 shadow-lg border border-gray-600 text-center mb-16">
        
        {/* Events Header - added padding-bottom to prevent text cutoff */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-2">
          Upcoming Events 🪐
        </h1>
        <p className="mt-4 text-lg text-gray-300 mb-12">
          Join us for exciting space-themed events, workshops, and activities. Explore the cosmos with fellow enthusiasts and expand your understanding of the universe!
        </p>

        {/* Events List */}
        <div className="space-y-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="p-6 rounded-lg backdrop-blur-sm bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-gray-700 text-left transition-all duration-300 hover:shadow-purple-500/20 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-purple-300">{event.title}</h2>
                  <div className="flex items-center mt-2 text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center mt-1 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="mt-3 text-gray-300">{event.description}</p>
                </div>
                <div className="md:self-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 shadow-lg">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}