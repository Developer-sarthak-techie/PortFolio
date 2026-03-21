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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between glass-card px-6 py-3">
        <Link
          href="#hero"
          className="font-semibold text-lg text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
        >
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            download
            className="px-4 py-2 bg-sky-500/20 text-sky-400 rounded-lg text-sm font-medium hover:bg-sky-500/30 transition-colors border border-sky-500/30"
          >
            Resume
          </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 glass-card overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download
                className="px-4 py-3 text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors"
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
