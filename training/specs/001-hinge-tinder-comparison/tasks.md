# Implementation Tasks: Hinge vs Tinder Market Research Presentation

**Feature**: Hinge vs Tinder Comparison Dashboard  
**Branch**: `001-hinge-tinder-comparison`  
**Created**: 2026-01-14  
**Total Tasks**: 45

---

## Task Status Legend
- ⏳ **TODO** - Not started
- 🔄 **IN PROGRESS** - Currently working
- ✅ **DONE** - Completed
- ⏭️ **BLOCKED** - Waiting on dependencies

---

## Phase 1: Foundation & Setup (Priority: P0)

### 1.1 Dependencies & Configuration

**TASK-001**: Install Framer Motion ⏳
```bash
npm install framer-motion
```
- **Estimate**: 2 minutes
- **Dependencies**: None
- **Acceptance**: `framer-motion` appears in package.json

**TASK-002**: Update Tailwind Configuration ⏳
- Extend theme with custom colors (hinge, tinder, dark theme palette)
- Add custom border radius values
- Add animation keyframes (fadeIn, slideUp, scaleIn)
- **File**: `tailwind.config.js`
- **Estimate**: 10 minutes
- **Dependencies**: None

**TASK-003**: Create Theme Constants ⏳
- Create `src/styles/theme.ts`
- Define color palette, spacing, border radius
- Export theme object for consumption
- **Estimate**: 10 minutes
- **Dependencies**: None

**TASK-004**: Create Animation Variants ⏳
- Create `src/styles/animations.ts`
- Define fadeInUp, staggerContainer, scaleIn, hoverScale
- Export for Framer Motion components
- **Estimate**: 10 minutes
- **Dependencies**: TASK-001

---

### 1.2 Data Layer

**TASK-005**: Create Market Data File ⏳
- Create `src/data/marketData.ts`
- Add market overview data (size, growth, users)
- Add Tinder complete dataset (revenue, users, demographics, pricing)
- Add Hinge complete dataset (revenue, subscribers, demographics, pricing)
- **Estimate**: 20 minutes
- **Dependencies**: None
- **Reference**: spec.md "Market Research Data" section

**TASK-006**: Create Comparison Metrics ⏳
- Create `src/data/comparisonMetrics.ts`
- Define comparison matrix (10-12 metrics)
- Include winner indicators where applicable
- **Estimate**: 15 minutes
- **Dependencies**: None

**TASK-007**: Create Data Sources List ⏳
- Create `src/data/sources.ts`
- List all research sources with names and URLs
- Add timestamps for data freshness
- **Estimate**: 10 minutes
- **Dependencies**: None

---

## Phase 2: Core Layout Components (Priority: P1)

### 2.1 Bento Grid System

**TASK-008**: Create BentoGrid Component ⏳
- Create `src/components/layout/BentoGrid.tsx`
- Implement responsive CSS Grid
- Support 1-4 column layouts
- Add configurable gap prop (sm, md, lg)
- **Estimate**: 30 minutes
- **Dependencies**: TASK-002

**TASK-009**: Create BentoCard Component ⏳
- Create `src/components/layout/BentoCard.tsx`
- Implement dark card with rounded corners (16px)
- Add hover effects (scale, glow)
- Support grid span (1-3 columns)
- Add variants: default, highlight, large
- **Estimate**: 40 minutes
- **Dependencies**: TASK-002, TASK-004

**TASK-010**: Test Bento Grid Responsiveness ⏳
- Test mobile (1 col), tablet (2 col), desktop (3-4 col)
- Verify smooth transitions between breakpoints
- Check card spanning behavior
- **Estimate**: 20 minutes
- **Dependencies**: TASK-008, TASK-009

---

### 2.2 Navigation

**TASK-011**: Create BottomNavigation Component ⏳
- Create `src/components/layout/BottomNavigation.tsx`
- Fixed position at bottom, centered
- Glass morphism effect (backdrop-blur)
- Active indicator (pill or underline)
- 48px minimum touch target height
- **Estimate**: 45 minutes
- **Dependencies**: TASK-002, TASK-004

**TASK-012**: Implement Smooth Scroll Navigation ⏳
- Add onClick handlers to scroll to sections
- Use `scrollIntoView` with smooth behavior
- Update active state based on scroll position
- **Estimate**: 30 minutes
- **Dependencies**: TASK-011

**TASK-013**: Create useNavigationState Hook ⏳
- Create `src/hooks/useNavigationState.ts`
- Track active section using Intersection Observer
- Return activeId for navigation highlighting
- **Estimate**: 25 minutes
- **Dependencies**: None

---

### 2.3 Section Containers

**TASK-014**: Create Section Component ⏳
- Create `src/components/layout/Section.tsx`
- Full viewport height (100vh) option
- Consistent padding and spacing
- Support for id prop (for navigation)
- **Estimate**: 20 minutes
- **Dependencies**: TASK-002

**TASK-015**: Create AnimatedSection Wrapper ⏳
- Create `src/components/ui/AnimatedSection.tsx`
- Integrate Intersection Observer
- Trigger fade-in animations on scroll
- Support stagger effects for children
- **Estimate**: 35 minutes
- **Dependencies**: TASK-001, TASK-004

---

## Phase 3: Data Display Components (Priority: P1)

### 3.1 Metric Components

**TASK-016**: Create MetricCard Component ⏳
- Create `src/components/data/MetricCard.tsx`
- Large number display (48-64px font)
- Trend indicator (arrow icon + color)
- Label in CAPS
- Platform-specific accent color (Hinge pink, Tinder red)
- **Estimate**: 35 minutes
- **Dependencies**: TASK-002

**TASK-017**: Create StatBadge Component ⏳
- Create `src/components/ui/StatBadge.tsx`
- Pill-shaped badge design
- Icon + value + label layout
- Color variants (success, warning, info)
- **Estimate**: 25 minutes
- **Dependencies**: TASK-002

**TASK-018**: Create GradientText Component ⏳
- Create `src/components/ui/GradientText.tsx`
- Background gradient with clip-path
- Support for custom gradient colors
- Use for section headlines
- **Estimate**: 15 minutes
- **Dependencies**: TASK-002

---

### 3.2 Comparison Table

**TASK-019**: Create ComparisonTable Component ⏳
- Create `src/components/data/ComparisonTable.tsx`
- Three-column layout (Metric | Hinge | Tinder)
- Visual "winner" indicators (✓ icon, highlight)
- Responsive: stacks on mobile
- Alternating row backgrounds
- **Estimate**: 50 minutes
- **Dependencies**: TASK-002, TASK-006

**TASK-020**: Style Comparison Table ⏳
- Add hover effects on rows
- Platform-specific color highlights
- Typography hierarchy (metric names in CAPS)
- Smooth transitions
- **Estimate**: 20 minutes
- **Dependencies**: TASK-019

---

## Phase 4: Section Content (Priority: P2)

### 4.1 Hero Section

**TASK-021**: Create HeroSection Component ⏳
- Create `src/components/sections/HeroSection.tsx`
- Large headline: "HINGE VS TINDER"
- Subtitle: "MARKET RESEARCH COMPARISON 2024-2026"
- Animated gradient background
- Scroll indicator icon
- **Estimate**: 40 minutes
- **Dependencies**: TASK-014, TASK-015, TASK-018

---

### 4.2 Market Overview Section

**TASK-022**: Create MarketOverview Component ⏳
- Create `src/components/sections/MarketOverview.tsx`
- Display market size ($10.87B)
- Growth rate (7.8% CAGR)
- Top 4 players with market share pie/bar representation
- 3-4 bento cards layout
- **Estimate**: 50 minutes
- **Dependencies**: TASK-008, TASK-009, TASK-016, TASK-005

---

### 4.3 Tinder Analysis Section

**TASK-023**: Create TinderAnalysis Component ⏳
- Create `src/components/sections/TinderAnalysis.tsx`
- Revenue and user metrics
- DAU decline visualization
- Demographics breakdown
- Strengths & weaknesses cards
- 6-8 bento cards with mixed sizes
- **Estimate**: 60 minutes
- **Dependencies**: TASK-008, TASK-009, TASK-016, TASK-005

---

### 4.4 Hinge Analysis Section

**TASK-024**: Create HingeAnalysis Component ⏳
- Create `src/components/sections/HingeAnalysis.tsx`
- Revenue and subscriber growth
- DAU increase visualization
- Demographics breakdown
- Positioning strategy card
- 6-8 bento cards with mixed sizes
- **Estimate**: 60 minutes
- **Dependencies**: TASK-008, TASK-009, TASK-016, TASK-005

---

### 4.5 Comparison Section

**TASK-025**: Create ComparisonSection Component ⏳
- Create `src/components/sections/ComparisonSection.tsx`
- Section headline
- Large comparison table (full width or 2-col span)
- 10-12 key metrics displayed
- **Estimate**: 40 minutes
- **Dependencies**: TASK-019, TASK-020, TASK-006

---

### 4.6 Insights Section

**TASK-026**: Create InsightsSection Component ⏳
- Create `src/components/sections/InsightsSection.tsx`
- 5 key market insights as cards
- Trend analysis summaries
- Data source citations
- Optional CTA or conclusion
- **Estimate**: 45 minutes
- **Dependencies**: TASK-008, TASK-009, TASK-007

---

## Phase 5: Animations & Interactions (Priority: P2)

### 5.1 Scroll Animations

**TASK-027**: Create useScrollAnimation Hook ⏳
- Create `src/hooks/useScrollAnimation.ts`
- Implement Intersection Observer
- Return ref and isVisible state
- Configure threshold and rootMargin
- **Estimate**: 20 minutes
- **Dependencies**: None

**TASK-028**: Apply Scroll Animations to Sections ⏳
- Wrap all sections with AnimatedSection
- Add fade-in effects
- Implement stagger for card grids
- **Estimate**: 30 minutes
- **Dependencies**: TASK-015, TASK-027

**TASK-029**: Add Number Count-Up Animation ⏳
- Animate numbers from 0 to target value
- Use Framer Motion's animate API
- Apply to revenue/user count metrics
- **Estimate**: 30 minutes
- **Dependencies**: TASK-001, TASK-016

---

### 5.2 Hover & Micro-interactions

**TASK-030**: Add Card Hover Effects ⏳
- Scale transform (1.02)
- Subtle glow/shadow increase
- 200ms transition duration
- **Estimate**: 15 minutes
- **Dependencies**: TASK-009

**TASK-031**: Add Button/Link Hover Effects ⏳
- Navigation items scale on hover
- Smooth color transitions
- Active state animations
- **Estimate**: 15 minutes
- **Dependencies**: TASK-011

**TASK-032**: Test Animation Performance ⏳
- Verify 60fps in Chrome DevTools
- Test on low-end device (throttle CPU 6x)
- Optimize any janky animations
- **Estimate**: 30 minutes
- **Dependencies**: ALL animation tasks

---

### 5.3 Reduced Motion Support

**TASK-033**: Implement Reduced Motion Styles ⏳
- Add CSS media query `@media (prefers-reduced-motion: reduce)`
- Disable/minimize animations
- Ensure functionality remains intact
- **Estimate**: 20 minutes
- **Dependencies**: ALL animation tasks

---

## Phase 6: Performance Optimization (Priority: P1)

### 6.1 Image Optimization

**TASK-034**: Optimize All Images ⏳
- Convert to WebP format
- Create responsive image sizes (1x, 2x)
- Add lazy loading (`loading="lazy"`)
- Specify width/height to prevent CLS
- **Estimate**: 30 minutes
- **Dependencies**: None

---

### 6.2 Code Splitting

**TASK-035**: Implement Lazy Loading for Sections ⏳
- Use React.lazy() for section components
- Add Suspense boundaries with loading states
- **Estimate**: 25 minutes
- **Dependencies**: ALL section components

**TASK-036**: Configure Vite Build Optimization ⏳
- Update `vite.config.ts`
- Configure manual chunks (vendor, animations)
- Enable minification and tree shaking
- **Estimate**: 15 minutes
- **Dependencies**: None

---

### 6.3 Performance Monitoring

**TASK-037**: Add Web Vitals Tracking ⏳
- Install `web-vitals` package
- Create `src/utils/performance.ts`
- Log CLS, FID, FCP, LCP, TTFB
- **Estimate**: 15 minutes
- **Dependencies**: None

**TASK-038**: Run Lighthouse Audit ⏳
- Run Lighthouse in Chrome DevTools
- Target: Performance > 90, Accessibility > 95
- Document results and fixes needed
- **Estimate**: 20 minutes
- **Dependencies**: ALL implementation tasks

---

## Phase 7: Accessibility & Polish (Priority: P2)

### 7.1 Accessibility

**TASK-039**: Add ARIA Labels & Semantic HTML ⏳
- Navigation: `aria-label`, `aria-current`
- Images: descriptive `alt` text
- Sections: proper heading hierarchy (h1, h2, h3)
- Buttons: `aria-label` where text unclear
- **Estimate**: 30 minutes
- **Dependencies**: ALL components

**TASK-040**: Implement Keyboard Navigation ⏳
- Test tab order and focus management
- Add visible focus indicators
- Ensure all interactions keyboard-accessible
- **Estimate**: 25 minutes
- **Dependencies**: TASK-011

**TASK-041**: Test with Screen Reader ⏳
- Test with VoiceOver (Mac) or NVDA (Windows)
- Verify all content is announced correctly
- Fix any navigation issues
- **Estimate**: 30 minutes
- **Dependencies**: TASK-039, TASK-040

---

### 7.2 Responsive Testing

**TASK-042**: Test Mobile Devices ⏳
- iPhone (Safari, Chrome)
- Android (Chrome)
- Verify touch targets (44px minimum)
- Test landscape orientation
- **Estimate**: 30 minutes
- **Dependencies**: ALL components

**TASK-043**: Test Tablet & Desktop ⏳
- iPad (Safari)
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Test various screen sizes (1024px, 1440px, 1920px)
- **Estimate**: 30 minutes
- **Dependencies**: ALL components

---

## Phase 8: Deployment (Priority: P1)

### 8.1 Build & Deploy

**TASK-044**: Production Build ⏳
```bash
npm run build
npm run preview
```
- Verify build succeeds
- Test production build locally
- Check bundle size (< 300KB gzipped)
- **Estimate**: 15 minutes
- **Dependencies**: ALL tasks

**TASK-045**: Deploy to Vercel ⏳
- Connect GitHub repository to Vercel
- Configure build settings
- Deploy and test live URL
- **Estimate**: 20 minutes
- **Dependencies**: TASK-044

---

## Summary

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| **Phase 1: Foundation** | 7 tasks | ~1.5 hours |
| **Phase 2: Layout** | 8 tasks | ~4 hours |
| **Phase 3: Data Display** | 5 tasks | ~3 hours |
| **Phase 4: Sections** | 6 tasks | ~5 hours |
| **Phase 5: Animations** | 7 tasks | ~3 hours |
| **Phase 6: Performance** | 4 tasks | ~2 hours |
| **Phase 7: Accessibility** | 5 tasks | ~2.5 hours |
| **Phase 8: Deployment** | 2 tasks | ~0.5 hours |
| **TOTAL** | **45 tasks** | **~21-24 hours** |

---

## Critical Path

Priority order for fastest MVP:
1. TASK-001 to TASK-007 (Foundation & Data)
2. TASK-008, TASK-009 (Bento Grid)
3. TASK-014, TASK-016 (Section & Metrics)
4. TASK-021 to TASK-026 (All Sections)
5. TASK-011 (Navigation)
6. TASK-028 (Basic Animations)
7. TASK-044, TASK-045 (Deploy)

---

## Next Step

**Ready to Implement**: Run `/speckit.implement` to begin executing these tasks in order.

---

**Last Updated**: 2026-01-14  
**Status**: ✅ **READY FOR EXECUTION**

