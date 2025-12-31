

import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo2.png';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeColor = '#041f1e';
  const contrastText = '#fff';
  const accent = '#00bfae';
  return (
    <header style={{ background: themeColor }} className="shadow-md border-b border-gray-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-30 p-4 "
            
          />
          <span style={{ color: contrastText }} className="font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-sm ml-2">
            My Portfolio
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-base font-semibold">
            <li>
              <Link to="/home" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200">Home</Link>
            </li>
            <li>
              <a href="#about-me" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#experience" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200">Experience</a>
            </li>
            <li>
              <a href="#skills" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200">Skills</a>
            </li>
            <li>
              <a href="#projects" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200">Projects</a>
            </li>
            <li>
              <a href="#contact" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-1`} style={{ background: contrastText, marginBottom: '0.25rem', borderRadius: '0.25rem', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(0.5rem)' : 'none' }}></span>
          <span className={`block w-7 h-1`} style={{ background: contrastText, marginBottom: '0.25rem', borderRadius: '0.25rem', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }}></span>
          <span className={`block w-7 h-1`} style={{ background: contrastText, borderRadius: '0.25rem', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-0.5rem)' : 'none' }}></span>
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-900 shadow-lg animate-fade-in" style={{ background: themeColor }}>
          <ul className="flex flex-col gap-4 py-4 text-base font-semibold items-center">
            <li>
              <Link to="/home" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <a href="#about-me" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#experience" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200" onClick={() => setMenuOpen(false)}>Experience</a>
            </li>
            <li>
              <a href="#skills" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#projects" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" style={{ color: contrastText }} className="hover:text-(--accent) transition-colors duration-200" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
