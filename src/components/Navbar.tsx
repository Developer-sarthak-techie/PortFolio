'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/data/content'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai', label: 'AI & Innovation' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between glass-card px-6 py-3">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#hero"
            className="font-semibold text-lg theme-accent hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.03 }}
            >
              <Link
                href={link.href}
                className="theme-text-muted hover:theme-accent text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
          <motion.a
            href={siteConfig.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 theme-accent-bg theme-accent rounded-lg text-sm font-medium theme-border border hover:glow-border transition-all"
          >
            Resume
          </motion.a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 theme-text-muted hover:theme-accent transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 glass-card overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 theme-text-muted hover:theme-accent rounded-lg transition-colors hover:bg-[var(--theme-accent-muted)]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download
                className="px-4 py-3 theme-accent theme-accent-bg rounded-lg transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
