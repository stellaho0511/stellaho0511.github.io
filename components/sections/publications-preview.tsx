'use client'

import { useEffect, useState } from 'react'

interface Publication {
  title: string
  authors: string
  venue?: string
  url?: string
  type?: string
}

export default function PublicationsPreview({ onBack }: { onBack: () => void }) {
  const [publications, setPublications] = useState<Publication[]>([])

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('/data/publications.json')
        const data = await response.json()
        setPublications(data)
      } catch (error) {
        console.error('Error fetching publications:', error)
      }
    }

    fetchPublications()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">Publications</h2>
          <p className="text-muted-foreground">Research papers and academic works</p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          ← Back
        </button>
      </div>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">{pub.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {pub.authors}
            </p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-foreground/80">
                {pub.type && <span>{pub.type} • </span>}
                {pub.venue && <span>{pub.venue}</span>}
              </div>
              {pub.url && (
                <a 
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
