import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";

const socialLinks = [
    { id: 1, name: "GitHub", url: "https://github.com/deinprofil", icon: <Github size={30} /> },
    { id: 2, name: "LinkedIn", url: "https://linkedin.com/in/deinprofil", icon: <Linkedin size={30} /> },
    { id: 3, name: "Xing", url: "https://www.xing.com/profile/deinprofil", icon: <Briefcase size={30} /> },
];

export default function SocialLinks() {
    return (
        <motion.div
            className="flex justify-center space-x-6 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {socialLinks.map(link => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 text-white hover:text-blue-400 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {link.icon}
                </motion.a>
            ))}
        </motion.div>
    );
}
