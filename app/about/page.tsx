'use client'

import Navigation from '@/components/navigation'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Ph.D. Candidate</h3>
                  <p className="text-secondary text-lg">University Name | Field of Study</p>
                  <p className="text-muted-foreground mt-2">Expected Graduation: 20XX</p>
                </div>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Master's Degree</h3>
                  <p className="text-secondary text-lg">University Name | Major</p>
                  <p className="text-muted-foreground mt-2">Graduated: 20XX</p>
                </div>
                <div className="border-l-4 border-accent pl-6 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Bachelor's Degree</h3>
                  <p className="text-secondary text-lg">University Name | Major</p>
                  <p className="text-muted-foreground mt-2">Graduated: 20XX</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Experience</h2>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground">Research Assistant</h3>
                  <p className="text-secondary">Institution Name | 20XX - Present</p>
                  <p className="text-muted-foreground mt-3">Your responsibilities and achievements here.</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold text-foreground">Teaching Assistant</h3>
                  <p className="text-secondary">University Name | 20XX - 20XX</p>
                  <p className="text-muted-foreground mt-3">Your responsibilities and achievements here.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
