'use client'

import { siteConfig } from '@/data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-500 text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-500 text-sm transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
