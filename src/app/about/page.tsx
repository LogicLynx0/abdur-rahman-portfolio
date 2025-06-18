
import FaqSection from '@/components/common/FaqSection';
import { aboutPageFaq } from '@/lib/faqsData';
import AboutPageHeroSection from '@/pages/aboutPage/AboutPageHeroSection';
import LearningJourneySection from '@/pages/aboutPage/LearningJourneySection';
import SkillsDisplaySection from '@/pages/aboutPage/SkillsDisplaySection';
import React from 'react';

const About = () => {
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Next.js', level: 90, color: 'bg-gray-500' },
    { name: 'JavaScript/TypeScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: '.NET Core', level: 60, color: 'bg-purple-500' },
    { name: 'Angular', level: 65, color: 'bg-red-500' },
  ];

  

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <AboutPageHeroSection />

      {/* Skills Section */}
      <SkillsDisplaySection skills={skills} />

      {/* Learning Journey */}
      <LearningJourneySection />

      {/* FAQ Section */}
      <FaqSection faqData={aboutPageFaq} />
    </div>
  );
};

export default About;
