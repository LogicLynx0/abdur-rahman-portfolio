import React from 'react'
import EducationCard from './EducationCard'
import CertificationCard from './CertificationCard'

const EducationSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Education Card */}
          <EducationCard />

          {/* Certifications Card */}
          <CertificationCard />
        </div>
  )
}

export default EducationSection