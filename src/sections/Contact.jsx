import { useState } from "react"
import emailjs from "@emailjs/browser"

// service_avxff27
// template_j779obt

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true )

        try {
            await emailjs.send("service_avxff27", "template_j779obt", {
            form_data: formData.name,
            to_name: "Pradeesh S",
            from_email: formData.email,
            to_email: "pradeeshsivaprakasam@gmail.com",
            message: formData.message,
        },
    "QgDSI8Up50eeCNyZ2")
        setIsLoading(false);
        alert("Success")
        setFormData({name: "", email:"", message:""})
            
        } catch (error) {
            setIsLoading(false);
            alert("Failed")
            
        }

        
    };

  return (
    <section className="relative flex items-center c-space section-spacing">
        <div className="flex flex-col items-center justify-center max-w-md p-5
        mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Let's Talk</h2>
                <p>Whether you are looking to build a new website improve your
                    existing platform, or bring a unique project to life, I'm here to collabrate
                </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">
                        Full Name
                    </label>
                    <input id="name"
                            type="text"
                            name="name"
                            className="field-input field-input-focus"
                            placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="field-label">
                        Email
                    </label>
                    <input id="email"
                            type="email"
                            name="email"
                            className="field-input field-input-focus"
                            placeholder="JohnDoe@gmail.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="field-label">
                        Message
                    </label>
                    <textarea id="message"
                            type="text"
                            name="message"
                            rows="4"
                            className="field-input field-input-focus"
                            placeholder="Share Your Thoughts..."
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required />
                </div>
                <button type="submit" 
                        className="w-full px-1 py-3 text-lg text-center
                                    rounded-md cursor-pointer bg-radial 
                                    from-lavender to-royal hover-animation"
                        >
                    {!isLoading ? "Send" : "Sending..."}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact