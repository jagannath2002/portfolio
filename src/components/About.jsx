import useScrollReveal from '../hooks/useScrollReveal';
import { FiBriefcase, FiCode, FiTarget, FiZap } from 'react-icons/fi';
import { config } from '../config/portfolio';

const iconMap = {
    briefcase: FiBriefcase,
    code: FiCode,
    zap: FiZap,
    target: FiTarget,
};

// Parse text with custom highlight markers from env vars
const renderHighlightedText = (text) => {
    // Support: <highlight1>...</highlight1>, <highlight2>...</highlight2>, <strong>...</strong>
    const parts = text.split(/(<highlight1>.*?<\/highlight1>|<highlight2>.*?<\/highlight2>|<strong>.*?<\/strong>)/g);
    return parts.map((part, i) => {
        let match;
        if ((match = part.match(/<highlight1>(.*?)<\/highlight1>/))) {
            return <span key={i} className="text-indigo-400 font-semibold">{match[1]}</span>;
        }
        if ((match = part.match(/<highlight2>(.*?)<\/highlight2>/))) {
            return <span key={i} className="text-purple-400 font-semibold">{match[1]}</span>;
        }
        if ((match = part.match(/<strong>(.*?)<\/strong>/))) {
            return <strong key={i} className="text-slate-300">{match[1]}</strong>;
        }
        return part;
    });
};

const renderHeading = (text) => {
    const parts = text.split(/(<highlight>.*?<\/highlight>)/g);
    return parts.map((part, i) => {
        const match = part.match(/<highlight>(.*?)<\/highlight>/);
        if (match) return <span key={i} className="text-gradient">{match[1]}</span>;
        return part;
    });
};

const About = () => {
    const { ref, isVisible } = useScrollReveal(0.2);
    const stats = config.stats.map((s) => ({ ...s, icon: iconMap[s.iconName] || FiCode }));

    return (
        <section id="about" className="section-padding">
            <div className="container-max">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">About Me</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            {renderHeading(config.aboutHeading)}
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            {config.aboutSubheading}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text content */}
                        <div className="space-y-6">
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {renderHighlightedText(config.aboutP1)}
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                {renderHighlightedText(config.aboutP2)}
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                {renderHighlightedText(config.aboutP3)}
                            </p>

                            {/* Values */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {config.values.map((v) => (
                                    <div key={v} className="flex items-center gap-2 text-slate-300 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0" />
                                        {v}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map(({ label, value, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="glass rounded-2xl p-6 border border-white/8 hover:border-indigo-500/30 transition-all duration-300 group card-hover"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-colors">
                                            <Icon size={18} className="text-indigo-400" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-extrabold text-gradient mb-1">{value}</div>
                                    <div className="text-sm text-slate-400">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
