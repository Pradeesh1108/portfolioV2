import React from 'react';

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "Horizon'25 Finalist",
      category: "Hackathon",
      date: "2025",
      description: "Built an AI-powered AgriAssist app in 24 hours, designed to help farmers with crop disease detection, market insights, and scheme navigation.",
      impact: "Reached the Horizon'25 finals and sparked a startup idea from the project",
      tags: ["AI/ML", "Hackathon", "AgriTech", "Innovation"],
      icon: "🌱"
    },
    {
      id: 2,
      title: "Inter College Competitions",
      category: "Competition",
      date: "2024-Present",
      description: "Actively participating in various inter-college competitions, including building an AI-powered AgriAssist app in 24 hours to support farmers with crop disease detection, market insights, and scheme navigation.",
      impact: "Gained diverse technical skills, leadership experience, and collaborative problem-solving abilities while reaching the Horizon'25 finals and sparking a startup idea from the project.",
      tags: ["AI/ML", "Hackathon", "Innovation", "Leadership"],
      icon: "🏆"
    },
  ];


  return (
    <section id="achievements" className="c-space py-16">
      <h2 className="text-heading">Achievements</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-2 h-[1px] w-full"></div>


      {/* Main Achievements Grid */}
      <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-2">
        {achievementsData.map((achievement) => (
          <div key={achievement.id} className="group relative overflow-hidden">
            <div className="grid-default-color p-6 rounded-2xl hover-animation h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div>
                      <h3 className="headtext text-white">{achievement.title}</h3>
                      <p className="subtext text-aqua">{achievement.category}</p>
                    </div>
                  </div>
                  <p className="subtext text-sand mb-2">{achievement.date}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-storm to-indigo rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <p className="subtext mb-4">{achievement.description}</p>
              
              <div className="mb-4 p-3 bg-gradient-to-r from-storm/20 to-indigo/20 rounded-lg border border-white/10">
                <h4 className="text-sm font-semibold text-mint mb-2">Impact:</h4>
                <p className="subtext text-sm">{achievement.impact}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {achievement.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gradient-to-r from-storm to-indigo rounded-full text-xs text-white border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Recognition */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid-special-color p-8 rounded-2xl hover-animation">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-aqua to-mint rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="headtext text-white">Professional Certifications</h3>
              <p className="subtext text-aqua">Industry-recognized credentials</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="subtext">Artificial Intelligence Primer Certification</span>
              <span className="text-aqua text-sm">2025</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="subtext">Deep Learning for Developers</span>
              <span className="text-aqua text-sm">2025</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="subtext">Introduction to Git</span>
              <span className="text-aqua text-sm">2025</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
