import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const SpeechBubble = ({ text, isVisible, delay, colorClass, positionClass }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`relative ${colorClass} text-white px-4 py-2 rounded-lg max-w-[75%] sm:max-w-[60%] ${positionClass}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                        duration: 0.5,
                        delay: delay,
                        type: "spring",
                    }}
                >
                    {text}
                    <div className={`absolute w-4 h-4 ${colorClass} rotate-45 ${positionClass === "self-start" ? "left-4" : "right-4"}`}></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

SpeechBubble.propTypes = {
    text: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    delay: PropTypes.number,
    colorClass: PropTypes.string.isRequired,
    positionClass: PropTypes.string.isRequired,
};

export default function SpeechAnimation() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
        const startAnimation = () => {
            setTimeout(() => setIsVisible1(true), 2000);
            setTimeout(() => setIsVisible2(true), 6000);
            setTimeout(() => setIsVisible1(false), 5000);
            setTimeout(() => setIsVisible2(false), 8000);
            setTimeout(() => setIsVisible3(true), 9000);
            setTimeout(() => setIsVisible3(false), 11000);
            setTimeout(() => setIsVisible4(true), 12000);
            setTimeout(() => setIsVisible4(false), 15000);
            setTimeout(startAnimation, 16000);
        };

        startAnimation();

        return () => {};
    }, []);

    return (
        <div className="w-full h-auto flex flex-col items-center space-y-2 px-2 sm:px-4">
            <SpeechBubble text="Philosophy?" isVisible={isVisible1} delay={0} colorClass="bg-black" positionClass="self-start sm:self-start" />
            <SpeechBubble text="Sports educator?" isVisible={isVisible2} delay={0} colorClass="bg-black" positionClass="self-end sm:self-end" />
            <SpeechBubble text="Biologist?" isVisible={isVisible3} delay={0} colorClass="bg-black" positionClass="self-start sm:self-start" />
            <SpeechBubble text="Ah! I know, developer!❤️" isVisible={isVisible4} delay={0} colorClass="bg-black" positionClass="self-end sm:self-end" />
        </div>
    );
}
