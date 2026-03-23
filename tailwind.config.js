/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                dark: {
                    900: '#050814',
                    800: '#0a0f1e',
                    700: '#0f172a',
                    600: '#1e293b',
                },
                brand: {
                    indigo: '#6366f1',
                    purple: '#8b5cf6',
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #050814 0%, #0a0f1e 40%, #1a0533 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-down': 'slideDown 0.3s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    from: { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
                    to: { boxShadow: '0 0 40px rgba(139,92,246,0.6)' },
                },
                slideDown: {
                    from: { opacity: '0', transform: 'translateY(-10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
