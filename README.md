# Sarthak Gupta - Portfolio

A high-end, production-ready portfolio website for a software developer. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Outfit, JetBrains Mono

## Features

- **3 Premium Themes**: Ocean (dark blue), Light, Crimson (red & black) — with persistence
- Smooth scrolling & animated section reveals
- Fully responsive (mobile + desktop)
- Glassmorphism & subtle glow effects
- SEO meta tags
- Download Resume button

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd PortFolio

# Install dependencies
npm install

# Copy your resume PDF to public folder (optional)
# Place your resume as public/resume.pdf
# Optionally add public/avatar.jpg for a custom profile photo (otherwise uses generated avatar)
cp /path/to/your/resume.pdf public/resume.pdf

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel (FREE)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel auto-detects Next.js—click **Deploy**
6. Your site will be live in ~1 minute

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts - link to your project or create new
# For production: vercel --prod
```

### Post-Deploy

- Add your resume: Place `resume.pdf` in `public/` folder before deploying
- Update links: Edit `src/data/content.ts` to add your GitHub/LinkedIn URLs
- Custom domain: Add in Vercel Project Settings → Domains

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AIInnovation.tsx
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── SectionTitle.tsx
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
└── data/
    └── content.ts        # All portfolio content - edit here
```

## Customization

Edit `src/data/content.ts` to update:
- Contact info (email, phone, LinkedIn, GitHub)
- Experience, projects, certifications
- Skills and about section

## License

MIT
