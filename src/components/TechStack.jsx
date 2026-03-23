import { skillCategories } from '../data/skills';
import useScrollReveal from '../hooks/useScrollReveal';
import { config } from '../config/portfolio';

const SkillBadge = ({ name, level }) => (
    <div className="group flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{name}</span>
            <span className="text-xs text-slate-500">{level}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                style={{ width: `${level}%` }}
            />
        </div>
    </div>
);

const TechStack = () => {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="skills" className="section-padding">
            <div className="container-max">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Tech Arsenal</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            Skills & <span className="text-gradient">Technologies</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            A curated stack built for building scalable, secure, and production-ready systems.
                        </p>
                    </div>

                    {/* Skill Categories Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {skillCategories.map((cat, catIdx) => (
                            <div
                                key={cat.id}
                                className={`glass rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-300 hover:shadow-xl ${cat.glowColor}`}
                                style={{ animationDelay: `${catIdx * 100}ms` }}
                            >
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${cat.color} bg-opacity-20 text-white text-xs font-bold uppercase tracking-wider`}>
                                        {cat.label}
                                    </div>
                                </div>

                                {/* Skills list */}
                                <div className="space-y-4">
                                    {cat.skills.map((skill) => (
                                        <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech chip strip */}
                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm mb-5 uppercase tracking-widest font-medium">Also familiar with</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {config.alsoFamiliarWith.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1.5 rounded-full glass border border-white/10 text-slate-400 text-xs font-mono hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200 cursor-default"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
