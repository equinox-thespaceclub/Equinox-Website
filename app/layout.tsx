// app/layout.tsx
import type { Metadata } from 'next';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Starfield from './components/Starfield';
import './globals.css';

export const metadata: Metadata = {
  title: 'Equinox',
  description: 'A student-run club dedicated to exploring space and technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <CustomCursor />
        <Navbar />
        <div className="fixed inset-0 -z-10">
          <Starfield blurred={true} />
        </div>
        <main className="relative pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}