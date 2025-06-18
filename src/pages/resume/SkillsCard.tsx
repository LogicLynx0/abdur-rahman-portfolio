import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const SkillsCard = () => {
  return (
    <div>
        <Card className="bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-all duration-300 hover:scale-[1.02] animate-fade-in">
            <CardHeader>
              <CardTitle className="text-blue-400">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MUI', 'Angular'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Backend & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', '.NET Core', 'Git', 'GitHub', 'VS Code', 'RESTful APIs'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-600 text-white text-xs rounded-full">
                        {skill}
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

export default SkillsCard