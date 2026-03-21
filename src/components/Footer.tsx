'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 theme-border border-t"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="theme-text-muted text-sm">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <motion.a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-text-muted hover:theme-accent text-sm transition-colors"
            whileHover={{ x: 2 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-text-muted hover:theme-accent text-sm transition-colors"
            whileHover={{ x: 2 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}
