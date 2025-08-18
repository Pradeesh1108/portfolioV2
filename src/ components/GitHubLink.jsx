import { motion } from "motion/react";

const GitHubLink = () => {
    const handleGitHubClick = () => {
        window.open('https://github.com/Pradeesh1108', '_blank');
    }

    return (
        <motion.div 
            className="flex flex-col items-center justify-center py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.button
                onClick={handleGitHubClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-storm to-indigo rounded-full border border-white/10 hover:border-aqua/30 transition-all duration-300"
            >
                <svg 
                    className="w-6 h-6 text-white group-hover:text-aqua transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white font-medium group-hover:text-aqua transition-colors duration-300">
                    Visit My GitHub
                </span>
                <motion.svg 
                    className="w-5 h-5 text-white group-hover:text-aqua transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
            </motion.button>
            
            <motion.p 
                className="text-neutral-400 text-sm mt-4 text-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Explore my open-source contributions, personal projects, and coding journey
            </motion.p>
        </motion.div>
    );
};

export default GitHubLink;
