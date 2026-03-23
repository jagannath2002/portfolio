import { useEffect, useState } from 'react';

const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers = [];
        const ratio = 0.4;

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: ratio }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [sectionIds]);

    return activeSection;
};

export default useActiveSection;
