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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -2 }}
          className="glass-card p-8 md:p-10 space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="theme-text-muted text-lg leading-relaxed"
          >
            {aboutContent.summary}
          </motion.p>

          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="theme-accent font-semibold text-sm uppercase tracking-wider"
            >
              Key Strengths
            </motion.h3>
            <ul className="space-y-3">
              {aboutContent.strengths.map((strength, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-3 theme-text-muted"
                >
                  <motion.span
                    className="theme-accent mt-1.5 flex-shrink-0"
                    whileHover={{ x: 4 }}
                  >
                    ▹
                  </motion.span>
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
