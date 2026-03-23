/**
 * Centralized portfolio configuration.
 * All values are read from Vite environment variables (import.meta.env.VITE_*).
 * Defaults are provided so the app works without a .env file.
 */

const parseJSON = (envVar, fallback) => {
    if (!envVar) return fallback;
    try {
        return JSON.parse(envVar);
    } catch {
        console.warn(`Failed to parse env var, using default.`);
        return fallback;
    }
};

const env = import.meta.env;

// ── Default data (used when env vars are not set) ──

const defaultProjects = [
    {
        id: 1,
        title: "Microservices Authentication System",
        description:
            "A production-grade distributed authentication system with JWT-based access control and refresh token rotation. Designed with a gateway-first architecture for horizontal scalability.",
        highlights: [
            "JWT access + refresh token rotation",
            "API Gateway with rate limiting",
            "Redis session store for token blacklisting",
            "Docker + Kubernetes deployment",
        ],
        tags: ["Java", "Spring Boot", "JWT", "Redis", "Docker", "Microservices"],
        github: "https://github.com/jagannath",
        live: null,
        category: "Backend",
    },
    {
        id: 2,
        title: "GraphQL API with Apollo Server",
        description:
            "A performant GraphQL API built on Apollo Server with real-time subscriptions, N+1 query prevention via DataLoader, and schema-first design.",
        highlights: [
            "Schema-first design with type safety",
            "DataLoader for N+1 prevention",
            "Real-time subscriptions via WebSocket",
            "Apollo Studio integration",
        ],
        tags: ["Node.js", "GraphQL", "Apollo Server", "PostgreSQL", "DataLoader"],
        github: "https://github.com/jagannath",
        live: null,
        category: "Backend",
    },
    {
        id: 3,
        title: "Train Reservation System",
        description:
            "A full-stack train reservation platform with seat availability management, concurrent booking protection, and automated ticketing via REST APIs.",
        highlights: [
            "Optimistic locking for concurrent bookings",
            "Seat availability with real-time updates",
            "PDF ticket generation",
            "RESTful API with Swagger docs",
        ],
        tags: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API", "Swagger"],
        github: "https://github.com/jagannath",
        live: null,
        category: "Full Stack",
    },
    {
        id: 4,
        title: "React Native Chat App",
        description:
            "A real-time WhatsApp-style messaging app with end-to-end encrypted messages, push notifications, media sharing, and group chat support.",
        highlights: [
            "WebSocket real-time messaging",
            "End-to-end message encryption",
            "Push notifications (FCM)",
            "Media upload with S3 storage",
        ],
        tags: ["React Native", "Node.js", "Socket.io", "MongoDB", "FCM", "AWS S3"],
        github: "https://github.com/jagannath",
        live: null,
        category: "Mobile",
    },
];

const defaultSkills = [
    {
        id: "backend",
        label: "Backend",
        color: "from-indigo-500 to-indigo-700",
        borderColor: "border-indigo-500/30",
        glowColor: "hover:shadow-indigo-500/20",
        skills: [
            { name: "Java", level: 90 },
            { name: "Spring Boot", level: 88 },
            { name: "Node.js", level: 85 },
            { name: "Fastify", level: 80 },
            { name: "GraphQL", level: 82 },
            { name: "REST APIs", level: 92 },
            { name: "Microservices", level: 78 },
        ],
    },
    {
        id: "frontend",
        label: "Frontend",
        color: "from-purple-500 to-purple-700",
        borderColor: "border-purple-500/30",
        glowColor: "hover:shadow-purple-500/20",
        skills: [
            { name: "React", level: 85 },
            { name: "Next.js", level: 75 },
            { name: "Tailwind CSS", level: 88 },
            { name: "React Native", level: 72 },
            { name: "HTML & CSS", level: 90 },
        ],
    },
    {
        id: "security",
        label: "Security",
        color: "from-cyan-500 to-blue-600",
        borderColor: "border-cyan-500/30",
        glowColor: "hover:shadow-cyan-500/20",
        skills: [
            { name: "JWT", level: 88 },
            { name: "OAuth2", level: 80 },
            { name: "OpenID Connect", level: 75 },
            { name: "Refresh Tokens", level: 85 },
        ],
    },
    {
        id: "tools",
        label: "Tools & Infra",
        color: "from-emerald-500 to-teal-600",
        borderColor: "border-emerald-500/30",
        glowColor: "hover:shadow-emerald-500/20",
        skills: [
            { name: "Git & GitHub", level: 92 },
            { name: "Docker", level: 78 },
            { name: "Swagger / OpenAPI", level: 85 },
            { name: "Jest", level: 80 },
            { name: "PostgreSQL", level: 82 },
            { name: "Redis", level: 75 },
        ],
    },
];

