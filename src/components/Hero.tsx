'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Avatar } from './Avatar'
import { siteConfig, heroContent } from '@/data/content'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      style={{ background: 'var(--theme-hero-gradient)' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'var(--theme-accent)',
            opacity: 0.15,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'var(--theme-accent)',
            opacity: 0.12,
          }}
          animate={{
            x: [0, -25, 30, 0],
            y: [0, 30, -25, 0],
            scale: [1, 1.15, 1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'var(--theme-accent)',
            opacity: 0.08,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-2 md:order-1 flex-shrink-0"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="absolute -inset-1 rounded-full opacity-75"
              style={{
                background: `linear-gradient(135deg, var(--theme-accent), transparent, var(--theme-accent))`,
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden avatar-ring theme-bg p-1">
              <Avatar
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                size={208}
                className="w-full h-full rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-1 md:order-2 text-center md:text-left flex-1 space-y-4"
        >
          <motion.p
            variants={item}
            className="theme-accent font-mono text-sm uppercase tracking-[0.2em] font-medium"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold theme-text"
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl md:text-2xl theme-text-muted font-medium"
          >
            {siteConfig.role}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg theme-text-muted max-w-2xl leading-relaxed"
          >
            {heroContent.headline}
          </motion.p>

          <motion.p
            variants={item}
            className="text-sm theme-text-muted max-w-xl opacity-90"
          >
            {heroContent.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="inline-flex px-6 py-3 rounded-xl font-medium transition-all duration-300 shimmer theme-accent-bg theme-accent border theme-border hover:glow-border"
              >
                View Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="inline-flex px-6 py-3 rounded-xl font-medium theme-accent theme-accent-bg border theme-border hover:glow-border transition-all duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center theme-text-muted hover:theme-accent transition-colors group"
        >
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2 group-hover:border-[var(--theme-accent)]"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1.5 h-2 rounded-full bg-current"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
