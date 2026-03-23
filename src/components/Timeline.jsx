import { timelineData } from '../data/timeline';
import useScrollReveal from '../hooks/useScrollReveal';

const Timeline = () => {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="timeline" className="section-padding">
            <div className="container-max">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Engineering Journey</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            Skill <span className="text-gradient">Timeline</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            From first lines of code to architecting distributed systems — a learning journey built on depth.
                        </p>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent hidden sm:block" />

                        <div className="space-y-8">
                            {timelineData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`relative sm:pl-20 transition-all duration-500`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 top-6 hidden sm:flex">
                                        <div
                                            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg border-2 ${item.isActive
                                                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 border-indigo-400 shadow-lg shadow-indigo-500/40 animate-glow'
                                                    : 'glass border-indigo-500/40 bg-dark-800'
                                                }`}
                                        >
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`glass rounded-2xl p-6 border transition-all duration-300 hover:border-indigo-500/30 ${item.isActive ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/10' : 'border-white/8'
                                            }`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="sm:hidden text-xl">{item.icon}</span>
                                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                                    {item.isActive && (
                                                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-sm font-medium text-indigo-400">{item.subtitle}</p>
                                            </div>
                                            <span className="font-mono text-sm text-slate-500 bg-white/3 px-2 py-0.5 rounded-lg border border-white/5 flex-shrink-0">
                                                {item.year}
                                            </span>
                                        </div>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded-md text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
