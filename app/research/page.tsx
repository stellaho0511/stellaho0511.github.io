"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { getDataPath } from "@/lib/utils"

interface Profile {
  name: string
  title: string
  subtitle: string
  bio: string
  email: string
}

interface Research {
  title: string
  period: string
  description: string
  keywords: string[]
  url?: string
}

export default function ResearchPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [research, setResearch] = useState<Research[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoRes, researchRes] = await Promise.all([
          fetch(getDataPath("/data/info.json")), // Fetch from info.json
          fetch(getDataPath("/data/research.json")),
        ])

        const [infoData, researchData] = await Promise.all([infoRes.json(), researchRes.json()])

        setProfile(infoData) // Set profile with infoData
        await new Promise((resolve) => setTimeout(resolve, 300))
        setResearch(researchData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
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
            {/* LEFT COLUMN - Profile */}
            <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-left-4 duration-500">
              <Hero profile={profile} />
            </div>

            {/* RIGHT COLUMN - Research Content */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-300 overflow-y-auto">
              <h2 className="text-2xl font-bold text-black mb-6">Research</h2>

              <div className="space-y-6">
                {research.map((proj, idx) => (
                  <div key={idx}>
                    {proj.url ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-lg text-black hover:text-blue-600 transition-colors inline-block"
                      >
                        {proj.title}
                      </a>
                    ) : (
                      <p className="font-semibold text-lg text-black">{proj.title}</p>
                    )}
                    <p className="text-sm text-blue-600 font-medium mt-1">{proj.period}</p>
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">{proj.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {proj.keywords.map((keyword, kidx) => (
                        <span
                          key={kidx}
                          className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
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
      </main>

      <Footer />
    </div>
  )
}
