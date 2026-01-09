
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo2.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/home', isRouterLink: true },
    { name: 'About', path: '#about-me', isRouterLink: false },
    { name: 'Experience', path: '#experience', isRouterLink: false },
    { name: 'Skills', path: '#skills', isRouterLink: false },
    { name: 'Projects', path: '#projects', isRouterLink: false },
    { name: 'Contact', path: '#contact', isRouterLink: false },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="font-display font-bold text-2xl tracking-wide text-slate-100 group-hover:text-accent transition-colors">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isRouterLink ? (
                  <Link 
                    to={link.path} 
                    className="hover:text-accent transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                  </Link>
                ) : (
                  <a 
                    href={link.path} 
                    className="hover:text-accent transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-100 hover:text-accent focus:outline-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col gap-2 p-6 text-base font-semibold text-center">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.isRouterLink ? (
                    <Link 
                      to={link.path} 
                      className="block py-2 text-slate-200 hover:text-accent" 
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.path} 
                      className="block py-2 text-slate-200 hover:text-accent" 
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
