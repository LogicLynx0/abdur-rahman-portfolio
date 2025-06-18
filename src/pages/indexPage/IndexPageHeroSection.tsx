import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const IndexPageHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="animate-float absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="animate-float absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack
            </span>
            <br />
            <span className="text-white">JavaScript Developer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Passionate about creating modern web applications with React, Next.js, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 text-lg">
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
  )
}

export default IndexPageHeroSection