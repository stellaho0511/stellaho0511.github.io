'use client'

import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

interface Publication {
  title: string
  authors: string
  venue: string
  url: string
  type: 'Conference' | 'Journal'
}

export default function PublicationsDetail() {
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
    <div className="space-y-4">
      {publications.map((pub, index) => (
        <a
          key={index}
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group block"
        >
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-2">
                {pub.type}
              </span>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {pub.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-1">{pub.authors}</p>
              <p className="text-primary font-medium text-sm">{pub.venue}</p>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </a>
      ))}
    </div>
  )
}
