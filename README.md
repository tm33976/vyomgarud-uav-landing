# SkyForce Drones - Advanced UAV Solutions

A modern, high-performance website for an autonomous drone company built with React, TypeScript, and Tailwind CSS. Features stunning animations, particle effects, and an interactive chatbot.


## 🚀 Live Demo

[View Live Site](https://landing-page-lime-kappa-52.vercel.app/)

---

## Demo

![Demo Image](../exact-screenshot/src/assets/Demo-image.png)

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
## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone git remote add origin https://github.com/tm33976/vyomgarud-uav-landing.git

# Navigate to project directory
cd vyomgarud-uav-landing

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |




---

## 🎨 Design System

### Color Palette

The design uses HSL color values defined in `index.css`:

```css
:root {
  /* Background Colors */
  --background: 220 20% 6%;        /* Deep dark blue */
  --foreground: 0 0% 98%;          /* Near white */
  
  /* Primary - Orange Accent */
  --primary: 29 100% 50%;          /* Vibrant orange */
  --primary-foreground: 0 0% 100%; /* White */
  
  /* Secondary */
  --secondary: 220 15% 15%;        /* Dark gray-blue */
  --secondary-foreground: 0 0% 98%;
  
  /* Accent */
  --accent: 29 100% 50%;           /* Orange */
  --accent-foreground: 0 0% 100%;
  
  /* Muted */
  --muted: 220 15% 15%;
  --muted-foreground: 220 10% 60%;
  
  /* Border & Ring */
  --border: 220 15% 20%;
  --ring: 29 100% 50%;
}
```

### Typography

- **Font Family**: Montserrat (Google Fonts)
- **Weights Used**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Spacing System

Uses Tailwind's default spacing scale with custom container settings:

```typescript
container: {
  center: true,
  padding: "2rem",
  screens: {
    "2xl": "1400px",
  },
}
```

### Button Variants

Custom button variants defined in `button.tsx`:

| Variant | Use Case |
|---------|----------|
| `default` | Standard actions |
| `hero` | Primary CTA buttons |
| `heroOutline` | Secondary CTA buttons |
| `outline` | Bordered buttons |
| `ghost` | Minimal buttons |

---

## 🧩 Components

### ParticleBackground

Canvas-based particle system with:
- 80 animated particles
- Mouse interaction (repulsion effect)
- Animated grid lines
- Responsive canvas sizing

```tsx
<ParticleBackground />
```

### ScrollReveal

Wrapper component for scroll-triggered animations:

```tsx
<ScrollReveal direction="up" delay={0.2}>
  <YourContent />
</ScrollReveal>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right'
- `delay`: number (seconds)
- `duration`: number (seconds)
- `once`: boolean (animate once or every scroll)

### ChatBot

Floating chat widget with:
- Quick action buttons
- Chat message interface
- Animated open/close states

```tsx
<ChatBot />
```

### GallerySection

Filterable image gallery with:
- Category tabs (All, Reconnaissance, Urban, Maritime, etc.)
- Hover overlay effects
- Responsive grid layout

---

## 🎬 Animations

### Framer Motion Animations

| Animation | Component | Trigger |
|-----------|-----------|---------|
| Fade In Up | ScrollReveal | Scroll into view |
| Stagger Children | StaggerContainer | Scroll into view |
| Scale on Hover | Gallery items | Mouse hover |
| Particle Movement | ParticleBackground | Continuous |
| Chat Slide | ChatBot | Click toggle |

### CSS Keyframes

Defined in `tailwind.config.ts`:

```typescript
keyframes: {
  'float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  'pulse-glow': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
  'scan-line': {
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(100%)' },
  },
  'fade-in-up': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
}
```

---

## ⚡ Performance

### Optimization Techniques

1. **Code Splitting** - Vite automatically splits code by route
2. **Image Optimization** - Images imported as ES modules
3. **Canvas Optimization** - RequestAnimationFrame for smooth 60fps particles
4. **Lazy Loading** - Components animate only when in viewport
5. **CSS Purging** - Tailwind removes unused styles in production

### Lighthouse Scores (Target)

| Metric | Score |
|--------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 100 |
| SEO | 100 |

---

## 📝 Design Notes

### Visual Direction
- **Aesthetic**: Military-tech meets premium luxury
- **Theme**: Dark mode with high contrast orange accents
- **Mood**: Professional, cutting-edge, trustworthy
- **Inspiration**: Aviation dashboards, defense tech, premium automotive

### Key Design Decisions

1. **Dark Background (#0d1117)** - Conveys sophistication and makes orange accents pop. Creates immersive feel reminiscent of cockpit displays.

2. **Orange Accent (hsl 29 100% 50%)** - High-visibility color used in aviation/defense. Creates urgency and draws attention to CTAs.

3. **Particle Effects** - Adds depth and technological feel without being distracting. Particles represent data points/connectivity.

4. **Animated Grid Lines** - Evokes radar/scanning technology. Provides subtle movement without overwhelming content.

5. **Asymmetric Layouts** - Creates visual interest while maintaining readability. Hero section uses left-aligned text with right-side visuals.

6. **Generous Whitespace** - Prevents overwhelm, guides eye flow. Minimum 4rem between major sections.

7. **Consistent Border Radius** - Rounded corners (0.5rem) throughout for cohesion and modern feel.

8. **Glassmorphism Elements** - Semi-transparent backgrounds with blur create depth layers.

### Color Psychology

| Color | Usage | Psychology |
|-------|-------|------------|
| Deep Black/Blue | Background | Authority, sophistication, focus |
| Vibrant Orange | CTAs, Accents | Energy, innovation, urgency |
| Pure White | Text, Icons | Clarity, precision, trust |
| Muted Gray | Secondary text | Balance, professionalism |

### Typography Hierarchy

```
H1 (Hero): 4rem / Bold / Tracking tight
H2 (Section): 2.5rem / Bold / Normal
H3 (Cards): 1.25rem / Semibold / Normal
Body: 1rem / Regular / Relaxed line-height
Caption: 0.875rem / Medium / Muted color
```

### Spacing Scale

```
Section padding: 6rem (96px) vertical
Card padding: 1.5rem (24px)
Element gap: 1rem - 2rem
Button padding: 0.75rem 2rem
```

### Shadow System

```css
/* Card shadows */
--shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

/* Glow effects */
--shadow-glow: 0 0 30px hsl(29 100% 50% / 0.3);

/* Elevated elements */
--shadow-elevated: 0 20px 40px rgba(0, 0, 0, 0.4);
```

### Interaction States

| State | Effect |
|-------|--------|
| Hover | Scale 1.02-1.05, glow shadow, color shift |
| Active | Scale 0.98, darker shade |
| Focus | Ring outline with primary color |
| Disabled | 50% opacity, no pointer events |

### Motion Guidelines

- **Duration**: 200-500ms for micro-interactions, 500-800ms for reveals
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for natural feel
- **Stagger**: 50-100ms delay between sequential items
- **Direction**: Elements enter from bottom/sides toward center

### Animation Philosophy
- **Purposeful** - Animations guide attention, not distract
- **Subtle** - Micro-interactions enhance without overwhelming
- **Performant** - GPU-accelerated transforms only
- **Accessible** - Respects `prefers-reduced-motion`

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1400px | Large screens |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Tushar Mishra**







---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) -  UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon system
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---
