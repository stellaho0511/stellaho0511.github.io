'use client'

import { useEffect, useState } from 'react'

interface EducationItem {
  degree: string
  institution: string
  period: string
  details: string
}

export default function EducationDetail() {
  const [education, setEducation] = useState<EducationItem[]>([])

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('/data/education.json')
        const data = await response.json()
        setEducation(data)
      } catch (error) {
        console.error('Error fetching education:', error)
      }
    }

    fetchEducation()
  }, [])

  return (
    <div className="space-y-6">
      {education.map((item, index) => (
        <div key={index} className="pb-6 border-b border-border last:border-b-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {item.degree}
            </h3>
            <span className="text-sm text-muted-foreground">{item.period}</span>
          </div>
          <p className="text-primary font-medium mb-2">{item.institution}</p>
          <p className="text-muted-foreground leading-relaxed">{item.details}</p>
        </div>
      ))}
    </div>
  )
}
