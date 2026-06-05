import { motion, useReducedMotion } from 'motion/react'
import Reveal from './Reveal'
import {
  DogWalkingIcon,
  GardenWorkIcon,
  GutterCleaningIcon,
  LightHaulingIcon,
  OddsEndsIcon,
  PressureWashingIcon,
  SmallRepairsIcon,
  YardCleanupIcon,
} from './ServiceIcons'

const services = [
  { title: 'Yard cleanup', Icon: YardCleanupIcon },
  { title: 'Garden work', Icon: GardenWorkIcon },
  { title: 'Pressure washing', Icon: PressureWashingIcon },
  { title: 'Gutter cleaning', Icon: GutterCleaningIcon },
  { title: 'Light hauling', Icon: LightHaulingIcon },
  { title: 'Small repairs', Icon: SmallRepairsIcon },
  { title: 'Dog walking', Icon: DogWalkingIcon },
  { title: 'Odds & ends', Icon: OddsEndsIcon },
]

function ServicesSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="services"
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-sage">Services</p>
          <h2 id="services-heading" className="mt-3 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            If it&apos;s on your list, it&apos;s probably on mine.
          </h2>
          <p className="mt-4 text-lg leading-8 text-charcoal/78">
            A simple, neighborly helping hand for the home and yard jobs that need doing.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {services.map(({ title, Icon }, index) => (
            <motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="flex min-h-32 items-start gap-4 rounded-[1.75rem] border border-copper/12 bg-white/70 p-5 shadow-card"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sage text-cream">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-charcoal">{title}</h3>
                <p className="mt-2 text-base leading-7 text-charcoal/72">
                  Practical help done with care, clear communication, and a local touch.
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection