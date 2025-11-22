'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import EducationDetail from '@/components/modals/education-detail'
import ResearchDetail from '@/components/modals/research-detail'
import PublicationsDetail from '@/components/modals/publications-detail'
import ContactDetail from '@/components/modals/contact-detail'
import ExperienceDetail from '@/components/modals/experience-detail'
import AwardsDetail from '@/components/modals/awards-detail'

interface DetailModalProps {
  section: string | null
  onClose: () => void
}

export default function DetailModal({ section, onClose }: DetailModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(!!section)
  }, [section])

  if (!isOpen || !section) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg border border-border max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-border flex items-center justify-between p-6">
          <h2 className="text-2xl font-bold text-foreground capitalize">
            {section}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {section === 'education' && <EducationDetail />}
          {section === 'research' && <ResearchDetail />}
          {section === 'publications' && <PublicationsDetail />}
          {section === 'contact' && <ContactDetail />}
          {section === 'experience' && <ExperienceDetail />}
          {section === 'awards' && <AwardsDetail />}
        </div>
      </div>
    </div>
  )
}
