
import React from 'react';
import ResumeDownloadButton from '@/pages/resume/ResumeDownloadButton';
import ResumeContactSection from '@/pages/resume/ResumeContactSection';
import ExperienceCardSection from '@/pages/resume/ExperienceCardSection';
import EducationSection from '@/pages/resume/EducationSection';
import ProjectSection from '@/pages/resume/ProjectSection';
import SummarySection from '@/pages/resume/SummarySection';

const Resume = () => {
 
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <ResumeDownloadButton />

        {/* Contact Header Card */}
        <ResumeContactSection />

        {/* Summary Section */}
        <SummarySection />
        
        {/* Experience Card */}
        <ExperienceCardSection />

        <EducationSection />

        {/* Key Projects Card */}
        <ProjectSection />
      </div>
    </div>
  );
};

export default Resume;
