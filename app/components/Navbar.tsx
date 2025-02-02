'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full px-4 sm:px-8 py-4 text-white backdrop-blur-sm bg-black/50 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-lg font-bold mb-4 sm:mb-0">Equinox</Link>
        <ul className="flex flex-wrap justify-center gap-6">
          <li>
            <Link 
              href="/about" 
              className={`hover:text-gray-300 transition ${pathname === '/about' ? 'text-blue-400' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`hover:text-gray-300 transition ${pathname === '/projects' ? 'text-blue-400' : ''}`}
            >
              Our Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/events" 
              className={`hover:text-gray-300 transition ${pathname === '/events' ? 'text-blue-400' : ''}`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              href="/team" 
              className={`hover:text-gray-300 transition ${pathname === '/team' ? 'text-blue-400' : ''}`}
            >
              Our Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;