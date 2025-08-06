import FaqSection from '@/components/common/FaqSection'
import { projectPageFaqs } from '@/lib/faqsData'
import ProjectsGrid from '@/pages/projectPage/ProjectsGrid'
import React from 'react'

const Projects = () => {
  return (
    <div className="pt-20">
        {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A collection of my personal projects showcasing my skills in React, Next.js, and full-stack development.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
      </section>
      {/* Projects Grid */}
      <ProjectsGrid />

      {/* FAQ Section */}
      <FaqSection faqData={projectPageFaqs} faqTitle='Project FAQs' faqDes='Common questions about my development process' />
    </div>
  )
}

export default Projects