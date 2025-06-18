import React from 'react'

const SkillsDisplaySection = ({skills}: any) => {
  return (
    <div>
        <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-xl text-gray-300">Technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsDisplaySection