'use client'
import React from 'react';
import { Linkedin } from 'lucide-react';
import { linkedInProfileLink } from '@/lib/configurations';

const FloatingLinkedIn = () => {
  const handleLinkedInClick: any = () => {
    // Replace with your actual LinkedIn profile URL
    window.open(`${linkedInProfileLink}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleLinkedInClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-float"
      aria-label="Connect on LinkedIn"
    >
      <Linkedin 
        size={24} 
        className="group-hover:scale-110 transition-transform duration-300" 
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Let's connect on LinkedIn!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
      </div>
    </button>
  );
};

export default FloatingLinkedIn;
