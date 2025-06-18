import React from 'react'
import { Card, CardContent } from "@/components/ui/Card";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';


const ResumeContactSection = () => {
  return (
    <div>
        <Card className="mb-8 bg-slate-800 border-slate-700 text-white animate-fade-in">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-400 mb-2">Abdur Rahman</h1>
              <p className="text-xl text-gray-300 mb-4">Full Stack JavaScript Developer</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <span>abdur.rahman.cui@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-blue-400" />
                  <span>+92 333-4511804 </span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-400" />
                  <span>johndoe.dev</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-blue-400" />
                  <span>in/abdur-rahman-rehman-programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-blue-400" />
                  <span>github.com/LogicLynx0</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default ResumeContactSection