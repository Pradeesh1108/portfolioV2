import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      duration: "2019 - 2023",
      description: "Specialized in software engineering, algorithms, and data structures. Completed capstone project on machine learning applications.",
      achievements: [
        "Graduated with First Class Honours (CGPA: 8.9/10)",
        "Dean's List for Academic Excellence (2020-2023)",
        "Best Final Year Project Award",
        "Member of Computer Science Society"
      ],
      tags: ["Computer Science", "Software Engineering", "Machine Learning", "Data Structures"]
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Science Academy",
      duration: "2017 - 2019",
      description: "Focused on mathematics, physics, and computer science. Developed strong analytical and problem-solving skills.",
      achievements: [
        "Valedictorian of graduating class",
        "National Mathematics Olympiad Finalist",
        "Science Fair First Place Winner",
        "Student Council President"
      ],
      tags: ["Mathematics", "Physics", "Computer Science", "Leadership"]
    }
  ];

  return (
    <section id="education" className="c-space py-20">
      <h2 className="text-heading">Education</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-2 h-[1px] w-full"></div>
      
      <div className="grid grid-cols-1 gap-6 mt-12 lg:grid-cols-2">
        {educationData.map((education) => (
          <div key={education.id} className="grid-default-color p-6 rounded-2xl hover-animation">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="headtext text-white">{education.degree}</h3>
                <p className="subtext text-aqua">{education.institution}</p>
                <p className="subtext text-sand">{education.duration}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-royal to-lavender rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
            </div>
            
            <p className="subtext mb-4">{education.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-mint mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-aqua text-xs mt-1">•</span>
                    <span className="subtext text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {education.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gradient-to-r from-storm to-indigo rounded-full text-xs text-white border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
