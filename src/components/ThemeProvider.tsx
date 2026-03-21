'use client'

import * as React from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  enableSystem?: boolean
}

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'dark',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
  }, [])

  React.useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      const body = document.body
      if (theme === 'dark') {
        root.classList.add('dark')
        body?.classList.add('dark')
      } else {
        root.classList.remove('dark')
        body?.classList.remove('dark')
      }
    }
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
