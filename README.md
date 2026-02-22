# 🎓 SNS Academy – Next.js Migration 🚀

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

> **India's First GenAI-Powered Design Thinking CBSE School (Patented).**  
> A premium educational institution website migrated to a modern, high-performance stack.

---

## 🌟 Project Overview

This project is the official website for **SNS Academy**, meticulously migrated from a legacy Hono/Cloudflare stack to the latest **Next.js App Router** architecture. 

The migration ensures:
- ⚡ **Maximum Performance**: Optimized Core Web Vitals via Next.js.
- 🎨 **Visual Parity**: 100% preservation of the original premium design.
- 🛠️ **Maintainability**: Fully typed with TypeScript and modularized components.
- 📦 **Deployment Ready**: Optimized for Hostinger Node.js and VPS environments.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS |
| **Animations** | Custom CSS Animations & Transitions |
| **Icons** | [Font Awesome 6](https://fontawesome.com/) |
| **Deployment** | [Hostinger](https://www.hostinger.com/) (Node.js/VPS) |

---

## ✨ Core Pillars & Features

### 🧠 Design Thinking & Innovation
- **GenAI-Powered Framework**: Patented educational approach using Generative AI.
- **SNS Innovation Hub (iHub)**: Access to cutting-edge labs (AI, IoT, Robotics, AR/VR).
- **Stanford Pathway**: Guidance from Stanford Alumni for elite university preparation.

### 🏫 Academic Excellence
- **Holistic Development**: Nursery to Grade XII CBSE curriculum.
- **3P Culture**: Focused on Purpose, Process, and People.
- **Personalized Care**: Ultra-low 10:1 student-teacher ratio.

### 🏟️ World-Class Infrastructure
- **SPINE Center**: 5-level activity center with swimming pool, studios, and theater.
- **Modern Campus**: Safe and technology-integrated learning environment.

---

## 📁 Project Structure

```bash
sns-academy/
├── app/                  # Next.js App Router directory
│   ├── academics/        # Academic program pages
│   ├── admissions/       # Admissions & application flow
│   ├── api/              # Server-side API routes
│   ├── components/       # Shared UI components
│   ├── layout.tsx        # Global layout & SEO metadata
│   └── globals.css       # Core design system & animations
├── public/               # Static assets (images, icons)
├── components/           # Reusable functional components
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🔄 Migration Highlights

This project recently underwent a significant architecture shift:
- **Hono to Next.js**: Replaced Hono routing with Next.js App Router for better SEO and React integration.
- **Serverless to Node.js**: Shifted from Cloudflare Pages to a Node.js-friendly architecture suitable for Hostinger.
- **API Conversion**: Converted standard Hono endpoints to Next.js API Routes (`/api/*`).
- **Architecture**: Decoupled frontend components from back-end logic for improved modularity.

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Balasurya555/SNS-School-main.git
cd SNS-School-main
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other necessary keys here
```

### 3. Development
```bash
npm run dev
```
Explore the site at `http://localhost:3000`.

---

## 🏗️ Production & Deployment

### Build the Project
```bash
npm run build
```

### Hostinger Deployment (Recommended)
1. **Prepare**: Run `npm run build` locally or on the server.
2. **Setup**: In Hostinger hPanel, create a Node.js Application.
3. **Configure**: Set the entry point to `.next/standalone/server.js` or use `next start`.
4. **PM2**: (For VPS) Use PM2 for process management:
   ```bash
   pm2 start npm --name "sns-academy" -- start
   ```

---

## 📜 Metadata & SEO
SEO is baked into the architecture using Next.js Metadata API.
- **Dynamic Titles**: Page-specific titles for better ranking.
- **Semantic HTML**: Proper heading hierarchy and accessibility.
- **Performance**: Optimized images and code-splitting.

---

## ⚖️ License & Proprietary Information
© **SNS Academy**. All rights reserved.  
Branding, design assets, and proprietary "GenAI-Powered Design Thinking" frameworks are property of SNS Academy.

---
<p align="center">
  Made with ❤️ for SNS Academy
</p>
