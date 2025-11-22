interface SectionCardProps {
  title: string
  icon: string
  onClick: () => void
}

export default function SectionCard({ title, icon, onClick }: SectionCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-card hover:bg-accent/10 border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-300" />
    </button>
  )
}
