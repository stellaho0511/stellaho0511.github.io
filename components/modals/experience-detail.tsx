'use client'

import { useEffect, useState } from 'react'

interface ExperienceItem {
  title: string
  organization: string
  period: string
  description: string
}

export default function ExperienceDetail() {
  const [experience, setExperience] = useState<ExperienceItem[]>([])

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('/data/experience.json')
        const data = await response.json()
        setExperience(data)
      } catch (error) {
        console.error('Error fetching experience - using empty:', error)
        setExperience([])
      }
    }

    fetchExperience()
  }, [])

  if (experience.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        Experience data coming soon. Please check back later.
      </p>
    )
  }

  return (
    <div className="space-y-6">
      {experience.map((item, index) => (
        <div key={index} className="pb-6 border-b border-border last:border-b-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <span className="text-sm text-muted-foreground">{item.period}</span>
          </div>
          <p className="text-primary font-medium mb-2">{item.organization}</p>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
