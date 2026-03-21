'use client'

import { motion } from 'framer-motion'
import { certifications, awards } from '@/data/content'
import { SectionTitle } from './SectionTitle'

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications & Awards" />

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-sky-400 font-semibold mb-4 flex items-center gap-2">
              <span>🎓</span> Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="text-slate-400 text-sm flex gap-2"
                >
                  <span className="text-sky-500 flex-shrink-0">▹</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-sky-500/30"
          >
            <h3 className="text-sky-400 font-semibold mb-4 flex items-center gap-2">
              <span>🏆</span> Awards
            </h3>
            <ul className="space-y-2">
              {awards.map((award, i) => (
                <li
                  key={i}
                  className="text-slate-400 text-sm flex gap-2"
                >
                  <span className="text-amber-500 flex-shrink-0">★</span>
                  {award}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
