'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig, heroContent } from '@/data/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient-light dark:bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sky-400 font-mono text-sm uppercase tracking-widest"
          >
            {siteConfig.tagline}
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white">
            Hi, I&apos;m{' '}
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
            {siteConfig.role}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {heroContent.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-500 max-w-xl mx-auto text-sm md:text-base"
          >
            {heroContent.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-600 transition-colors glow-border"
            >
              View Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-sky-500/20 text-sky-400 rounded-lg font-medium border border-sky-500/40 hover:bg-sky-500/30 transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <span className="text-xs mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-current rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
