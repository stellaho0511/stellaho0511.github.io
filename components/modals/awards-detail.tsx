'use client'

import { useEffect, useState } from 'react'

interface Award {
  title: string
  issuer: string
  date: string
  description: string
}

export default function AwardsDetail() {
  const [awards, setAwards] = useState<Award[]>([])

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch('/data/awards.json')
        const data = await response.json()
        setAwards(data)
      } catch (error) {
        console.error('Error fetching awards - using empty:', error)
        setAwards([])
      }
    }

    fetchAwards()
  }, [])

  if (awards.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        Awards data coming soon. Please check back later.
      </p>
    )
  }

  return (
    <div className="space-y-6">
      {awards.map((award, index) => (
        <div key={index} className="pb-6 border-b border-border last:border-b-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">
              {award.title}
            </h3>
            <span className="text-sm text-muted-foreground">{award.date}</span>
          </div>
          <p className="text-primary font-medium mb-2">{award.issuer}</p>
          <p className="text-muted-foreground leading-relaxed">{award.description}</p>
        </div>
      ))}
    </div>
  )
}
