import { projects } from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiGithub, FiExternalLink, FiLayers } from 'react-icons/fi';

const categoryColors = {
    Backend: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    'Full Stack': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    Mobile: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

const ProjectCard = ({ project, index }) => (
    <div
        className="group relative glass rounded-2xl border border-white/8 overflow-hidden hover:border-indigo-500/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        {/* Top gradient bar */}
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

        <div className="p-6 flex flex-col flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-md border mb-2 ${categoryColors[project.category] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                        {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors">
                        {project.title}
                    </h3>
                </div>
                <FiLayers className="text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-1" size={20} />
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

            {/* Architecture highlights */}
            <div className="mb-5 flex-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Architecture Highlights</p>
                <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-indigo-500 mt-1 flex-shrink-0">▸</span>
                            {h}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/5 text-slate-400 border border-white/8 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200 text-sm font-medium"
                    >
                        <FiGithub size={15} /> GitHub
                    </a>
                )}
                {project.live ? (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 text-sm font-medium"
                    >
                        <FiExternalLink size={15} /> Live Demo
                    </a>
                ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/3 border border-white/5 text-slate-600 text-sm font-medium cursor-not-allowed select-none">
                        <FiExternalLink size={15} /> In Progress
                    </div>
                )}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="projects" className="section-padding" style={{ background: 'rgba(99, 102, 241, 0.02)' }}>
            <div className="container-max">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Featured Work</span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                            Projects & <span className="text-gradient">Builds</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            Real systems with real architecture — each project demonstrates a core engineering discipline.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
