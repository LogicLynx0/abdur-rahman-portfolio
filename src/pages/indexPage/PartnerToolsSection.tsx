import React from 'react'

const tools = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'VSCode', icon: '💙' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'TypeScript', icon: '🔷' }
  ];

const PartnerToolsSection = () => {
  return (
    <div>
        <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Tools I Love</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Technologies and tools that power my development workflow
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="group flex flex-col items-center p-6 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnerToolsSection