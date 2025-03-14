import Navbar from '../components/Navbar';
import Starfield from '../components/Starfield';
import Timeline from '../components/Timeline';

export default function About() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white">
      <Starfield blurred={true} />
      <Navbar />

      {/* Main Content Container */}
      <div className="relative z-10 mt-96 max-w-5xl p-10 rounded-xl backdrop-blur-lg bg-gray-800/50 shadow-lg border border-gray-600 text-center">
        
        {/* Who We Are Section */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Who We Are 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Equinox is a passionate community of space enthusiasts dedicated to exploring the wonders of the universe. Through engaging events, projects, and quizzes, we aim to foster curiosity, innovation, and collaboration in the field of astronomy and space exploration.
        </p>

        {/* Animated Floating Spaceship */}
        <div className="relative w-full flex justify-center mt-8">
          <img 
            src="/spaceship.png" 
            alt="Spaceship"
            className="w-24 animate-floating"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <Timeline />
    </div>
  );
}
