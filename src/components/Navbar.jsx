import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { config } from '../config/portfolio';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'glass border-b border-white/5 shadow-2xl shadow-black/30'
                : 'bg-transparent'
                }`}
        >
            <div className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                        {config.logoInitial}
                    </div>
                    <span className="font-bold text-white hidden sm:block">
                        {config.name}<span className="text-gradient">.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick('#contact')}
                        className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 hover:scale-105"
                    >
                        Hire Me
                    </button>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="md:hidden glass border-t border-white/5 animate-slide-down">
                    <nav className="flex flex-col py-4 px-4 gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="py-3 px-4 text-left rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="mt-2 py-3 px-4 rounded-lg font-semibold text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                        >
                            Hire Me
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
