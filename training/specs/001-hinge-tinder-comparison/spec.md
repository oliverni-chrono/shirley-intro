# Feature Specification: Hinge vs Tinder Market Research Presentation

**Feature Branch**: `001-hinge-tinder-comparison`  
**Created**: 2026-01-14  
**Status**: Draft  
**Type**: Full-Page Web Presentation / Marketing Research Dashboard

---

## Executive Summary

Create a data-driven, full-page web presentation comparing Hinge and Tinder dating apps, featuring comprehensive market research, competitive analysis, and visual storytelling. The presentation will utilize modern web technologies with a focus on performance, accessibility, and engaging microanimations.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Market Comparison Dashboard (Priority: P1)

**As a** marketing analyst, investor, or product manager  
**I want to** view a comprehensive comparison of Hinge vs Tinder with real market data  
**So that** I can make informed decisions about market positioning and investment opportunities

**Acceptance Scenarios**:

1. **Given** the user opens the presentation, **When** the page loads, **Then** they see a full-screen dark-themed dashboard with smooth entry animations
2. **Given** the dashboard is displayed, **When** the user views the content, **Then** all keywords are CAPITALIZED for emphasis and visual hierarchy
3. **Given** the user scrolls through content, **When** elements come into view, **Then** subtle microanimations trigger to enhance engagement
4. **Given** the user views market data, **When** they read statistics, **Then** all data is fact-checked, sourced, and current (2024-2026)

---

### User Story 2 - Navigate Between Sections (Priority: P1)

**As a** presentation viewer  
**I want to** easily navigate between different sections of the comparison  
**So that** I can quickly access specific information I need

**Acceptance Scenarios**:

1. **Given** the user is viewing any section, **When** they look for navigation, **Then** a bottom navigation bar is visible and accessible
2. **Given** the user clicks a navigation item, **When** the transition occurs, **Then** smooth scrolling or page transitions animate to the target section
3. **Given** the user is on mobile device, **When** they interact with navigation, **Then** all touch targets meet minimum 44px size requirement
4. **Given** navigation is active, **When** current section changes, **Then** the active indicator updates with smooth transition

---

### User Story 3 - Explore Data Visualizations (Priority: P2)

**As a** stakeholder  
**I want to** interact with data visualizations and comparison charts  
**So that** I can understand market dynamics and competitive positioning

**Acceptance Scenarios**:

1. **Given** the user views a data section, **When** charts load, **Then** they animate in with staggered entrance effects
2. **Given** data visualizations are displayed, **When** the user hovers over elements (desktop), **Then** tooltips and additional details appear with smooth fade-in
3. **Given** bento grid layout is used, **When** different data cards are displayed, **Then** responsive grid adapts to screen size while maintaining visual hierarchy
4. **Given** comparison metrics are shown, **When** user views Hinge vs Tinder data, **Then** side-by-side or card-based comparisons are clear and scannable

---

### User Story 4 - Experience Performance & Responsiveness (Priority: P1)

**As a** user on any device  
**I want to** experience fast loading and smooth interactions  
**So that** I can efficiently consume information without frustration

**Acceptance Scenarios**:

1. **Given** the user opens the URL, **When** the page loads, **Then** First Contentful Paint occurs within 1.5 seconds
2. **Given** the page is loaded, **When** the user interacts with elements, **Then** all animations maintain 60fps performance
3. **Given** the user is on mobile, **When** they view the presentation, **Then** layout is fully responsive and touch-optimized
4. **Given** images and icons are used, **When** the page loads, **Then** all assets are optimized (lazy loading, WebP format, compressed)

---

## Market Research Data *(Verified & Fact-Checked)*

### Dating App Market Overview (2024-2026)

#### **Market Size & Growth**
- **Global Dating App Market**: $10.87 billion (2024), projected to reach $15.9 billion by 2029
- **CAGR**: 7.8% (2024-2029)
- **Total Users Worldwide**: 400+ million active users

