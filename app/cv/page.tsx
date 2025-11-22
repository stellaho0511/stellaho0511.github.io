"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { Download } from "lucide-react"
import { getDataPath } from "@/lib/utils"

interface Profile {
  name: string
  title: string
  subtitle: string
  bio: string
  email: string
}

export default function CVPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoRes = await fetch(getDataPath("/data/info.json"))
        const infoData = await infoRes.json()
        setProfile(infoData)
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
          <div className="grid grid-cols-[35%_65%] gap-12">
            {/* LEFT COLUMN - Profile */}
            <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-left-4 duration-500">
              <Hero profile={profile} />
              <div className="mt-1 w-full">
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Email</p>
                  <a href={`mailto:${profile?.email}`} className="text-sm text-accent hover:underline break-all">
                    {profile?.email}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - CV PDF Preview */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">Curriculum Vitae</h2>
                <a
                  href={getDataPath("/data/Dahye_CV.pdf")}
                  download="Dahye_CV.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>

              {/* PDF Preview */}
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <iframe
                  src={`${getDataPath("/data/Dahye_CV.pdf")}#toolbar=0`}
                  className="w-full h-[calc(100vh-200px)]"
                  title="CV Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
