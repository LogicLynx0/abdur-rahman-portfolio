import React from 'react'

const QuoteSection = () => {
  return (
    <div>
         <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-relaxed">
              <span className="text-blue-400">"</span>
              I believe in building clean, performant code that solves real problems.
              <span className="text-blue-400">"</span>
            </blockquote>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuoteSection