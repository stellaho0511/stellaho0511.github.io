'use client'

interface SummarySectionProps {
  title: string
  icon: string
  onClick: () => void
}

export default function SummarySection({ title, icon, onClick }: SummarySectionProps) {
  return (
    <button
      onClick={onClick}
      className="group relative h-full bg-card hover:bg-card/80 border border-border rounded-lg p-6 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
        <span className="text-5xl">{icon}</span>
        <h3 className="text-xl font-semibold text-foreground text-center">{title}</h3>
        <span className="text-sm text-muted-foreground mt-2">Click to view details →</span>
      </div>
      
      <svg
        className="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100 0 Q 50 50 0 100"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </button>
  )
}
