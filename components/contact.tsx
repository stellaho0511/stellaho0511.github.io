interface Profile {
  name?: string
  email?: string
  phone?: string
  location?: string
  social?: {
    github?: string
    linkedin?: string
    scholar?: string
  }
}

export default function Contact({ profile }: { profile: Profile | null }) {
  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-foreground mb-12">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-muted-foreground mb-6">
            I'm always interested in collaborating on research and discussing new opportunities in academia.
          </p>

          <div className="space-y-4">
            {profile?.email && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary font-medium hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            )}
            {profile?.phone && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-primary font-medium hover:underline"
                >
                  {profile.phone}
                </a>
              </div>
            )}
            {profile?.location && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-primary font-medium">{profile.location}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Connect with Me</h3>
          <div className="space-y-3">
            {profile?.social?.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
              >
                GitHub
              </a>
            )}
            {profile?.social?.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
              >
                LinkedIn
              </a>
            )}
            {profile?.social?.scholar && (
              <a
                href={profile.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
              >
                Google Scholar
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
