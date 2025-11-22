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

export default function Publications() {
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
    <section id="publications" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Publications</h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-3">
                    {pub.type}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{pub.authors}</p>
                  <p className="text-primary font-medium text-sm">{pub.venue}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
