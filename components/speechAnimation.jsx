import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types'; // PropTypes importieren
import { useState, useEffect } from 'react';

const SpeechBubble = ({ text, isVisible, delay }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="relative bg-black text-white px-4 py-2 rounded-lg w-max"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                        duration: 0.5,
                        delay: delay, // Verwende das delay-Prop
                        type: "spring",
                    }}
                >
                    {text}
                    <div className="absolute left-4 w-4 h-4 bg-black rotate-45"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// PropTypes für die SpeechBubble-Komponente hinzufügen
SpeechBubble.propTypes = {
    text: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    delay: PropTypes.number,
};

export default function SpeechAnimation() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const showTimer1 = setTimeout(() => {
            setIsVisible1(true);
        }, 1000);

        const showTimer2 = setTimeout(() => {
            setIsVisible2(true);
        }, 5000);

        const hideTimer1 = setTimeout(() => {
            setIsVisible1(false);
        }, 4000);

        const hideTimer2 = setTimeout(() => {
            setIsVisible2(false);
        }, 7000);

        return () => {
            clearTimeout(showTimer1);
            clearTimeout(showTimer2);
            clearTimeout(hideTimer1);
            clearTimeout(hideTimer2);
        };
    }, []);

    return (
        <div className="w-full h-16 flex flex-col justify-center items-center space-y-2">
            <SpeechBubble text="Hallo, ich bin eine Sprechblase!" isVisible={isVisible1} delay={0} />
            <SpeechBubble text="Hallo, ich bin eine zweite Sprechblase!" isVisible={isVisible2} delay={0} />
        </div>
    );
}