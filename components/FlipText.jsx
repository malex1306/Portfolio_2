import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const FlipText = () => {
    const texts = ['Developer', 'Frontend Developer', 'Creative Developer', 'Web Developer'];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Der Wechsel der Wörter in einer Endlosschleife
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Nach dem letzten Wort beginnt es wieder bei 0
        }, 3000); // Alle 3 Sekunden das Wort wechseln

        return () => clearInterval(interval); // Aufräumen, wenn die Komponente nicht mehr da ist
    }, []);

    return (
        <div className="relative">
            <motion.div
                key={currentIndex} // key stellt sicher, dass der Zustand neu gerendert wird, wenn der Index sich ändert
                className="absolute inset-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: 'easeOut' },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: 'easeIn' } }}
            >
                <h1 className="mt-3 text-center font-semibold text-[#240046]
                    text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
                    style={{ fontFamily: 'Anton SC, sans-serif' }}>
                    {texts[currentIndex]}
                </h1>
            </motion.div>
        </div>
    );
};

export default FlipText;
