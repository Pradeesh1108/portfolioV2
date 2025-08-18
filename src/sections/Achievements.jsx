import React from 'react';

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "Hackathon Champion",
      category: "Competition",
      date: "2023",
      description: "Won first place in the National CodeFest hackathon, building an AI-powered educational platform in 48 hours.",
      impact: "Led a team of 4 developers to victory against 200+ participants",
      tags: ["AI/ML", "Team Leadership", "Innovation", "Education Tech"],
      icon: "🏆"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      category: "Community",
      date: "2022-Present",
      description: "Active contributor to major open-source projects including React, .NET Core, and various machine learning libraries.",
      impact: "100+ commits across 15+ repositories, helping thousands of developers worldwide",
      tags: ["Open Source", "React", ".NET", "Machine Learning"],
      icon: "🌟"
    },
    {
      id: 3,
      title: "Tech Conference Speaker",
      category: "Speaking",
      date: "2023",
      description: "Presented on 'Modern Web Development with Blazor and React' at the International Developer Conference.",
      impact: "Reached 500+ developers, received 4.9/5 rating from attendees",
      tags: ["Public Speaking", "Blazor", "React", "Web Development"],
      icon: "🎤"
    },
    {
      id: 4,
      title: "Mentorship Program Lead",
      category: "Leadership",
      date: "2022-2024",
      description: "Led a 6-month mentorship program for 50+ junior developers, helping them transition into full-stack development.",
      impact: "95% of mentees secured developer positions within 3 months",
      tags: ["Mentorship", "Leadership", "Full-Stack", "Career Development"],
      icon: "👥"
    }
  ];


  return (
    <section id="achievements" className="c-space py-16">
      <h2 className="text-heading">Achievements & Recognition</h2>
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
              <span className="subtext">Microsoft Certified Developer</span>
              <span className="text-aqua text-sm">2023</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="subtext">AWS Solutions Architect</span>
              <span className="text-aqua text-sm">2022</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="subtext">Google Cloud Professional</span>
              <span className="text-aqua text-sm">2022</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
