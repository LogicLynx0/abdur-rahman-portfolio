import Image from 'next/image'
import React from 'react'

const AboutPageHeroSection = () => {
  return (
    <div>
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-gray-300 mb-6">
                I'm a passionate Full Stack JavaScript Developer with expertise in React and Next.js. 
                Currently expanding my skills in Node.js and .NET Core with Angular to become a more 
                well-rounded developer.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                With 5-6 personal projects under my belt and contributions to multiple production-level 
                applications at my software company, I bring both creativity and professional experience 
                to every project I work on.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">React Expert</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">Next.js</span>
                <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">TypeScript</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Learning Node.js</span>
              </div>
            </div>
            
            <div className="animate-fade-in flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/portfolio-image.jpeg" 
                      alt="Developer Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full animate-pulse opacity-20"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPageHeroSection