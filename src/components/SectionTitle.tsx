'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-lg">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto mt-4 rounded-full" />
    </motion.div>
  )
}
