"use client"

import { getDataPath } from "@/lib/utils"

interface Profile {
  name?: string
  title?: string
  subtitle?: string
  bio?: string
  avatar?: string
}

export default function Hero({ profile }: { profile: Profile | null }) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 h-full">
      <div className="space-y-2">
        <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-2">Welcome</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">{profile?.name || "Dahye Hong"}</h1>
        <p className="text-lg text-gray-600 font-medium">{profile?.title || "Doctoral Researcher"}</p>
      </div>

      <div className="relative w-48 h-48 mx-auto my-6 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={profile?.avatar ? getDataPath(profile.avatar) : "/placeholder.svg?height=400&width=400"}
            alt={profile?.name || "Profile"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
