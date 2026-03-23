import { FiDownload, FiArrowRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiOutlineChip } from 'react-icons/hi';
import { config } from '../config/portfolio';

const Hero = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Parse hero description with highlighted spans
    const renderDescription = () => {
        const desc = config.heroDescription;
        // Replace <strong>...</strong> with indigo/purple spans
        const parts = desc.split(/(<strong>.*?<\/strong>)/g);
        let highlightIndex = 0;
        const colors = ['text-indigo-400 font-medium', 'text-purple-400 font-medium'];
        return parts.map((part, i) => {
            const match = part.match(/<strong>(.*?)<\/strong>/);
            if (match) {
                const color = colors[highlightIndex % colors.length];
                highlightIndex++;
                return <span key={i} className={color}>{match[1]}</span>;
            }
            return part;
        });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{
                background:
                    'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(139,92,246,0.12) 0%, transparent 50%), #050814',
            }}
        >
            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl animate-float pointer-events-none" />
            <div
                className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-600/8 blur-3xl pointer-events-none"
                style={{ animationDelay: '3s', animationDuration: '8s' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-3xl pointer-events-none" />

            <div className="container-max section-padding relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/30 text-sm text-indigo-300 font-medium mb-6 animate-fade-in">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {config.heroBadge}
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 animate-fade-in">
                        <span className="text-white">
                            Hi, I'm{' '}
                        </span>
                        <span className="text-gradient">{config.name}</span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {config.title}{' '}
                        <span className="text-gradient">{config.subtitle}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {renderDescription()}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-14 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <button onClick={() => scrollTo('projects')} className="btn-primary text-base px-7 py-3.5">
                            View Projects <FiArrowRight />
                        </button>
                        <a
                            href={config.resumeUrl}
                            download
                            className="btn-secondary text-base px-7 py-3.5"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                        <button onClick={() => scrollTo('contact')} className="btn-secondary text-base px-7 py-3.5">
                            <FiMail />
                            Contact Me
                        </button>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <span className="text-sm text-slate-500">Find me on</span>
                        <div className="flex gap-3">
                            {[
                                { icon: FiGithub, label: 'GitHub', href: config.githubUrl },
                                { icon: FiLinkedin, label: 'LinkedIn', href: config.linkedinUrl },
                                { icon: FiMail, label: 'Email', href: `mailto:${config.email}` },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200 hover:scale-110"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech strip */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 glass py-4 overflow-hidden">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-slate-500 text-sm flex-wrap">
                        <HiOutlineChip className="text-indigo-400" size={16} />
                        <span className="text-slate-600 hidden sm:inline">Core Stack:</span>
                        {config.coreStack.map((tech) => (
                            <span key={tech} className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 text-xs font-mono border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
