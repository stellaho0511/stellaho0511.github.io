'use client'

import { useEffect, useState } from 'react'

interface Profile {
  name: string
  email: string
  phone?: string
  affiliation?: string
  location?: string
  socials?: { [key: string]: string }
}

export default function ContactPreview({ onBack }: { onBack: () => void }) {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/data/profile.json')
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-2">Contact</h2>
          <p className="text-muted-foreground">Get in touch</p>
        </div>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          ← Back
        </button>
      </div>

      {profile && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Direct Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Email</p>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-primary hover:underline text-lg font-medium"
                >
                  {profile.email}
                </a>
              </div>
              {profile.phone && (
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Phone</p>
                  <p className="text-lg font-medium">{profile.phone}</p>
                </div>
              )}
              {profile.location && (
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Location</p>
                  <p className="text-lg font-medium">{profile.location}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Affiliation
            </h3>
            <p className="text-lg font-medium text-foreground">
              {profile.affiliation || 'Academic Institution'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
