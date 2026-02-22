SNS Academy Website – Next.js Migration

Project Overview

This project is the official SNS Academy website migrated from:
	•	Hono
	•	TypeScript
	•	Cloudflare Pages
	•	TailwindCSS
	•	Font Awesome

To:
	•	Next.js (Latest Stable – App Router)
	•	TypeScript
	•	TailwindCSS
	•	Font Awesome
	•	Deployment Target: Hostinger (Node.js Hosting / VPS)

This migration strictly preserves the original design.

No changes were made to:
	•	Layout
	•	UI structure
	•	Colors
	•	Tailwind classes
	•	Font sizes
	•	Spacing
	•	Images
	•	Icons
	•	Design system
	•	Responsive behavior

The final result is 100% visually identical to the original production website.

⸻

Migration Objective

The objective of this migration:
	•	Remove Cloudflare Pages completely
	•	Replace Hono routing with Next.js routing
	•	Convert API endpoints to Next.js API routes
	•	Prepare the project for Hostinger Node.js hosting
	•	Maintain full functionality without UI redesign

⸻

Tech Stack

Frontend:
	•	Next.js (App Router)
	•	TypeScript
	•	TailwindCSS
	•	Font Awesome

Backend:
	•	Next.js API Routes (app/api)

Deployment:
	•	Hostinger Node.js Hosting or VPS
	•	next build + next start

⸻

Project Folder Structure

sns-academy/

app/
layout.tsx
page.tsx
about/page.tsx
contact/page.tsx
api/contact/route.ts

components/
Header.tsx
Footer.tsx
Navbar.tsx

public/
images/
icons/
assets/

styles/
globals.css

.env.example
next.config.js
tailwind.config.ts
tsconfig.json
package.json
README.md

⸻

Routing Migration

Old:
Hono-based routing

New:
Next.js App Router

Examples:

app/page.tsx → /
app/about/page.tsx → /about
app/contact/page.tsx → /contact

Multipage routing works using Next.js native routing system.

⸻

API Migration

All Hono endpoints were converted to:

app/api//route.ts

Example:

export async function POST(request: Request) {
const body = await request.json();
return Response.json({ success: true });
}

⸻

Rendering Strategy

Static pages → SSG (default Next.js behavior)
Dynamic pages → SSR when required
API routes → Server-side execution

⸻

Environment Variables

Create .env.local based on:

.env.example

Example:

NEXT_PUBLIC_API_URL=
EMAIL_SERVICE_KEY=
DATABASE_URL=

⸻

Installation Guide
	1.	Clone repository

git clone 
cd sns-academy
	2.	Install dependencies

npm install
	3.	Configure environment variables

Create .env.local and add required variables.
	4.	Run development server

npm run dev

Open:
http://localhost:3000

⸻

Production Build

Build project:

npm run build

Start production server:

npm run start

⸻

package.json Scripts

“scripts”: {
“dev”: “next dev”,
“build”: “next build”,
“start”: “next start”,
“lint”: “next lint”
}

⸻

Deployment Guide – Hostinger

Option 1: Hostinger Node.js Hosting
	1.	Login to Hostinger hPanel
	2.	Create a Node.js Application
	3.	Set Node version (18+)
	4.	Upload project files (exclude node_modules)
	5.	Run:

npm install
npm run build
npm run start
	6.	Configure environment variables in Hostinger dashboard

⸻

Option 2: VPS Deployment

Install Node.js 18+

Upload project:

git clone 
cd sns-academy
npm install
npm run build
npm run start

Optional: Use PM2

npm install -g pm2
pm2 start npm –name “sns-academy” – start
pm2 save
pm2 startup

⸻

Static Export (If Required)

In next.config.js:

output: “export”

Then run:

npm run build

Upload the out/ folder to Hostinger.

⸻

Testing Checklist
	•	All routes load correctly
	•	Multipage routing works
	•	Responsive design unchanged
	•	Font Awesome icons render properly
	•	Tailwind styling identical
	•	Forms and APIs working
	•	SEO metadata preserved

⸻

SEO Support
	•	Metadata handled via layout.tsx
	•	Page-level metadata supported
	•	Proper title and description configuration

⸻

Architecture Summary
	•	Clean reusable components
	•	Fully TypeScript-based
	•	Production-ready
	•	Optimized for Hostinger deployment
	•	No UI redesign
	•	Pure architecture migration

⸻

License

This project belongs to SNS Academy.
All design assets and branding remain proprietary.

⸻

Important Notes:

Do NOT modify Tailwind classes unless technically required.
Do NOT redesign layout.
Maintain visual parity with original production site.
