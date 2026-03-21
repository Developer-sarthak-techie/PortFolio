'use client'

import { motion } from 'framer-motion'
import { aiInnovation } from '@/data/content'
import { SectionTitle } from './SectionTitle'

export function AIInnovation() {
  return (
    <section id="ai" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="AI & Innovation"
          subtitle={aiInnovation.subheadline}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-50"
            style={{
              background: `radial-gradient(ellipse at top right, var(--theme-accent-muted), transparent 60%)`,
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: 'var(--theme-accent)' }}
          />

          <div className="relative grid md:grid-cols-2 gap-6">
            {aiInnovation.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="glass-card p-6 border-[var(--theme-accent)]/30 hover:border-[var(--theme-accent)]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--theme-accent-muted)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl">🤖</span>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold theme-accent mb-2 group-hover:opacity-90">
                      {item.title}
                    </h3>
                    <p className="theme-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
