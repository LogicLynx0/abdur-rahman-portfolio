import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const CertificationCard = () => {
  return (
    <div>
        <Card className="bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-all duration-300 hover:scale-[1.02] animate-fade-in">
            <CardHeader>
              <CardTitle className="text-blue-400">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-slate-700 rounded-lg">
                  <h4 className="font-semibold text-white">React Developer Certificate</h4>
                  <p className="text-blue-400 text-sm">Meta • 2023</p>
                </div>
                <div className="p-3 bg-slate-700 rounded-lg">
                  <h4 className="font-semibold text-white">JavaScript Algorithms and Data Structures</h4>
                  <p className="text-blue-400 text-sm">freeCodeCamp • 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>
    </div>
  )
}

export default CertificationCard