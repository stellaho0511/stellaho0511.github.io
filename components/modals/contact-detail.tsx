'use client'

import { useEffect, useState } from 'react'

interface Profile {
  name?: string
  email?: string
  phone?: string
  location?: string
  social?: {
    github?: string
    linkedin?: string
    scholar?: string
  }
}

export default function ContactDetail() {
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
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
        <div className="space-y-4">
          {profile?.email && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-primary font-medium hover:underline text-lg"
              >
                {profile.email}
              </a>
            </div>
          )}
          {profile?.phone && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <a
                href={`tel:${profile.phone}`}
                className="text-primary font-medium hover:underline text-lg"
              >
                {profile.phone}
              </a>
            </div>
          )}
          {profile?.location && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-primary font-medium text-lg">{profile.location}</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Connect with Me</h3>
        <div className="space-y-2">
          {profile?.social?.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
            >
              GitHub
            </a>
          )}
          {profile?.social?.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
            >
              LinkedIn
            </a>
          )}
          {profile?.social?.scholar && (
            <a
              href={profile.social.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
            >
              Google Scholar
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
