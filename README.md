# C.G. Groundcare — Website

A modern, sleek Next.js website for C.G. Groundcare built with Next.js 14, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Playfair Display (headings) + Outfit (body)
- **Hosting**: Vercel

## Sections

- **Hero** — Full-screen animated landing with call-to-action
- **Services** — All 6 services with icons and descriptions
- **Work** — Recent project gallery
- **About** — Cameron's story and company values
- **Contact** — Phone CTA with 07715 821193

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts — it auto-detects Next.js and deploys in ~60 seconds.

### Option 2: GitHub + Vercel Dashboard

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/cg-groundcare.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Click **Deploy** — Vercel handles everything automatically

Your site will be live at `https://cg-groundcare.vercel.app` (or your custom domain).

### Custom Domain

In Vercel dashboard → Project Settings → Domains → Add your domain (e.g. `cggroundcare.co.uk`)

## Customisation

### Adding Real Photos
Replace the placeholder gallery cards in `components/Work.tsx` with actual `<Image>` components:

```tsx
import Image from 'next/image'

// Add photos to /public/images/
<Image src="/images/fencing-job.jpg" alt="Fencing project" fill className="object-cover" />
```

### Update Contact Info
Edit `components/Contact.tsx` and `components/Navbar.tsx` — search for `07715821193`.

### Add Facebook Link
In `components/Contact.tsx` and `components/Footer.tsx`, replace `href="#"` with your Facebook page URL.

## Project Structure

```
cg-groundcare/
├── app/
│   ├── layout.tsx      # Root layout + fonts + metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles + animations
├── components/
│   ├── Navbar.tsx      # Sticky navigation
│   ├── Hero.tsx        # Landing hero section
│   ├── Services.tsx    # Services grid
│   ├── Work.tsx        # Project gallery
│   ├── About.tsx       # About Cameron
│   ├── Contact.tsx     # Contact + phone CTA
│   └── Footer.tsx      # Footer
├── public/             # Static assets (add photos here)
├── package.json
├── tailwind.config.js
├── next.config.js
└── vercel.json
```
