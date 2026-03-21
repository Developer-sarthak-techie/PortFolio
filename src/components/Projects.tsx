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
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card p-6 h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:border-[var(--theme-accent)]/40 project-card-hover"
      >

        <div className="relative z-10">
          <div className="flex justify-between items-start gap-4 mb-4">
            <motion.h3
              className="text-xl font-semibold theme-text group-hover:theme-accent transition-colors duration-300"
              whileHover={{ x: 4 }}
            >
              {project.title}
            </motion.h3>
            {project.role && (
              <motion.span
                initial={{ scale: 0.9, opacity: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="px-3 py-1 theme-accent-bg theme-accent text-xs rounded-full font-medium flex-shrink-0"
              >
                {project.role}
              </motion.span>
            )}
          </div>
          <p className="theme-text-muted text-sm mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, j) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + j * 0.05 }}
                className="px-2 py-0.5 theme-border border rounded text-xs theme-text-muted bg-[var(--theme-bg)]/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <ul className="space-y-2">
            {project.achievements.slice(0, 3).map((achievement, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + j * 0.05 }}
                className="text-xs theme-text-muted flex gap-2"
              >
                <span className="theme-accent">✓</span>
                {achievement}
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-4 mt-4 pt-4 theme-border border-t">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-accent text-sm hover:opacity-80 transition-opacity"
                whileHover={{ x: 2 }}
              >
                GitHub →
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-accent text-sm hover:opacity-80 transition-opacity"
                whileHover={{ x: 2 }}
              >
                Live Demo →
              </motion.a>
            )}
            {!project.links.github && !project.links.demo && (
              <span className="theme-text-muted text-sm opacity-75">
                Proprietary / Confidential
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
