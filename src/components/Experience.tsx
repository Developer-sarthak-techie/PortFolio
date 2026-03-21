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
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/50 via-sky-500/30 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-sky-500 border-2 border-white dark:border-dark-bg z-10 shadow-lg" />
              <div className="glass-card p-6 ml-4 md:ml-12">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-sky-500 font-medium">{job.company}</p>
                  </div>
                  <p className="text-slate-500 text-sm">
                    {job.period}
                  </p>
                </div>
                <p className="text-slate-500 text-sm mb-4">{job.location}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-slate-400 dark:text-slate-400 text-sm md:text-base"
                    >
                      <span className="text-sky-500 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
