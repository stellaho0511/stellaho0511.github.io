'use client'

import { useEffect, useState } from 'react'

interface Research {
  title: string
  description: string
  keywords?: string[]
}

export default function ResearchPreview({ onBack }: { onBack: () => void }) {
  const [research, setResearch] = useState<Research[]>([])

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
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">Research Interests</h2>
          <p className="text-muted-foreground">Focus areas and current investigations</p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="space-y-4">
        {research.map((item, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-foreground/80 mb-4">{item.description}</p>
            {item.keywords && (
              <div className="flex flex-wrap gap-2">
                {item.keywords.map((keyword, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
