'use client'

import { useEffect, useState } from 'react'

interface Education {
  degree: string
  field: string
  institution: string
  year: string
  details?: string
}

export default function EducationPreview({ onBack }: { onBack: () => void }) {
  const [education, setEducation] = useState<Education[]>([])

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
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">Education</h2>
          <p className="text-muted-foreground">Academic background and credentials</p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.field}</p>
              </div>
              <span className="text-sm text-muted-foreground">{edu.year}</span>
            </div>
            <p className="text-muted-foreground mb-2">{edu.institution}</p>
            {edu.details && <p className="text-sm text-foreground/80">{edu.details}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
