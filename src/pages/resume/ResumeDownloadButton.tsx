'use client'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'
import React from 'react'

const ResumeDownloadButton = () => {
  
   const handleDownloadPDF = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/pdf/Abdur-Rahman-FullStack-JavaScript-Developer-Resume.pdf'; // You'll need to add your actual PDF file to the public folder
    link.download = 'Abdur_Rahman_Resume.pdf'; // Replace with your actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
          >
            <Download size={20} className="mr-2" />
            Download PDF
          </Button>
        </div>
  )
}

export default ResumeDownloadButton