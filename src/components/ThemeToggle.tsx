'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const themes = [
  { id: 'dark' as const, label: 'Ocean', icon: '🌊' },
  { id: 'light' as const, label: 'Light', icon: '☀️' },
  { id: 'crimson' as const, label: 'Crimson', icon: '🔴' },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [showMenu, setShowMenu] = useState(false)

  const cycleTheme = () => {
    const idx = themes.findIndex((t) => t.id === theme)
    const next = themes[(idx + 1) % themes.length]
    setTheme(next.id)
  }

  const currentTheme = themes.find((t) => t.id === theme)!

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowMenu(!showMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2.5 rounded-xl theme-btn transition-all duration-300 flex items-center gap-1.5"
        aria-label="Change theme"
      >
        <span className="text-lg">{currentTheme.icon}</span>
        <svg
          className="w-4 h-4 theme-text opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute right-0 top-full mt-2 z-50 py-2 px-1 rounded-xl theme-card border theme-border shadow-xl min-w-[140px]"
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id)
                    setShowMenu(false)
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    theme === t.id
                      ? 'theme-accent-bg theme-accent-text'
                      : 'theme-text hover:theme-hover-bg'
                  }`}
                >
                  <span>{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
