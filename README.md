# SkyForce Drones - Advanced UAV Solutions

A modern, high-performance website for an autonomous drone company built with React, TypeScript, and Tailwind CSS. Features stunning animations, particle effects, and an interactive chatbot.

![SkyForce Drones](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.x-ff69b4)

## 🚀 Live Demo

[View Live Site](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Design System](#-design-system)
- [Components](#-components)
- [Animations](#-animations)
- [Performance](#-performance)
- [Contributing](#-contributing)

---

## ✨ Features

### Core Features
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Theme** - Sleek dark aesthetic with orange accent colors
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Interactive Elements** - Hover effects, particle backgrounds, and animated grids

### Sections
| Section | Description |
|---------|-------------|
| **Hero** | Full-screen hero with particle background, animated grid, and CTA buttons |
| **About** | Company overview with feature cards and scroll reveal animations |
| **Capabilities** | Detailed capability cards with icons and hover effects |
| **Highlights** | Key benefits with checkmark indicators and staggered animations |
| **Gallery** | Filterable portfolio grid with category tabs and hover overlays |
| **Contact** | Contact form with validation and company information |
| **ChatBot** | Floating AI assistant with quick actions and chat interface |

### Interactive Components
- **Particle Background** - Canvas-based particles with mouse interaction and repulsion effects
- **Animated Grid** - Responsive grid lines that animate on scroll
- **ChatBot** - Floating chat widget with predefined quick actions
- **Scroll Reveal** - Elements animate into view as user scrolls
- **Filter Gallery** - Category-based image filtering with smooth transitions

---

## 🛠 Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.x | Type Safety |
| **Vite** | 5.x | Build Tool & Dev Server |
| **Tailwind CSS** | 3.4.x | Utility-First Styling |

### UI & Animation Libraries
| Library | Purpose |
|---------|---------|
| **Framer Motion** | Animations & Transitions |
| **Lucide React** | Icon System |
| **shadcn/ui** | UI Component Library |
| **Radix UI** | Accessible Primitives |

### Additional Dependencies
| Package | Purpose |
|---------|---------|
| **class-variance-authority** | Component Variants |
| **clsx** | Conditional Classes |
| **tailwind-merge** | Class Merging |
| **tailwindcss-animate** | Animation Utilities |
| **react-router-dom** | Client-Side Routing |

---

## 📁 Project Structure

```
src/
├── assets/                 # Static images and media
│   ├── hero-drone.jpg
│   ├── gallery-*.jpg      # Gallery images
│   └── ...
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── AboutSection.tsx   # About company section
│   ├── CapabilitiesSection.tsx
│   ├── ChatBot.tsx        # Floating chat widget
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── GallerySection.tsx # Filterable portfolio
│   ├── HeroSection.tsx    # Hero with particles
│   ├── HighlightsSection.tsx
│   ├── Navbar.tsx         # Navigation bar
│   ├── NavLink.tsx
│   ├── ParticleBackground.tsx  # Canvas particles
│   └── ScrollReveal.tsx   # Animation wrappers
├── hooks/
│   ├── use-mobile.tsx     # Mobile detection
│   └── use-toast.ts       # Toast notifications
├── lib/
│   └── utils.ts           # Utility functions
├── pages/
│   ├── Index.tsx          # Main landing page
│   └── NotFound.tsx       # 404 page
├── App.tsx                # Root component
├── App.css                # Global styles
├── index.css              # Tailwind & CSS variables
└── main.tsx               # Entry point
```

---