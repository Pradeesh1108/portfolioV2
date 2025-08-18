import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      duration: "2023 - 2027",
      description: "Gained strong foundations in Artificial Intelligence and Machine Learning, with hands-on experience in data structures, algorithms, deep learning, and full-stack development."
    },
    {
      id: 2,
      degree: "Machine Learning Trainee",
      institution: "Amazon ML Summer School",
      duration: "August 2025",
      description: "Selected for Amazon ML Summer School 2025, an intensive program covering advanced concepts in machine learning, deep learning, and generative AI. Gaining hands-on exposure through real-world case studies and industry best practices from Amazon’s ML experts."
    },
    {
      id: 3,
      degree: "Software Project Intern",
      institution: "Infosys Springboard",
      duration: "August 2025 - Present",
      description: "Currently interning at Infosys Springboard, gaining hands-on experience in software development and project-based learning. Focusing on building scalable applications while strengthening problem-solving and industry-relevant technical skills."
    }
  ];

  return (
    <section id="education" className="c-space py-20">
      <h2 className="text-heading">Academics</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-2 h-[1px] w-full"></div>
      
      <div className="grid grid-cols-1 gap-6 mt-12 lg:grid-cols-2">
        {educationData.map((education) => (
          <div key={education.id} className="grid-default-color p-6 rounded-2xl hover-animation">
            <div className="mb-4">
              <h3 className="headtext text-white">{education.degree}</h3>
              <p className="subtext text-aqua">{education.institution}</p>
              <p className="subtext text-sand">{education.duration}</p>
            </div>
            
            <p className="subtext">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
