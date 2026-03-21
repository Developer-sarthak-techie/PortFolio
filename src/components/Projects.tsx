'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import { SectionTitle } from './SectionTitle'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Projects" subtitle="Impact-driven solutions" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full flex flex-col hover:border-sky-500/30 transition-colors duration-300">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.role && (
                    <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded font-medium flex-shrink-0">
                      {project.role}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-dark-bg/50 text-slate-500 text-xs rounded border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.achievements.slice(0, 3).map((achievement, j) => (
                    <li
                      key={j}
                      className="text-slate-500 text-xs flex gap-2"
                    >
                      <span className="text-sky-500">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4 pt-4 border-t border-dark-border">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 text-sm hover:text-sky-300 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 text-sm hover:text-sky-300 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                  {!project.links.github && !project.links.demo && (
                    <span className="text-slate-600 text-sm">
                      Proprietary / Confidential
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
