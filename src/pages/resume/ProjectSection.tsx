import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const ProjectSection = () => {
  return (
    <div>
        <Card className="mt-6 bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-all duration-300 hover:scale-[1.01] animate-fade-in">
          <CardHeader>
            <CardTitle className="text-blue-400">Key Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                <h3 className="font-semibold text-white mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Built a full-featured e-commerce platform using React, Next.js, and modern CSS. 
                  Features include product catalog, shopping cart, and responsive design.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                <h3 className="font-semibold text-white mb-2">Task Management App</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Developed a collaborative task management application with real-time updates 
                  and intuitive user interface for team productivity.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'CSS3'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default ProjectSection