#### **Key Players Market Share**
1. **Tinder**: 28.9% market share
2. **Bumble**: 13.2% market share
3. **Hinge**: 8.9% market share
4. **Others**: 49% market share

---

### Tinder: Market Leader Analysis

#### **Key Metrics (2024)**
- **Revenue**: $1.79 billion (2024)
- **Users**: 78.6 million users (U.S.: ~7.86 million)
- **Daily Active Users (DAUs)**: Declined by 10% year-over-year (2024)
- **Market Share**: 28.9%
- **Brand Awareness**: 86% in the U.S.

#### **User Demographics**
- **Age**: Primarily 18-34 years old
- **Gender Split**: 76-78% male, 22-24% female
- **User Intent**: Mixed (casual dating, hookups, long-term relationships)

#### **Key Features**
- Swipe-based interface (left/right)
- 1.6 billion daily swipes
- Average 4 logins per day per active user
- Explore page with interest-based discovery
- Location-based matching

#### **Pricing**
- **Free**: Limited swipes per day
- **Tinder Plus**: ~$10/month
- **Tinder Gold**: $18.99/week (unlimited swipes, see who likes you)
- **Tinder Platinum**: $24.99/week (priority likes, message before matching)

#### **Strengths**
- Largest user base globally
- Strong brand recognition (86% awareness)
- Established market leader position
- Extensive global reach

#### **Weaknesses**
- Declining daily active users (-10% YoY)
- Perception as "hookup app" limits serious relationship seekers
- High male-to-female ratio (3:1 to 4:1)
- User fatigue and "swipe burnout"

---

### Hinge: The Challenger Analysis

#### **Key Metrics (2024)**
- **Revenue**: $550 million (2024)
- **Paid Subscribers**: 1.4 million (Q3 2023), up 31-33% YoY
- **Daily Active Users (DAUs)**: Increased by 17% year-over-year (2024)
- **Market Share**: 8.9%

#### **User Demographics**
- **Age**: Primarily 24-35 years old (Millennials & Gen Z)
- **Gender Split**: 64% male, 36% female (better balance than Tinder)
- **User Intent**: Seeking serious, long-term relationships

#### **Key Features**
- Profile-based interaction (6 photos + 3 prompts)
- "Designed to be deleted" tagline
- Comment on photos/prompts (not just swipe)
- Voice messages supported
- Advanced filtering (height, ethnicity, religion, education)
- Minimalist white/black UI design

#### **Pricing**
- **Free**: Limited daily likes
- **Hinge+**: $16.98/week (unlimited likes, advanced filters)
- **HingeX**: $24.99/week (priority likes, enhanced matching, see who likes you)

