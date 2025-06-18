import React from 'react'

const HomePageOverviewSection = () => {
  return (
    <div>
        <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I build exceptional digital experiences with modern technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-300">Building responsive, interactive UIs with React, Next.js, and modern CSS frameworks.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-300">Currently mastering Node.js and .NET Core for robust server-side applications.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Stack Solutions</h3>
              <p className="text-gray-300">Creating end-to-end applications that deliver exceptional user experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePageOverviewSection