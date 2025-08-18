import { motion } from "motion/react"
import LiveButton from "./LiveButton"

const ProjectDetails = ({title, 
                        description, 
                        subDescription, 
                        image, 
                        tags, 
                        href,
                        liveLink,
                        closeModel,
                        
                    }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center
        justify-center w-full h-full overflow-hidden
        backdrop-blur-sm">
            <motion.div className="relative max-w-2xl border shadow-sm
                    rounded-2xl bg-gray-100
                    border-white/10"
                    initial={{opacity: 0,scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    >
                <button onClick={closeModel}
        
                className="absolute p-2 rounded-sm top-5 right-5 
                bg-midnight hover:bg-gray-500">
                    <img src="assets/close.svg" className="w-6 h-6" alt="" />
                </button>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
                <div className="p-6">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700">
                        {description}</p>
                    {subDescription.map((subDesc, index)=>(
                        <p key={index} className="mb-3 font-normal text-gray-700">{subDesc}</p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex mb-2 gap-3">
                            {tags.map((tag)=>(
                                <img key={tag.id} 
                                     src={tag.path} 
                                     alt={tag.name} 
                                     className="rounded-lg size-10 hover-animation"/>
                                    
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            {liveLink && <LiveButton href={liveLink} />}
                            <a 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-gray-900"
                            >
                                <img src="assets/logos/github.svg" className="size-4" alt="GitHub" />
                                View Code
                            </a>
                        </div>

                    </div>

                </div>
            </motion.div>
        </div>
  )
}

export default ProjectDetails