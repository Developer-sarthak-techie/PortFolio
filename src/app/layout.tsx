import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Sarthak Gupta | Software Developer | Backend Engineer',
  description:
    'Results-driven .NET Developer with 3+ years building scalable APIs and enterprise applications. 45%+ performance boosts, 98% defect-free deployments. Backend Engineer | API Specialist.',
  keywords: [
    'Sarthak Gupta',
    'Software Developer',
    '.NET Developer',
    'Backend Engineer',
    'API Specialist',
    'C#',
    'ASP.NET',
    'Microservices',
  ],
  authors: [{ name: 'Sarthak Gupta', url: 'https://github.com/idealsarthak' }],
  openGraph: {
    title: 'Sarthak Gupta | Software Developer',
    description: 'Backend Engineer & API Specialist building scalable systems',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrains.variable} font-sans min-h-screen bg-slate-50 text-slate-800 dark:bg-dark-bg dark:text-slate-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
