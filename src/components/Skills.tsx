'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/content'
import { SectionTitle } from './SectionTitle'

const skillCategories = [
  {
    title: 'Backend & APIs',
    items: skills.backend,
    icon: '⚙️',
  },
  {
    title: 'Databases',
    items: skills.databases,
    icon: '🗄️',
  },
  {
    title: 'Tools & Platforms',
    items: skills.tools,
    icon: '🛠️',
  },
  {
    title: 'AI / Automation',
    items: skills.ai,
    icon: '🤖',
    highlight: true,
  },
  {
    title: 'Methodologies',
    items: skills.methodologies,
    icon: '📋',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                delay: catIndex * 0.08,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass-card p-6 transition-all duration-300 ${
                category.highlight ? 'glow-border theme-border border-[var(--theme-accent)]/40' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08 + 0.1 }}
                className="flex items-center gap-2 mb-4"
              >
                <motion.span
                  className="text-2xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="theme-accent font-semibold">{category.title}</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.05 + i * 0.03,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.15 },
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      category.highlight
                        ? 'theme-accent-bg theme-accent border border-[var(--theme-accent)]/30'
                        : 'bg-[var(--theme-bg)]/80 theme-text-muted theme-border border'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
