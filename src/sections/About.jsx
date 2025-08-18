import { useRef } from "react"
import Card from "../ components/Card"
import { Globe } from "../ components/Globe";
import CopyEmailButton from "../ components/CopyEmailButton";
import { Frameworks } from "../ components/Frameworks";
import DownloadResumeButton from "../ components/DownloadResumeButton";

const About = () => {
    const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing ">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" 
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
                            md:scale-[3] md:left-50 
                            md:inset-y-10 lg:scale-[2.5]"
                alt="" />
                <div className="z-10">
                    <p className="headtext">Hi I'm Pradeesh</p>
                    <p className="subtext">Aspiring Software Developer</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none 
                -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo">    
                </div>
            </div>
            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
                <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">
                        CODE IS CRAFT
                    </p>
                    <Card style = {{rotate: "30deg", top: "25%", left : "1%"}} text="Coding is life" containerRef={grid2Container}/>
                    <Card style = {{rotate: "10deg", top: "75%", left : "25%"}} text="Let the hustle compile" containerRef={grid2Container}/>
                    <Card style = {{rotate: "20deg", top: "50%", left : "70%"}} text="$ git commit -m 'Built myself" containerRef={grid2Container} />
                    <Card style = {{rotate: "40deg", top: "20%", left : "60%"}} text="import { Coffee } from 'life'" containerRef={grid2Container}/>
                    <Card style = {{rotate: "75deg", top: "30%", left : "60%"}} image="assets/logos/react.svg" containerRef={grid2Container}/>
                    <Card style = {{rotate: "60deg", top: "10%", left : "40%"}} image="assets/logos/threejs.svg" containerRef={grid2Container}/>

                </div>
            </div>

            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in India, and open to remote work worldwide</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />

                </figure>
            </div>
            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">
                        Looking to hire?
                    </p>
                    <DownloadResumeButton />
                </div>
            </div>
            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Tech Stack</p>
                    <p className="subtext">I specialize in a variety of languages, frameworks
                        , and tools that allow me to built robust and scalable applications
                    </p>

                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full
                h-full start-[50%] md:scale-125">
                    <Frameworks/>
                </div>
            </div>


        </div>
        
    </section>
  )
}

export default About