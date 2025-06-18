import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const ExperienceCardSection = () => {
  return (
    <div>
        <Card className="mt-6 bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-all duration-300 hover:scale-[1.01] animate-fade-in">
          <CardHeader>
            <CardTitle className="text-blue-400">Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white text-lg">Frontend Developer</h3>
                    <p className="text-blue-400 font-medium">Block Software Solutions</p>
                  </div>
                  <span className="text-gray-400 text-sm bg-slate-700 px-3 py-1 rounded-full">2024 - Present</span>
                </div>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Contributed to multiple production-level web applications using React and Next.js</li>
                  <li>• Collaborated with cross-functional teams to deliver high-quality user experiences</li>
                  <li>• Implemented responsive designs and optimized application performance</li>
                  <li>• Participated in code reviews and maintained coding standards</li>
                </ul>
              </div>

              <div className="border-l-2 border-slate-600 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white text-lg">Junior Web Developer</h3>
                    <p className="text-blue-400 font-medium">StartupXYZ</p>
                  </div>
                  <span className="text-gray-400 text-sm bg-slate-700 px-3 py-1 rounded-full">2021 - 2022</span>
                </div>
                <ul className="text-gray-300 space-y-1 ml-4">
                  <li>• Developed interactive web components using React and modern JavaScript</li>
                  <li>• Assisted in building and maintaining company's main web application</li>
                  <li>• Learned best practices for version control and agile development</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default ExperienceCardSection