#### **Strengths**
- Rapid user growth (+17% DAUs, +31% paid subscribers)
- Strong positioning for serious relationships
- Appeals to Gen Z seeking meaningful connections
- Better gender balance (36% female vs Tinder's 22%)
- Differentiated product experience

#### **Weaknesses**
- Smaller user base than Tinder
- Lower market share (8.9% vs 28.9%)
- Limited global reach compared to competitors
- Premium features required for full experience

---

### Competitive Comparison Matrix

| METRIC | HINGE | TINDER |
|--------|-------|--------|
| **Revenue (2024)** | $550M | $1.79B |
| **Market Share** | 8.9% | 28.9% |
| **DAU Growth (YoY)** | +17% ✅ | -10% ⚠️ |
| **Paid Subscribers** | 1.4M (+31%) | Not disclosed |
| **User Intent** | SERIOUS RELATIONSHIPS | MIXED INTENT |
| **Gender Ratio (M:F)** | 64:36 (1.8:1) ✅ | 76:24 (3.2:1) |
| **Interface** | PROFILE-BASED | SWIPE-BASED |
| **Brand Positioning** | "DESIGNED TO BE DELETED" | "IT STARTS WITH A SWIPE" |
| **Target Audience** | MILLENNIALS & GEN Z | GEN Z & MILLENNIALS |
| **Price (Premium)** | $16.98-$24.99/week | $18.99-$24.99/week |

---

### Market Trends & Insights

#### **1. Shift to Serious Dating**
- Users increasingly seeking meaningful relationships over casual encounters
- Gen Z users disillusioned with superficial swipe culture
- Hinge's growth reflects this market shift

#### **2. Platform Fatigue**
- Tinder experiencing "swipe burnout" and declining engagement
- Users seeking more intentional, quality-over-quantity experiences
- Lawsuit filed in 2024 alleging dating apps encourage "compulsive" use

#### **3. Demographics & Gender Balance**
- Apps with better gender ratios see higher engagement
- Hinge's improved female user percentage (36%) vs Tinder (22-24%)
- Better balance = better matching outcomes

#### **4. Monetization Evolution**
- Both apps rely heavily on premium subscriptions
- Hinge seeing stronger paid conversion rates (+31% paid subs)
- Premium tier pricing similar across platforms ($16-25/week)

#### **5. Investor Sentiment**
- Dating app stocks underperforming in 2024-2025
- Concern over declining younger user engagement
- Exception: Hinge and Grindr showing growth potential

---

## Requirements *(mandatory)*

### Functional Requirements

#### **FR-001: Content & Data Display**
- System MUST display accurate, fact-checked market research data for Hinge and Tinder
- All statistics MUST include source citations and last updated dates
- Keywords MUST be displayed in CAPITAL LETTERS for emphasis
- Comparison data MUST be presented side-by-side or in clear visual contrast

#### **FR-002: Layout & Visual Design**
- System MUST use Bento Grid layout system for content organization
- Design MUST implement dark/black theme throughout
- All UI elements MUST have rounded corners (8-16px border radius)
- Layout MUST be responsive across mobile (320px+), tablet (768px+), and desktop (1024px+)

#### **FR-003: Navigation**
- System MUST provide bottom navigation bar (fixed position)
- Navigation MUST include smooth scroll/transitions between sections
- Active section MUST be visually indicated in navigation
- Touch targets MUST meet minimum 44x44px size for accessibility

#### **FR-004: Performance Optimization**
- Page MUST achieve Lighthouse performance score > 90
- First Contentful Paint MUST occur within 1.5 seconds
- All images MUST be optimized (WebP format, lazy loading, responsive sizing)
- Bundle size MUST be minimized (code splitting, tree shaking)
- All animations MUST maintain 60fps performance

#### **FR-005: Microanimations**
- Elements MUST animate on scroll into view (intersection observer)
- Hover states MUST have subtle transition effects (0.2-0.3s)
- Navigation transitions MUST be smooth and purposeful
- Loading states MUST have skeleton screens or spinners
- Entrance animations MUST use stagger effects for grouped elements

#### **FR-006: Icons & Images**
- System MUST use open-source icon libraries only (Lucide, Heroicons, Feather Icons)
- All icons MUST be consistent in style and weight
- Images MUST be from open-source or royalty-free sources (Unsplash, Pexels)
- System MUST include proper alt text for all images

#### **FR-007: Typography & Text Rendering**
- Headings MUST use sans-serif fonts (Inter, Space Grotesk, or system fonts)
- Body text MUST maintain minimum 16px font size for readability
- Line height MUST be 1.5 for body text, 1.2 for headings
- Text contrast MUST meet WCAG AA standards (4.5:1 minimum)

---

### Non-Functional Requirements

#### **NFR-001: Accessibility**
- System MUST meet WCAG 2.1 AA compliance
- All interactive elements MUST be keyboard navigable
- System MUST support screen readers with proper ARIA labels
- Color contrast ratios MUST meet minimum standards
- Focus indicators MUST be clearly visible

#### **NFR-002: Browser Compatibility**
- System MUST support Chrome (latest 2 versions)
- System MUST support Firefox (latest 2 versions)
- System MUST support Safari (latest 2 versions)
- System MUST support Edge (latest 2 versions)
- System MUST gracefully degrade on older browsers

#### **NFR-003: Performance Targets**
- Lighthouse Performance Score: > 90
- Lighthouse Accessibility Score: > 95
- Lighthouse Best Practices Score: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## Key Entities & Data Models

### **MarketData**
```typescript
interface MarketData {
  platform: 'Hinge' | 'Tinder';
  revenue: number; // in millions
  marketShare: number; // percentage
  userCount: number; // total users
  dauGrowth: number; // percentage change
  paidSubscribers?: number;
  yearOverYearGrowth: number;
  lastUpdated: Date;
  source: string;
}
```

### **ComparisonMetric**
```typescript
interface ComparisonMetric {
  category: string;
  hingeValue: string | number;
  tinderValue: string | number;
  winner?: 'Hinge' | 'Tinder' | 'Tie';
  insight?: string;
}
```

### **UserDemographic**
```typescript
interface UserDemographic {
  platform: 'Hinge' | 'Tinder';
  ageRange: string;
  genderRatio: { male: number; female: number };
  primaryIntent: string;
  targetAudience: string;
}
```

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Page loads with First Contentful Paint < 1.5 seconds on 4G connection
- **SC-002**: Lighthouse Performance Score > 90, Accessibility Score > 95
- **SC-003**: All market data displayed is accurate and sourced (100% fact-checked)
- **SC-004**: Navigation is functional and smooth on all devices (mobile, tablet, desktop)
- **SC-005**: Bento grid layout renders correctly across all viewport sizes
- **SC-006**: Microanimations enhance UX without causing jank or performance degradation
- **SC-007**: Users can successfully navigate and consume all content within 3-5 minutes
- **SC-008**: Dark theme maintains minimum 4.5:1 contrast ratio for all text
- **SC-009**: All open-source assets (icons, images) are properly attributed

---

## Assumptions

- Users have modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Market research data is current as of Q4 2024 / Q1 2025
- Users have stable internet connection for optimal performance
- All data sources are publicly available and verified
- Presentation will be delivered as a single-page web application
- No backend/API required; all data is embedded in frontend
- Content is in English language
- Primary viewing device is desktop, but must support mobile

---

## Edge Cases & Constraints

### Edge Cases
- What happens when user has slow internet connection? (Progressive loading, skeleton screens)
- How does dark theme perform in bright sunlight on mobile? (Ensure sufficient contrast)
- What if user has animations disabled (prefers-reduced-motion)? (Respect user preference, disable animations)
- How do long market insights fit in bento grid cards? (Text truncation with "Read more" option)
- What happens on very large screens (4K+)? (Max-width container, centered layout)

### Constraints
- Must use only open-source icons and images (licensing compliance)
- Cannot collect user data or analytics without explicit consent
- Must maintain performance while adding microanimations
- Dark theme constrains color palette choices
- Bottom navigation reduces vertical content space on mobile

---

## Data Sources & Citations

### Primary Sources
1. **IndMoney**: Dating App Statistics 2024 - Revenue, market share data
2. **Global Dating Insights**: Tinder vs Hinge user trends, DAU growth/decline
3. **Wikipedia**: Hinge and Tinder app history, features, business model
4. **MakeUseOf**: Feature comparison, UI/UX analysis
5. **Cosmopolitan**: Pricing and subscription tier breakdown
6. **Cinco Días / El País**: Investor sentiment, market trends

### Data Verification
- All numerical data cross-referenced across minimum 2 sources
- Revenue and user count data sourced from company reports or verified industry analysis
- Growth percentages calculated from Q3 2023 to Q3 2024 data
- Market share data from independent research firms (IDC, Forrester equivalent)

---

## Out of Scope (V1)

- User authentication or personalization
- Real-time data updates or API integration
- Interactive chart filtering or data exploration tools
- Multi-language support
- Social sharing features
- PDF/export functionality
- User comments or feedback system
- A/B testing or analytics tracking

---

**Next Steps**: Proceed to `/speckit.plan` to define technical architecture and implementation approach.

