'use client'

import Navigation from '@/components/navigation'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      <Navigation />
      
      <main className="pt-20 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Get in Touch</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing research opportunities, collaborations, and academic pursuits. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-semibold">your.email@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-semibold">linkedin.com/in/dahyehong</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <Github className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-semibold">github.com/dahyehong</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
