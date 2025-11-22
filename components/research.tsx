'use client'

import { useEffect, useState } from 'react'

interface ResearchItem {
  title: string
  period: string
  description: string
  keywords: string[]
}

export default function Research() {
  const [research, setResearch] = useState<ResearchItem[]>([])

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const response = await fetch('/data/research.json')
        const data = await response.json()
        setResearch(data)
      } catch (error) {
        console.error('Error fetching research:', error)
      }
    }

    fetchResearch()
  }, [])

  return (
    <section id="research" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-foreground mb-12">Research Areas</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {research.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-foreground pr-4">
                {item.title}
              </h3>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="text-muted-foreground mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.keywords.map((keyword, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
