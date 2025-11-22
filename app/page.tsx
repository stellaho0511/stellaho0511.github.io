"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { getDataPath } from "@/lib/utils"

interface Profile {
  name: string
  title: string
  subtitle: string
  bio: string
  avatar?: string
  email: string
  interests?: string[]
  social?: {
    github?: string
    linkedin?: string
    scholar?: string
  }
}

interface Education {
  degree: string
  institution: string
  period: string
  details: string
}

interface Research {
  title: string
  period: string
  description: string
  keywords: string[]
  url?: string
}

export default function BioPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [education, setEducation] = useState<Education[]>([])
  const [research, setResearch] = useState<Research[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [infoRes, educationRes, researchRes] = await Promise.all([
          fetch(getDataPath("/data/info.json")), // Fetch from info.json instead of profile.json
          fetch(getDataPath("/data/education.json")),
          fetch(getDataPath("/data/research.json")),
        ])

        const [infoData, educationData, researchData] = await Promise.all([
          infoRes.json(),
          educationRes.json(),
          researchRes.json(),
        ])

        setProfile(infoData) // Set profile with infoData
        await new Promise((resolve) => setTimeout(resolve, 300))
        setEducation(educationData)
        await new Promise((resolve) => setTimeout(resolve, 300))
        setResearch(researchData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-1 px-[10%] pt-28 pb-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-[35%_65%] gap-12 h-[calc(100vh-180px)]">
            {/* LEFT COLUMN - Profile & Description */}
            <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-left-4 duration-500 h-full overflow-y-auto no-scrollbar">
              <Hero profile={profile} />

              {/* Social Links */}
              <div className="flex gap-4 mt-4 mb-6">
                {profile?.social?.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {profile?.social?.scholar && (
                  <a
                    href={profile.social.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  >
                    <BookOpen size={20} />
                  </a>
                )}
                {profile?.social?.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                <a
                  href={`mailto:${profile?.email}`}
                  className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="mt-2 w-full text-left space-y-6 pb-8">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">About</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{profile?.bio}</p>
                </div>

                {profile?.interests && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Research Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN - Education & Research in colored boxes */}
            <div className="flex flex-col gap-8 h-full">
              {/* Education */}
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-300 bg-purple-50 rounded-lg p-6">
                <h2 className="text-lg font-bold text-black mb-4">📚 Education</h2>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-sm text-black">{edu.degree}</p>
                      <p className="text-xs text-purple-600 font-medium">{edu.institution}</p>
                      <p className="text-xs text-gray-600">{edu.period}</p>
                      <p className="text-xs text-gray-700 mt-1">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research */}
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-500 bg-blue-50 rounded-lg p-6">
                <h2 className="text-lg font-bold text-black mb-4">🔬 Research</h2>
                <div className="space-y-4">
                  {research.map((proj, idx) => (
                    <div key={idx}>
                      {proj.url ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm text-black hover:text-blue-600 transition-colors inline-block"
                        >
                          {proj.title}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm text-black">{proj.title}</p>
                      )}
                      <p className="text-xs text-blue-600 font-medium">{proj.period}</p>
                      <p className="text-xs text-gray-700 mt-1">{proj.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {proj.keywords.map((keyword, kidx) => (
                          <span
                            key={kidx}
                            className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
