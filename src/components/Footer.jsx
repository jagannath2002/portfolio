import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-center border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Jagannath S. All rights reserved.
        </p>

        <p className="text-slate-500 text-sm flex items-center gap-1">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
