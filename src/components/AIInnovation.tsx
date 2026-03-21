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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-cyan-500/5 rounded-2xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-6">
            {aiInnovation.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border-sky-500/30 hover:border-sky-500/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/30 transition-colors">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-sky-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
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