const defaultTimeline = [
    {
        id: 1,
        year: "2023",
        title: "Backend Foundations",
        subtitle: "Java • Spring Boot • REST APIs",
        description:
            "Began the engineering journey building RESTful APIs with Java and Spring Boot. Mastered OOP principles, database design with JPA/Hibernate, and API documentation with Swagger.",
        tags: ["Java", "Spring Boot", "REST", "PostgreSQL", "JPA"],
        icon: "🚀",
    },
    {
        id: 2,
        year: "2023–24",
        title: "Full Stack & Mobile",
        subtitle: "React • Node.js • React Native",
        description:
            "Expanded into frontend with React and mobile with React Native. Built a WhatsApp-style chat app with real-time WebSocket communication and began working with Node.js/Fastify.",
        tags: ["React", "Node.js", "Fastify", "React Native", "Socket.io"],
        icon: "⚡",
    },
    {
        id: 3,
        year: "2024",
        title: "Microservices & Security",
        subtitle: "JWT • OAuth2 • API Gateway",
        description:
            "Deep-dived into distributed system architecture. Implemented a production microservices auth system with JWT refresh token rotation, OAuth2, Redis session management, and rate limiting.",
        tags: ["Microservices", "JWT", "OAuth2", "Redis", "Docker"],
        icon: "🔐",
    },
    {
        id: 4,
        year: "2024",
        title: "GraphQL & API Design",
        subtitle: "Apollo Server • DataLoader • Subscriptions",
        description:
            "Built a schema-first GraphQL API with Apollo Server. Solved N+1 query problems with DataLoader, enabled real-time subscriptions, and integrated Apollo Studio for performance monitoring.",
        tags: ["GraphQL", "Apollo Server", "DataLoader", "WebSocket"],
        icon: "🔷",
    },
    {
        id: 5,
        year: "2025 →",
        title: "System Design & Scale",
        subtitle: "High-Availability • Observability • Cloud",
        description:
            "Currently mastering large-scale system design — event-driven architectures, CQRS, distributed tracing, cloud-native deployments, and FAANG-level engineering practices.",
        tags: ["System Design", "Kafka", "Cloud", "CQRS", "Observability"],
        icon: "🏗️",
        isActive: true,
    },
];

const defaultStats = [
    { label: 'Years Experience', value: '1+', iconName: 'briefcase' },
    { label: 'Projects Built', value: '10+', iconName: 'code' },
    { label: 'Tech Stack Skills', value: '20+', iconName: 'zap' },
    { label: 'Goal', value: 'FAANG', iconName: 'target' },
];

const defaultValues = [
    'System Design & Scalability',
    'Clean Architecture Patterns',
    'Performance Engineering',
    'API Security Best Practices',
];

const defaultCoreStack = ['Java', 'Spring Boot', 'Node.js', 'GraphQL', 'React', 'Microservices', 'JWT', 'PostgreSQL', 'Docker'];

const defaultAlsoFamiliarWith = ['Kafka', 'RabbitMQ', 'ElasticSearch', 'Kubernetes', 'AWS', 'MongoDB', 'Hibernate', 'JUnit', 'Mockito', 'GitHub Actions'];

// ── Exported config object ──

export const config = {
    // Personal
    name: env.VITE_NAME || 'Jagannath',
    logoInitial: env.VITE_LOGO_INITIAL || 'J',
    title: env.VITE_TITLE || 'Software Engineer',
    subtitle: env.VITE_SUBTITLE || '| Backend Specialist',

    // Social
    githubUrl: env.VITE_GITHUB_URL || 'https://github.com/jagannath',
    linkedinUrl: env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/jagannath',
    email: env.VITE_EMAIL || 'hi@jagannath.dev',
    resumeUrl: env.VITE_RESUME_URL || '/resume.pdf',

    // Hero
    heroBadge: env.VITE_HERO_BADGE || 'Open to Full-Time & Remote Opportunities',
    heroDescription: env.VITE_HERO_DESCRIPTION || 'I design and build <strong>scalable backend systems</strong> and distributed architectures — specializing in Java/Spring Boot, Node.js, GraphQL, and microservices with a strong focus on <strong>security & performance</strong>.',
    coreStack: parseJSON(env.VITE_CORE_STACK, defaultCoreStack),

    // About
    aboutHeading: env.VITE_ABOUT_HEADING || 'The Engineer <highlight>Behind the Code</highlight>',
    aboutSubheading: env.VITE_ABOUT_SUBHEADING || 'A backend-focused engineer driven by a deep curiosity for how large systems are built and scaled.',
    aboutP1: env.VITE_ABOUT_P1 || 'With <highlight1>1+ year of hands-on engineering experience</highlight1>, I\'ve developed a passion for designing backend systems that are not just functional — but <highlight2>resilient, secure, and built to scale</highlight2>.',
    aboutP2: env.VITE_ABOUT_P2 || 'My engineering journey started with <strong>Java & Spring Boot</strong>, evolved through REST APIs, microservices, and JWT/OAuth2 security, and expanded into the reactive world of <strong>GraphQL with Apollo Server</strong> and real-time mobile applications with React Native.',
    aboutP3: env.VITE_ABOUT_P3 || 'Today, I\'m laser-focused on bridging the gap from junior to <highlight1>high-growth senior engineering roles</highlight1> — by mastering system design, distributed systems, and the practices that top-tier engineering teams like those at FAANG rely on.',
    stats: parseJSON(env.VITE_STATS, defaultStats),
    values: parseJSON(env.VITE_VALUES, defaultValues),

    // Contact
    contactDescription: env.VITE_CONTACT_DESCRIPTION || 'Open to backend engineering roles, system design discussions, and technical collaborations. Let\'s talk.',

    // Footer
    footerTagline: env.VITE_FOOTER_TAGLINE || 'Building scalable backend systems and distributed architectures, one commit at a time.',

    // Tech Stack
    alsoFamiliarWith: parseJSON(env.VITE_ALSO_FAMILIAR_WITH, defaultAlsoFamiliarWith),

    // Data
    projects: parseJSON(env.VITE_PROJECTS, defaultProjects),
    skills: parseJSON(env.VITE_SKILLS, defaultSkills),
    timeline: parseJSON(env.VITE_TIMELINE, defaultTimeline),
};
