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
        backdrop-blur-sm p-4">
            <motion.div className="relative w-full max-w-2xl max-h-[90vh] border shadow-sm
                    rounded-2xl bg-gray-100
                    border-white/10 overflow-y-auto"
                    initial={{opacity: 0,scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    >
                <button onClick={closeModel}
        
                className="absolute p-3 rounded-full top-4 right-4 
                bg-midnight hover:bg-gray-500 z-30 shadow-lg border border-white/20
                sm:p-2 sm:top-5 sm:right-5">
                    <img src="assets/close.svg" className="w-5 h-5 sm:w-6 sm:h-6" alt="Close" />
                </button>
                <img src={image} alt={title} className="w-full rounded-t-2xl" />
                <div className="p-4 sm:p-6">
                    <h5 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900">{title}</h5>
                    <p className="mb-4 font-normal text-gray-700 text-sm sm:text-base">
                        {description}</p>
                    {subDescription.map((subDesc, index)=>(
                        <p key={index} className="mb-3 font-normal text-gray-700 text-sm sm:text-base">{subDesc}</p>
                    ))}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {tags.map((tag)=>(
                                <img key={tag.id} 
                                     src={tag.path} 
                                     alt={tag.name} 
                                     className="rounded-lg w-8 h-8 sm:w-10 sm:h-10 hover-animation object-contain"/>
                                    
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            {liveLink && <LiveButton href={liveLink} />}
                            <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-gray-900">
                                <img src="assets/logos/github.svg" className="w-4 h-4" alt="GitHub" />
                                View Code
                            </a>
                        </div>

                    </div>

                </div>
            </motion.div>
        </div>
  )
}

export default ProjectDetails;