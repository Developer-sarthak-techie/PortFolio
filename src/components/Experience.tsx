'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/content'
import { SectionTitle } from './SectionTitle'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Experience" subtitle="Professional journey" />

        <div className="relative pl-10">
          <div
            className="absolute left-[7px] top-0 bottom-0 w-0.5 rounded-full"
            style={{
              background: `linear-gradient(to bottom, var(--theme-accent), transparent)`,
              opacity: 0.5,
            }}
          />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative mb-12 last:mb-0"
            >
              <motion.div
                className="absolute -left-10 top-2 w-4 h-4 rounded-full z-10 border-2"
                style={{
                  background: 'var(--theme-accent)',
                  borderColor: 'var(--theme-bg)',
                  boxShadow: '0 0 15px var(--theme-accent-muted)',
                }}
                whileHover={{ scale: 1.3 }}
              />
              <motion.div
                className="glass-card p-6 ml-4"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold theme-text">{job.role}</h3>
                    <p className="theme-accent font-medium">{job.company}</p>
                  </div>
                  <p className="theme-text-muted text-sm">{job.period}</p>
                </div>
                <p className="theme-text-muted text-sm mb-4">{job.location}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.05 }}
                      className="flex gap-2 theme-text-muted text-sm md:text-base"
                    >
                      <span className="theme-accent flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
