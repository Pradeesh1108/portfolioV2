import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      duration: "2023 - 2027",
      description: "Gained strong foundations in Artificial Intelligence and Machine Learning, with hands-on experience in data structures, algorithms, deep learning, and full-stack development.",
      icon: "🎓",
      category: "Degree"
    },
    {
      id: 2,
      degree: "Machine Learning Trainee",
      institution: "Amazon ML Summer School",
      duration: "August 2025",
      description: "Selected for Amazon ML Summer School 2025, an intensive program covering advanced concepts in machine learning, deep learning, and generative AI. Gaining hands-on exposure through real-world case studies and industry best practices from Amazon's ML experts.",
      icon: "🤖",
      category: "Training"
    },
    {
      id: 3,
      degree: "Software Project Intern",
      institution: "Infosys Springboard",
      duration: "August 2025 - Present",
      description: "Currently interning at Infosys Springboard, gaining hands-on experience in software development and project-based learning. Focusing on building scalable applications while strengthening problem-solving and industry-relevant technical skills.",
      icon: "💼",
      category: "Internship"
    }
  ];

  return (
    <section id="education" className="c-space py-20">
      <div className="text-center mb-16">
        <h2 className="text-heading text-white">
          Academic Journey
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          From foundational education to specialized training and real-world experience
        </p>
        <div className="bg-gradient-to-r from-transparent via-aqua to-transparent mt-6 h-[2px] w-32 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3">
        {educationData.map((education, index) => (
          <div 
            key={education.id} 
            className="group relative overflow-hidden rounded-3xl bg-midnight border border-white/10 backdrop-blur-sm hover:border-aqua/30 transition-all duration-500 hover:scale-105"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-aqua/10 via-transparent to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Category Tag */}
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-gradient-to-r from-storm to-indigo rounded-full text-xs text-white border border-white/20 font-medium">
                {education.category}
              </span>
            </div>
            
            <div className="p-8 pt-16 relative z-10">
              {/* Degree */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-aqua transition-colors duration-300">
                {education.degree}
              </h3>
              
              {/* Institution */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-aqua rounded-full"></div>
                <p className="text-aqua font-medium text-sm">
                  {education.institution}
                </p>
              </div>
              
              {/* Duration */}
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-4 h-4 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sand text-sm font-medium">
                  {education.duration}
                </p>
              </div>
              
              {/* Description */}
              <p className="text-neutral-300 text-sm leading-relaxed">
                {education.description}
              </p>
            </div>
            
            {/* Hover Effect Border - Removed gradient */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent border-aqua/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
      
      {/* Bottom Decoration */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-4 text-neutral-500">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-neutral-500"></div>
          <span className="text-sm">Continuous Learning</span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-neutral-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;
