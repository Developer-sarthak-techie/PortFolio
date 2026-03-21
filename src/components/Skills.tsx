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
        <SectionTitle title="Technical Skills" subtitle="Technologies I work with" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className={`glass-card p-6 ${
                category.highlight ? 'border-sky-500/50 glow-border' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-sky-400 font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${
                      category.highlight
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'bg-slate-800/50 text-slate-300 border border-dark-border'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
