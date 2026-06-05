import { motion, useReducedMotion } from 'motion/react'

function HeroSection() {
  const reduceMotion = useReducedMotion()

  const heroTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: 'easeOut' }

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-5 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-copper/15 bg-[linear-gradient(160deg,rgba(247,241,230,0.96),rgba(255,255,255,0.76))] px-5 py-6 shadow-card sm:px-8 sm:py-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={heroTransition}
            className="relative z-10"
          >
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                src="/images/logo.PNG"
                alt="Little Lion · Big Help — Neighborhood Handyman"
                className="mb-6 w-56 mix-blend-multiply"
                width="500"
                height="280"
              />
            </picture>
            <p className="mb-3 text-base font-semibold text-copper">Hi, I'm Jeremy.</p>
            <h1
              id="hero-heading"
              className="max-w-[11ch] font-display text-[2.7rem] leading-[0.96] tracking-[-0.04em] text-charcoal sm:text-[3.5rem] lg:text-[4.5rem]"
            >
              Small but mighty help for the jobs around your house.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/80">
              Friendly, reliable help for the jobs around your house, right here in Memphis.
              Always happy to help.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-charcoal/72">
              Yard work, repairs, pressure washing, and the odds and ends that are easier with a trusted neighbor on your side.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+19014619573"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-copper px-6 py-3 text-base font-extrabold text-cream shadow-warm hover:-translate-y-0.5 hover:bg-charcoal"
              >
                Call or Text (901) 461-9573
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-sage/25 bg-white/70 px-6 py-3 text-base font-bold text-sage hover:-translate-y-0.5 hover:border-sage hover:bg-white"
              >
                See what I do
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-3 rounded-[1.5rem] border border-copper/10 bg-white/55 p-4 text-left sm:grid-cols-3 sm:gap-4 sm:p-5">
              <div>
                <dt className="text-xs font-extrabold uppercase tracking-[0.22em] text-sage">Based In</dt>
                <dd className="mt-1 text-base font-bold text-charcoal">Memphis, Tennessee</dd>
              </div>
              <div>
                <dt className="text-xs font-extrabold uppercase tracking-[0.22em] text-sage">Serving</dt>
                <dd className="mt-1 text-base font-bold text-charcoal">Cooper Young, East Memphis, midtown-ish</dd>
              </div>
              <div>
                <dt className="text-xs font-extrabold uppercase tracking-[0.22em] text-sage">Brand Promise</dt>
                <dd className="mt-1 text-base font-bold text-charcoal">Humble, warm, neighborly</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.65, delay: 0.12, ease: 'easeOut' }}
            className="mt-8 lg:mt-0"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-card min-h-[22rem]">
              <picture>
                <source srcSet="/images/portrait-with-sam.webp" type="image/webp" />
                <img
                  src="/images/portrait with sam.PNG"
                  alt="The handyman with Sam the golden retriever"
                  className="h-full w-full object-cover object-center"
                  style={{ minHeight: '22rem' }}
                  width="900"
                  height="1125"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection