import React from 'react'
import ProfessionalSummary from './ProfessionalSummary'
import SkillsCard from './SkillsCard'

const SummarySection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Summary Card */}
          <ProfessionalSummary />

          {/* Skills Card */}
          <SkillsCard />
        </div>

  )
}

export default SummarySection