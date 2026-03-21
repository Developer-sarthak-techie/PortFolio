'use client'

import { motion } from 'framer-motion'
import { aboutContent } from '@/data/content'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 space-y-6"
        >
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            {aboutContent.summary}
          </p>

          <div className="space-y-4">
            <h3 className="text-sky-400 font-semibold text-sm uppercase tracking-wider">
              Key Strengths
            </h3>
            <ul className="space-y-3">
              {aboutContent.strengths.map((strength, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 text-slate-600 dark:text-slate-400"
                >
                  <span className="text-sky-500 mt-1.5 flex-shrink-0">▹</span>
                  <span>{strength}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
