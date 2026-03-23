import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { config } from '../config/portfolio';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-dark-800">
            <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                            {config.logoInitial}
                        </div>
                        <span className="font-bold text-white">
                            {config.name}<span className="text-gradient">.</span>
                        </span>
                    </div>

                    <p className="text-slate-500 text-sm text-center max-w-sm">
                        {config.footerTagline}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: FiGithub, href: config.githubUrl, label: 'GitHub' },
                            { icon: FiLinkedin, href: config.linkedinUrl, label: 'LinkedIn' },
                            { icon: FiMail, href: `mailto:${config.email}`, label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200 hover:scale-110"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.toLowerCase() === 'journey' ? 'timeline' : item.toLowerCase())
                                        ?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-sm text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                        <span>© {year} {config.name}. Built with</span>
                        <FiHeart size={12} className="text-rose-500 fill-rose-500" />
                        <span>using React & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
