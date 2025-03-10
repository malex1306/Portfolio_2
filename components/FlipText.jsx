import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const FlipText = () => {
    const texts = ['Developer', 'Frontend Developer', 'Creative Developer', 'Web Developer'];
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: 'easeOut' },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: 'easeIn' } }}
            >
                <h1 className="mt-3 text-center justify-center font-semibold text-[#240046]
                    text-7xl sm:text-6xl md:text-5xl lg:text-5xl xl:text-6xl"
                    style={{ fontFamily: 'Anton SC, sans-serif' }}>
                    {texts[currentIndex]}
                </h1>
            </motion.div>
        </div>
    );
};

export default FlipText;
