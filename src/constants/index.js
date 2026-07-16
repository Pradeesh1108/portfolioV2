export const myProjects = [
  {
    id: 1,
  title: " Multi-Agent Document Intelligence Platform",
  description:
    "An AI-powered document processing engine that reads, understands, and acts on business documents — autonomously.",
  subDescription: [
  "Built a scalable multi-agent document intelligence platform using LangGraph to simulate enterprise document workflows, automating document understanding and business decision pipelines.",
  "Engineered specialized AI agents for intent classification, entity extraction, knowledge retrieval, risk analysis, and action planning, improving modularity and workflow scalability.",
  "Integrated Retrieval-Augmented Generation (RAG) with ChromaDB, semantic embeddings, and enterprise knowledge retrieval to generate context-aware and accurate AI insights.",
  "Implemented structured LLM outputs using Pydantic schemas and dynamic intent-driven extraction, enabling reliable processing of invoices, complaints, RFQs, and other business documents.",
  "Designed a production-ready FastAPI backend with layered architecture, reusable services, and configurable LLM orchestration, ensuring maintainable and extensible AI workflows."
],
    href: "https://github.com/Pradeesh1108/multi-agent-document-intelligence-platform",
    liveLink: "https://madip.pradeeshs.dev",
    logo: "",
    image: "/assets/projects/multi-agent-document.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "/assets/logos/LangChain Color.svg",
      },
      {
        id: 3,
        name: "LangGraph",
        path: "/assets/logos/LangGraph SVG.svg",
      },
      {
        id: 4,
        name: "Groq",
        path: "/assets/logos/Groq.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/logos/docker-original.svg",
      },
    ],
  },
  {
    id: 2,
  title: "LLM Guardrails Gateway",
  description:
    "A production-grade, modular middleware gateway that enforces safety, compliance, and structural correctness between any client and a Large Language Model.",
  subDescription: [
  "Built a production-ready LLM Guardrails Gateway to secure AI applications through multi-layered input and output validation for safe and reliable LLM interactions.",
  "Developed a configurable YAML-based Policy Engine to enforce organization-specific security policies and dynamically allow, modify, or block requests.",
  "Integrated advanced AI security techniques including prompt injection detection, jailbreak detection, PII masking, toxicity detection, and LLM-as-a-Judge evaluation.",
  "Implemented structured output validation and response safety checks to ensure policy-compliant, schema-valid, and trustworthy AI-generated responses.",
  "Designed a modular FastAPI-based architecture with extensible guardrail components, enabling scalable and enterprise-ready LLM deployments."
],
    href: "https://github.com/Pradeesh1108/llm-guardrails-gateway",
    liveLink: "https://huggingface.co/spaces/pradeeshsivaprakasam/llm-guardrail",
    logo: "",
    image: "/assets/projects/llm-guardrail.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi-original.svg",
      },
      {
        id: 3,
        name: "Groq",
        path: "/assets/logos/Groq.svg",
      },
      {
        id: 4,
        name: "PyTorch",
        path: "/assets/logos/pytorch-original.svg",
      },
    ],
  },
  {
    id: 3,
  title: "Multi-Agent AI Knowledge & Decision System",
  description:
    "A production-ready backend system implementing a sophisticated multi-agent architecture for AI-powered research, reasoning, and knowledge retrieval.",
  subDescription: [
  "Built a production-ready multi-agent AI system that orchestrates planning, reasoning, retrieval, and self-verification for accurate knowledge discovery and decision support.",
  "Developed an intelligent agent pipeline with dynamic routing, Retrieval-Augmented Generation (RAG), tool invocation, and response synthesis for complex query handling.",
  "Integrated concurrent FAISS-based semantic search and real-time web search to improve response accuracy while reducing latency through asynchronous execution.",
  "Implemented a self-healing Critic Agent that validates reasoning, detects hallucinations, and automatically retries low-confidence responses for higher reliability.",
  "Designed a scalable FastAPI backend with conversation memory, query caching, and secure sandboxed code execution for production-ready AI workflows."
],
    href: "https://github.com/Pradeesh1108/multi-Agent-ai-research-and-reasoning-platform",
    liveLink: "https://huggingface.co/spaces/pradeeshsivaprakasam/multi-agent-knowledge-system",
    logo: "",
    image: "/assets/projects/multi-agent-research.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi-original.svg",
      },
      {
        id: 3,
        name: "LangChain",
        path: "/assets/logos/LangChain Color.svg",
      },
      {
        id: 4,
        name: "Groq",
        path: "/assets/logos/Groq.svg",
      },
      {
        id: 5,
        name: "Tavily",
        path: "/assets/logos/Tavily.svg",
      },
    ],
  },
  {
    id: 4,
  title: "Email Reply Suggestion System",
  description:
    " An AI email assistant that drafts suggested replies using retrieval-augmented generation (RAG) via the Groq API, and scores its own suggestions on multiple axes with written rationale — so a reviewer knows not just 'here is a draft' but 'here is how good this draft is and why'. ",
  subDescription: [
  "Built an AI-powered email reply assistant using Retrieval-Augmented Generation (RAG) to generate context-aware responses from a structured knowledge base.",
  "Developed a tiered evaluation system that measures reply quality across relevance, groundedness, tone, and completeness using an LLM-as-a-Judge framework.",
  "Integrated rule-based validation, TF-IDF retrieval, and structured LLM evaluation to produce calibrated quality scores with explainable reasoning.",
  "Implemented holdout evaluation, calibration testing, and judge stability analysis to validate scoring reliability and reduce subjective evaluation bias.",
  "Designed a modular FastAPI architecture with Docker deployment, synthetic dataset generation, and Groq API integration for scalable AI applications."
],
    href: "https://github.com/Pradeesh1108/email-reply-suggestion-system",
    liveLink: "https://huggingface.co/spaces/pradeeshsivaprakasam/Email-Reply-Suggestion-System",
    logo: "",
    image: "/assets/projects/email-assist.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi-original.svg",
      },
      {
        id: 3,
        name: "Groq",
        path: "/assets/logos/Groq.svg",
      },
      {
        id: 4,
        name: "SQLite",
        path: "/assets/logos/sqlite.png",
      },
      {
        id: 5,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Brain Tumor Prediction Web App",
    description:
      "A deep learning-powered web application for MRI-based brain tumor detection and diagnosis support, enhanced with an LLM-driven medical chatbot for user assistance.",
    subDescription: [
      "Developed a deep learning pipeline using ResNet-50 for brain tumor classification and segmentation, achieving 90% accuracy.",
      "Built a responsive web app with real-time prediction capabilities and clear result visualization for medical imaging.",
      "Integrated an AI-powered medical chatbot to provide users with diagnostic insights and interactive support.",
      "Optimized the system for seamless accessibility, making advanced medical AI tools available through an intuitive interface.",
    ],
    href: "https://github.com/Pradeesh1108/brain-tumor-prediction.git",
    liveLink: "",
    logo: "",
    image: "/assets/projects/brain-tumor.jpeg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
      {
        id: 5,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow-original.svg",
      },
    ],
  },
  {
    id: 6,
  title: "HireMate AI",
  description:
    "An AI-powered career assistant that analyzes resumes, conducts mock interviews, and generates detailed performance reports to help candidates prepare for real-world job applications.",
  subDescription: [
    "Built a scalable LLM-powered web application for automated resume parsing and ATS compatibility scoring, improving resume screening efficiency by 50%.",
    "Developed an AI Interviewer module that simulates real interview scenarios, evaluates answers, and generates personalized feedback reports.",
    "Integrated advanced NLP techniques for structured data extraction from resumes and precise candidate evaluation.",
    "Implemented career path suggestions and skill gap analysis, boosting user job readiness and success rates by 40%.",
    "Designed a responsive frontend and seamless backend integration for an interactive and user-friendly experience.",
  ],
    href: "https://github.com/Pradeesh1108/hireMate-AI-frontend.git",
    liveLink: "https://hire-mate-ai-green.vercel.app",
    logo: "",
    image: "/assets/projects/hiremate.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi-original.svg",
      },
      {
        id: 4,
        name: "Gemini",
        path: "/assets/logos/gemini.svg",
      },
      {
        id: 5,
        name: "Python",
        path: "/assets/logos/python-original.svg",
      },
    ],
  },
  {
    id: 7,
    title: "MyContacts Backend API",
    description:
      "A secure and scalable RESTful API built with Node.js, Express.js, and MongoDB for managing personal contacts with full user authentication and data isolation.",
    subDescription: [
      "Implemented user authentication with JWT and bcrypt password hashing to ensure secure access and user data protection.",
      "Developed comprehensive contact management features (CRUD operations) with user-specific data isolation.",
      "Designed a clean architecture with middleware-based route protection, proper error handling, and modular code structure.",
      "Integrated MongoDB with Mongoose for efficient NoSQL data modeling and storage.",
      "Built a reliable backend foundation for contact management applications, supporting multiple frontend clients.",
    ],
    href: "https://github.com/Pradeesh1108/contact-manager-app-backend.git",
    liveLink: "https://mycontactsapp-backend.onrender.com",
    logo: "",
    image: "/assets/projects/my-contacts.png",
    tags: [
      {
        id: 1,
        name: "Node JS",
        path: "/assets/logos/nodejs-original-wordmark.svg",
      },
      {
        id: 2,
        name: "Express JS",
        path: "/assets/logos/express-original.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb-original.svg",
      },
    ],
  },
  {
    id: 8,
    title: "Instagram Image Downloader",
    description:
      "A modern, responsive React web app that allows users to download high-quality images from Instagram posts with bulk download support and smooth, interactive UI features.",
    subDescription: [
      "Built with React (Vite + Tailwind) for fast performance and a visually appealing, responsive interface.",
      "Implemented Instagram image extraction by integrating with a backend service to fetch and proxy media URLs securely.",
      "Developed bulk download functionality with options for individual image downloads and fallback URLs.",
      "Enhanced UX with toast notifications, loading states, hover animations, and error handling for failed loads.",
      "Structured codebase with ESLint, PostCSS, and modular React components for maintainability.",
    ],
    href: "https://github.com/Pradeesh1108/image-saver.git",
    liveLink: "https://image-saver.pradeeshs.dev",
    logo: "",
    image: "/assets/projects/insta-image-saver.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi-original.svg",
      },
    ],
  },
  {
    id: 9,
    title: "Modern 3D Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills through an interactive 3D design, built with React, Three.js, and TailwindCSS.",
    subDescription: [
      "Developed a fully responsive portfolio site with smooth animations and 3D interactive elements using Three.js.",
      "Designed a clean, modern UI with TailwindCSS ensuring accessibility and seamless navigation across devices.",
      "Integrated project showcases, resume links, and contact form for professional presentation.",
      "Optimized performance for fast load times while maintaining immersive visuals and animations.",
    ],
    href: "https://github.com/Pradeesh1108/portfolioV2.git",
    liveLink: "https://www.pradeeshs.dev/",
    logo: "",
    image: "/assets/projects/portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three JS",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/917667214939",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pradeeshsivaprakasam",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_pradeeshs_",
    icon: "/assets/socials/instagram.svg",
  },
];
