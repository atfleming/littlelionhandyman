import Reveal from './Reveal'

const contactLinks = [
  {
    label: 'Call',
    href: 'tel:+19014619573',
    detail: '(901) 461-9573',
  },
  {
    label: 'Text',
    href: 'sms:+19014619573',
    detail: 'Fastest for quick questions',
  },
  {
    label: 'Email',
    href: 'mailto:replace-with-real-email@example.com',
    detail: 'Swap in the real business email address',
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/littlelionbighelp',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/littlelionbighelp',
  },
]

function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-sage/15 bg-charcoal px-5 py-8 text-cream shadow-card sm:px-8 lg:px-10 lg:py-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-golden">Contact</p>
          <h2 id="contact-heading" className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Let me get you on my calendar.
          </h2>
          <p className="mt-4 text-lg leading-8 text-cream/80">
            Call, text, or send a note and I&apos;ll help you figure out the next step. Serving Memphis and surrounding neighborhoods.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {contactLinks.map((link, index) => (
            <Reveal key={link.label} delay={index * 0.05}>
              <a
                href={link.href}
                className="flex min-h-24 flex-col justify-center rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-4 hover:-translate-y-0.5 hover:bg-white/10"
              >
                <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-golden">
                  {link.label}
                </span>
                <span className="mt-2 text-xl font-bold text-cream">{link.detail}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-golden">Find Me Online</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 px-5 py-2 text-base font-bold text-cream hover:-translate-y-0.5 hover:border-golden hover:text-golden"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-md text-sm leading-7 text-cream/72">
            {/* Optional upgrade: replace this contact block with a Formspree-powered form once the endpoint is chosen. */}
            A simple contact form can drop in here later if you want lead capture beyond call, text, and email.
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection