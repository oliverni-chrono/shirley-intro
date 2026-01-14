# Technical Implementation Plan: Hinge vs Tinder Market Research Presentation

**Feature**: Hinge vs Tinder Comparison Dashboard  
**Branch**: `001-hinge-tinder-comparison`  
**Created**: 2026-01-14  
**Status**: Ready for Implementation

---

## 1. Technical Architecture Overview

### 1.1 Technology Stack

#### **Frontend Framework**
- **React 19.2.3** - Latest version with improved performance
- **TypeScript 5.9.3** - Type safety and developer experience
- **Vite 7.2.4** - Ultra-fast build tool and dev server

#### **Styling & UI**
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Custom CSS Variables** - Theme system for dark mode
- **CSS Grid & Flexbox** - Bento grid layout system

#### **Icons & Assets**
- **Lucide React 0.562.0** - Open-source icon library (already installed)
- **Unsplash API** (optional) - Royalty-free images
- **WebP Format** - Optimized image delivery

#### **Animation & Interaction**
- **Framer Motion** - Production-ready animation library
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Transitions** - Performant hover effects

#### **Performance & Optimization**
- **React.lazy()** - Code splitting for components
- **Vite's built-in optimization** - Tree shaking, minification
- **Web Vitals** - Performance monitoring
- **Lighthouse CI** - Automated performance testing

---

### 1.2 Project Structure

```
training/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BentoGrid.tsx          # Bento grid container
│   │   │   ├── BentoCard.tsx          # Individual grid cards
│   │   │   ├── BottomNavigation.tsx   # Fixed bottom nav
│   │   │   └── Section.tsx            # Full-page sections
│   │   ├── data/
│   │   │   ├── ComparisonTable.tsx    # Side-by-side comparison
│   │   │   ├── MetricCard.tsx         # Individual metric display
│   │   │   ├── StatBadge.tsx          # Highlighted statistics
│   │   │   └── DataVisualization.tsx  # Charts (optional v2)
│   │   ├── ui/
│   │   │   ├── AnimatedSection.tsx    # Scroll animation wrapper
│   │   │   ├── GradientText.tsx       # Gradient headings
│   │   │   └── Pill.tsx               # Pill-shaped badges
│   │   └── sections/
│   │       ├── HeroSection.tsx        # Title & intro
│   │       ├── MarketOverview.tsx     # Market landscape
│   │       ├── TinderAnalysis.tsx     # Tinder deep dive
│   │       ├── HingeAnalysis.tsx      # Hinge deep dive
│   │       ├── ComparisonSection.tsx  # Head-to-head
│   │       └── InsightsSection.tsx    # Key takeaways
│   ├── data/
│   │   ├── marketData.ts              # All market research data
│   │   ├── comparisonMetrics.ts       # Comparison matrix
│   │   └── sources.ts                 # Data source citations
│   ├── hooks/
│   │   ├── useScrollAnimation.ts      # Intersection observer hook
│   │   ├── useNavigationState.ts      # Track active section
│   │   └── usePerformance.ts          # Web vitals tracking
│   ├── styles/
│   │   ├── theme.ts                   # Dark theme configuration
│   │   └── animations.ts              # Animation variants
│   ├── utils/
│   │   ├── formatters.ts              # Number/currency formatting
│   │   └── constants.ts               # App constants
│   ├── App.tsx                        # Main app component
│   ├── index.css                      # Global styles + Tailwind
│   └── main.tsx                       # Entry point
├── public/
│   └── images/                        # Optimized images
├── specs/
│   └── 001-hinge-tinder-comparison/
│       ├── spec.md                    # ✅ Complete
│       ├── plan.md                    # ← You are here
│       └── tasks.md                   # Next step
└── package.json
```

---

## 2. Component Architecture

### 2.1 Layout Components

#### **BentoGrid.tsx**
```typescript
interface BentoGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}
```
- Responsive CSS Grid layout
- Configurable columns (2-4)
- Auto-fit/auto-fill for flexibility
- Breakpoints: mobile (1 col), tablet (2 col), desktop (3-4 col)

#### **BentoCard.tsx**
```typescript
interface BentoCardProps {
  title?: string;
  children: React.ReactNode;
  span?: 1 | 2 | 3;
  variant?: 'default' | 'highlight' | 'large';
  animated?: boolean;
}
```
- Rounded corners (border-radius: 16px)
- Dark background with subtle border
- Hover effect: subtle scale + glow
- Grid span support (1-3 columns)

#### **BottomNavigation.tsx**
```typescript
interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface BottomNavigationProps {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}
```
- Fixed position at bottom
- Smooth scroll to sections
- Active indicator (underline or pill)
- Touch-optimized (48px minimum height)
- Glass morphism effect (backdrop-blur)

---

### 2.2 Data Display Components

#### **ComparisonTable.tsx**
```typescript
interface ComparisonRow {
  metric: string;
  hingeValue: string | number;
  tinderValue: string | number;
  winner?: 'Hinge' | 'Tinder';
  insight?: string;
}
```
- Three-column layout (Metric | Hinge | Tinder)
- Visual indicators for "winner" (✓ icon, highlight color)
- Responsive: stacks on mobile
- Alternating row backgrounds for readability

#### **MetricCard.tsx**
```typescript
interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number; // percentage
  trend?: 'up' | 'down' | 'neutral';
  platform: 'Hinge' | 'Tinder';
}
```
- Large number display (48-64px)
- Trend indicator (arrow + color)
- Label in CAPS for emphasis
- Platform-specific accent color

#### **StatBadge.tsx**
```typescript
interface StatBadgeProps {
  value: string | number;
  label: string;
  variant?: 'success' | 'warning' | 'info';
}
```
- Pill-shaped badge
- Icon + value + label
- Color-coded by variant
- Inline or standalone display

---

### 2.3 Section Components

Each section is a full-viewport height container with:
- Smooth scroll snap (optional)
- Fade-in animation on scroll
- Consistent padding and spacing
- Bento grid content layout

#### **HeroSection** 
- Large headline: "HINGE VS TINDER"
- Subtitle: "MARKET RESEARCH COMPARISON 2024-2026"
- Animated gradient background
- Scroll indicator

#### **MarketOverview**
- Dating app market size ($10.87B)
- Growth rate (7.8% CAGR)
- Top 4 players with market share
- 3-4 bento cards with key stats

#### **TinderAnalysis**
- Revenue, users, DAU trends
- Demographic breakdown
- Strengths & weaknesses
- 6-8 bento cards with mixed sizes

#### **HingeAnalysis**
- Revenue, growth, paid subscribers
- Demographic breakdown
- Positioning strategy
- 6-8 bento cards with mixed sizes

#### **ComparisonSection**
- Side-by-side comparison table
- 10-12 key metrics
- Visual indicators for winners
- Large bento card (spans 2-3 columns)

#### **InsightsSection**
- 5 key market insights
- Trend analysis cards
- Call-to-action or conclusion
- Data source citations

---

## 3. Data Layer

### 3.1 Market Data Structure

**File**: `src/data/marketData.ts`

```typescript
export const marketData = {
  overview: {
    marketSize: 10870000000, // $10.87B
    growthRate: 7.8,
    projectedSize2029: 15900000000,
    totalUsers: 400000000,
    lastUpdated: '2024-Q4',
  },
  
  tinder: {
    revenue: 1790000000, // $1.79B
    marketShare: 28.9,
    userCount: 78600000,
    usersUSA: 7860000,
    dauGrowth: -10,
    brandAwareness: 86,
    demographics: {
      ageRange: '18-34',
      malePercentage: 76,
      femalePercentage: 24,
    },
    pricing: {
      free: { swipesPerDay: 'Limited' },
      plus: { price: 10, features: ['Unlimited swipes', 'Rewind', 'Passport'] },
      gold: { price: 18.99, features: ['See likes', 'Top picks', 'Boosts'] },
      platinum: { price: 24.99, features: ['Priority likes', 'Message before match'] },
    },
  },
  
  hinge: {
    revenue: 550000000, // $550M
    marketShare: 8.9,
    paidSubscribers: 1400000,
    subscriberGrowth: 31,
    dauGrowth: 17,
    demographics: {
      ageRange: '24-35',
      malePercentage: 64,
      femalePercentage: 36,
    },
    pricing: {
      free: { likesPerDay: 'Limited' },
      plus: { price: 16.98, features: ['Unlimited likes', 'Advanced filters'] },
      x: { price: 24.99, features: ['Priority likes', 'See likes', 'Enhanced matching'] },
    },
  },
};

export const comparisonMetrics = [
  { metric: 'REVENUE (2024)', hinge: '$550M', tinder: '$1.79B', winner: 'Tinder' },
  { metric: 'MARKET SHARE', hinge: '8.9%', tinder: '28.9%', winner: 'Tinder' },
  { metric: 'DAU GROWTH (YOY)', hinge: '+17%', tinder: '-10%', winner: 'Hinge' },
  { metric: 'PAID SUBSCRIBERS', hinge: '1.4M (+31%)', tinder: 'N/A', winner: 'Hinge' },
  { metric: 'USER INTENT', hinge: 'SERIOUS', tinder: 'MIXED', winner: 'Hinge' },
  { metric: 'GENDER RATIO (M:F)', hinge: '64:36', tinder: '76:24', winner: 'Hinge' },
  { metric: 'INTERFACE', hinge: 'PROFILE-BASED', tinder: 'SWIPE-BASED' },
  { metric: 'TARGET AUDIENCE', hinge: 'MILLENNIALS & GEN Z', tinder: 'GEN Z & MILLENNIALS' },
];

export const dataSources = [
  { name: 'IndMoney', url: 'https://www.indmoney.com/blog/us-stocks/dating-app-statistics-2024' },
  { name: 'Global Dating Insights', url: 'https://www.globaldatinginsights.com' },
  { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Hinge_(app)' },
  // ... more sources
];
```

---

## 4. Styling & Theme System

### 4.1 Dark Theme Configuration

**File**: `src/styles/theme.ts`

```typescript
export const theme = {
  colors: {
    // Base
    background: '#000000',
    backgroundElevated: '#0A0A0A',
    surface: '#111111',
    surfaceElevated: '#1A1A1A',
    
    // Text
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    textMuted: '#666666',
    
    // Brand
    hinge: {
      primary: '#F55276', // Hinge pink/red
      light: '#FF6B8A',
      dark: '#D9465F',
    },
    tinder: {
      primary: '#FF6B6B', // Tinder red/coral
      light: '#FF8585',
      dark: '#E65555',
    },
    
    // Semantic
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // UI
    border: '#222222',
    borderHover: '#333333',
    accent: '#6366F1', // Indigo for highlights
  },
  
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  
  spacing: {
    section: '100vh', // Full viewport
    containerPadding: '24px',
    cardPadding: '24px',
    gridGap: '16px',
  },
};
```

### 4.2 Tailwind Configuration

Update `tailwind.config.js`:

```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'bg-elevated': '#0A0A0A',
        'surface': '#111111',
        'surface-elevated': '#1A1A1A',
        'hinge': '#F55276',
        'tinder': '#FF6B6B',
      },
      borderRadius: {
        'custom': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 5. Animation Strategy

### 5.1 Animation Library

**Install Framer Motion**:
```bash
npm install framer-motion
```

### 5.2 Animation Variants

**File**: `src/styles/animations.ts`

```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 }
};
```

### 5.3 Scroll-Triggered Animations

**File**: `src/hooks/useScrollAnimation.ts`

```typescript
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};
```

---

## 6. Performance Optimization

### 6.1 Image Optimization

1. **Convert images to WebP**: Use tools like `squoosh.app` or `sharp`
2. **Implement lazy loading**: Native `loading="lazy"` attribute
3. **Responsive images**: Use `srcset` for different screen sizes
4. **Image dimensions**: Always specify `width` and `height` to prevent CLS

### 6.2 Code Splitting

```typescript
// App.tsx
import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const MarketOverview = lazy(() => import('./components/sections/MarketOverview'));
// ... other sections

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeroSection />
      <MarketOverview />
      {/* ... */}
    </Suspense>
  );
}
```

### 6.3 Bundle Optimization

**Vite Config** (`vite.config.ts`):

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
```

### 6.4 Performance Monitoring

```typescript
// src/utils/performance.ts
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export const reportWebVitals = () => {
  onCLS(console.log);
  onFID(console.log);
  onFCP(console.log);
  onLCP(console.log);
  onTTFB(console.log);
};
```

---

## 7. Accessibility Considerations

### 7.1 Keyboard Navigation

- All interactive elements must be keyboard accessible
- Implement proper focus management
- Use semantic HTML (nav, section, article)
- Provide skip links for navigation

### 7.2 Screen Reader Support

```tsx
<nav aria-label="Main navigation">
  <button aria-label="Navigate to Market Overview" aria-current="page">
    Market Overview
  </button>
</nav>

<img src="chart.webp" alt="Bar chart showing Hinge with 17% growth and Tinder with -10% decline" />

<button aria-expanded={isOpen} aria-controls="details-panel">
  Show Details
</button>
```

### 7.3 Color Contrast

- Text on dark background: Use #FFFFFF or #F0F0F0
- Ensure minimum 4.5:1 contrast ratio
- Test with tools like Axe DevTools or WAVE

### 7.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Responsive Breakpoints

### 8.1 Breakpoint Strategy

```typescript
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
  ultrawide: '1920px',
};
```

### 8.2 Responsive Behavior

| Element | Mobile (320-767px) | Tablet (768-1023px) | Desktop (1024px+) |
|---------|-------------------|---------------------|-------------------|
| **Bento Grid** | 1 column | 2 columns | 3-4 columns |
| **Navigation** | 3 items, icons only | 4 items, icon + text | 5 items, full labels |
| **Typography** | 32px headlines | 48px headlines | 64px headlines |
| **Cards** | Full width | 2-up grid | Mixed sizes (1x1, 1x2, 2x1) |
| **Section Height** | Auto (content-based) | 100vh | 100vh |

---

## 9. Testing Strategy

### 9.1 Unit Testing (Optional for V1)
- Test data transformations and utility functions
- Component snapshot tests (Jest + React Testing Library)

### 9.2 Performance Testing
- Lighthouse CI in GitHub Actions
- Manual Lighthouse audits during development
- Core Web Vitals monitoring

### 9.3 Accessibility Testing
- Axe DevTools browser extension
- WAVE accessibility checker
- Manual keyboard navigation testing
- Screen reader testing (NVDA, VoiceOver)

### 9.4 Browser Testing
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### 9.5 Device Testing
- iPhone (Safari, Chrome)
- Android (Chrome)
- iPad (Safari)
- Desktop (multiple screen sizes)

---

## 10. Deployment Plan

### 10.1 Build Process

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

### 10.2 Deployment Options

**Option 1: Vercel (Recommended)**
- Connect GitHub repository
- Automatic deployments on push
- Preview deployments for PRs
- Edge network (global CDN)

**Option 2: Netlify**
- Similar to Vercel
- Drag-and-drop deployment
- Form handling and serverless functions available

**Option 3: GitHub Pages**
- Free hosting for static sites
- Configure `base` in `vite.config.ts`
- Use `gh-pages` package for deployment

### 10.3 Environment Variables

```env
VITE_APP_VERSION=1.0.0
VITE_ANALYTICS_ENABLED=false
```

---

## 11. Dependencies to Install

```json
{
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.562.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
  }
}
```

**Installation Commands**:
```bash
cd /Users/chronoai-oliverni/github/training
npm install framer-motion
```

---

## 12. Implementation Phases

### Phase 1: Foundation (Day 1)
- ✅ Set up project structure
- ✅ Install dependencies
- ✅ Configure dark theme
- ✅ Create data layer with market research

### Phase 2: Layout Components (Day 1-2)
- Build BentoGrid and BentoCard
- Create BottomNavigation
- Set up Section containers
- Test responsive behavior

### Phase 3: Content Sections (Day 2-3)
- Build all 6 main sections
- Populate with market data
- Create comparison table
- Add metric cards

### Phase 4: Animations (Day 3)
- Implement scroll-triggered animations
- Add hover effects
- Test performance (60fps target)
- Add reduced motion support

### Phase 5: Polish & Optimization (Day 4)
- Optimize images and assets
- Run Lighthouse audits
- Fix accessibility issues
- Test on multiple devices/browsers

### Phase 6: Deployment (Day 4)
- Build production bundle
- Deploy to Vercel/Netlify
- Verify performance on production
- Document deployment process

---

## 13. Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Animation performance** | High | Use CSS transforms, Framer Motion optimization, test on low-end devices |
| **Data accuracy** | High | Cross-reference all statistics, include source citations, regular updates |
| **Dark theme readability** | Medium | Test contrast ratios, provide sufficient spacing, use larger font sizes |
| **Mobile performance** | Medium | Aggressive code splitting, image optimization, lazy loading |
| **Browser compatibility** | Low | Use PostCSS autoprefixer, test on target browsers, graceful degradation |

---

## 14. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Lighthouse Performance** | > 90 | Chrome DevTools |
| **Lighthouse Accessibility** | > 95 | Chrome DevTools |
| **First Contentful Paint** | < 1.5s | Web Vitals |
| **Time to Interactive** | < 3.5s | Web Vitals |
| **Cumulative Layout Shift** | < 0.1 | Web Vitals |
| **Bundle Size** | < 300KB (gzipped) | Vite build output |

---

## 15. Next Steps

**Ready for Implementation**: Proceed to `/speckit.tasks` to generate detailed, actionable implementation tasks organized by priority and phase.

---

**Last Updated**: 2026-01-14  
**Status**: ✅ **APPROVED FOR IMPLEMENTATION**

