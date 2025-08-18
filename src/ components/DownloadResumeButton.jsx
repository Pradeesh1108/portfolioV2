import { motion, AnimatePresence } from "motion/react";

const DownloadResumeButton = () => {
    const handleDownload = () => {
        window.open('/resume.pdf', '_blank');
    }

    return (
        <motion.button 
            onClick={handleDownload}
            whileHover={{y: -5}}
            whileTap={{scale: 1.05}}
            className="relative px-1 py-4 text-sm text-center
            rounded-full font-extralight bg-primary w-[12rem]
            cursor-pointer overflow-hidden">
            <AnimatePresence mode="wait" />

            <motion.p 
                key="download"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.1}}
                className="flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
            </motion.p>
        </motion.button>
    )
}

export default DownloadResumeButton
