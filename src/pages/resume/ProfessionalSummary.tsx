import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const ProfessionalSummary = () => {
  return (
    <div>
        <Card className="bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-all duration-300 hover:scale-[1.02] animate-fade-in">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center gap-2">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Passionate Full Stack JavaScript Developer with expertise in React and Next.js, currently expanding skills in Node.js and .NET Core with Angular. 
                Proven track record of building 5-6 personal projects and contributing to production-level applications at a leading software company. 
                Committed to writing clean, performant code that solves real-world problems.
              </p>
            </CardContent>
          </Card>
    </div>
  )
}

export default ProfessionalSummary