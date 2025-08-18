# 🚀 Modern 3D Portfolio Website

A stunning, interactive portfolio website built with React, Three.js, and TailwindCSS. This portfolio showcases professional projects, skills, and achievements through an immersive 3D design experience.

## ✨ Features

- **Interactive 3D Elements**: Engaging 3D animations and visual effects using Three.js
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **Project Showcase**: Comprehensive display of projects with live links and GitHub repositories
- **Contact Integration**: Built-in contact form with EmailJS integration
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **Accessibility**: Designed with accessibility best practices in mind

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **TailwindCSS 4** - Utility-first CSS framework
- **Three.js** - 3D graphics library for interactive elements
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library for smooth transitions

### 3D & Graphics
- **@react-three/drei** - Useful helpers for React Three Fiber
- **@react-three/fiber** - React renderer for Three.js
- **Three.js** - 3D graphics and animation library

### Utilities
- **EmailJS** - Contact form integration
- **React Responsive** - Responsive design utilities
- **Tailwind Merge** - Utility for merging Tailwind classes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pradeesh1108/portfolioV2.git
   cd portfolioV2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Alert.jsx       # Alert notifications
│   ├── Astronaut.jsx   # 3D astronaut model
│   ├── Card.jsx        # Project card component
│   ├── Globe.jsx       # Interactive 3D globe
│   ├── Particles.jsx   # Particle effects
│   └── ...
├── sections/            # Main page sections
│   ├── Hero.jsx        # Hero section with 3D elements
│   ├── About.jsx       # About me section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   └── ...
├── constants/           # Configuration and data
│   └── index.js        # Project data and social links
└── App.jsx             # Main application component
```

## 🎯 Key Projects Showcased

### 1. **HireMate AI** 🤖
- AI-powered career assistant with resume analysis and mock interviews
- Built with React, FastAPI, and Google Gemini AI
- [Live Demo](https://hire-mate-ai-green.vercel.app) | [GitHub](https://github.com/Pradeesh1108/hireMate-AI-frontend.git)

### 2. **MyContacts Backend API** 📱
- Secure RESTful API for contact management
- Node.js, Express.js, and MongoDB backend
- [Live Demo](https://mycontactsapp-backend.onrender.com) | [GitHub](https://github.com/Pradeesh1108/contact-manager-app-backend.git)

### 3. **Brain Tumor Prediction** 🧠
- Deep learning-powered MRI analysis with 90% accuracy
- TensorFlow-based CNN with medical chatbot integration
- [GitHub](https://github.com/Pradeesh1108/brain-tumor-prediction.git)

### 4. **AI Meeting Notes Summarizer** 📝
- AI-powered meeting transcript summarization
- React + Node.js with Google Gemini AI integration
- [Live Demo](https://ai-notes-summarizer-dusky.vercel.app/) | [GitHub](https://github.com/Pradeesh1108/ai-meeting-notes-summarizer.git)

### 5. **Modern 3D Portfolio** 🌟
- Interactive 3D portfolio website (this project)
- React, Three.js, and TailwindCSS
- [Live Demo](https://www.pradeeshs.me/) | [GitHub](https://github.com/Pradeesh1108/portfolioV2.git)

## 🎨 Customization

### Adding New Projects
Edit `src/constants/index.js` to add new projects:

```javascript
{
  id: 6,
  title: "Your Project",
  description: "Project description",
  subDescription: ["Feature 1", "Feature 2"],
  href: "GitHub URL",
  liveLink: "Live Demo URL",
  image: "/assets/projects/your-project.png",
  tags: [
    { id: 1, name: "React", path: "/assets/logos/react.svg" }
  ]
}
```

### Styling
- Modify `tailwind.config.js` for custom design tokens
- Update `src/index.css` for global styles
- Component-specific styles are handled through Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React + Vite setup
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project can be deployed to any static hosting service that supports React applications.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Portfolio**: [pradeeshs.me](https://www.pradeeshs.me/)
- **LinkedIn**: [Pradeesh Sivaprakasam](https://www.linkedin.com/in/pradeeshsivaprakasam)
- **GitHub**: [@Pradeesh1108](https://github.com/Pradeesh1108)
- **WhatsApp**: [+91 7667214939](https://wa.me/917667214939)

---

⭐ **Star this repository if you found it helpful!**
