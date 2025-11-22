'use client'

import Navigation from '@/components/navigation'

export default function Publications() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Publications</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Publication Title</h3>
                  <p className="text-secondary">Authors: You and Colleagues</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap">2024</span>
              </div>
              <p className="text-muted-foreground mb-3">Journal/Conference Name, Volume, Pages</p>
              <p className="text-sm text-muted-foreground mb-4">Brief description of the publication and its key contributions.</p>
              <div className="flex gap-3">
                <button className="text-primary hover:text-accent text-sm font-semibold transition-colors">Read Paper →</button>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border hover:border-secondary/50 hover:shadow-md transition-all">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Another Publication</h3>
                  <p className="text-secondary">Authors: You, Colleague 1, Colleague 2</p>
                </div>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full whitespace-nowrap">2023</span>
              </div>
              <p className="text-muted-foreground mb-3">Journal/Conference Name, Volume, Pages</p>
              <p className="text-sm text-muted-foreground mb-4">Brief description of the publication and its key contributions.</p>
              <div className="flex gap-3">
                <button className="text-secondary hover:text-accent text-sm font-semibold transition-colors">Read Paper →</button>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 hover:shadow-md transition-all">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Conference Presentation</h3>
                  <p className="text-secondary">Presenter: You</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full whitespace-nowrap">2023</span>
              </div>
              <p className="text-muted-foreground mb-3">Conference Name, Location</p>
              <p className="text-sm text-muted-foreground mb-4">Summary of your presentation topic and findings.</p>
              <div className="flex gap-3">
                <button className="text-accent hover:text-primary text-sm font-semibold transition-colors">View Details →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
