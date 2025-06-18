import React from 'react'

const LearningJourneySection = () => {
  return (
    <div>
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Learning Journey</h2>
            <p className="text-xl text-gray-300">Continuous growth and development</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-12">
                    <h3 className="text-xl font-semibold">React & Frontend Mastery</h3>
                    <p className="text-gray-400">Built strong foundation in React, component architecture, and modern frontend development.</p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-12">
                    <h3 className="text-xl font-semibold">Next.js & Full Stack</h3>
                    <p className="text-gray-400">Advanced to Next.js for server-side rendering and full-stack capabilities.</p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-yellow-500 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-12">
                    <h3 className="text-xl font-semibold">Node.js & Backend</h3>
                    <p className="text-gray-400">Currently learning server-side JavaScript with Node.js and Express.</p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="absolute left-0 w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-12">
                    <h3 className="text-xl font-semibold">.NET Core & Angular</h3>
                    <p className="text-gray-400">Expanding expertise with Microsoft technologies and Angular framework.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LearningJourneySection