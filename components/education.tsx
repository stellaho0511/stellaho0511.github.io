'use client'

import { useEffect, useState } from 'react'

interface EducationItem {
  degree: string
  institution: string
  period: string
  details: string
}

export default function Education() {
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
    <section id="education" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Education</h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.degree}
                </h3>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-primary font-medium mb-2">{item.institution}</p>
              <p className="text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
