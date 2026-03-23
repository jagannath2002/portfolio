import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            onClick={scrollUp}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center
        bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30
        hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/40
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}
      `}
        >
            <FiArrowUp size={18} />
        </button>
    );
};

export default ScrollToTop;
