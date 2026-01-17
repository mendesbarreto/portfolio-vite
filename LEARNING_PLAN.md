# Portfolio Migration Learning Plan

## 📋 Student Profile
- **Experience Level**: Backend Developer
- **Learning Style**: Project-Based + Read & Practice
- **Timeline**: 8-12 weeks (30-60 min/day)
- **Goal**: Migrate Next.js portfolio to Vite + React + Tailwind + TanStack Query

## 🎯 Current Status
- **Started**: January 12, 2026
- **Current Phase**: Not Started
- **Projects**: 
  - Source: `/Users/mendes/Git/personal/portfolio-nextjs`
  - Target: `/Users/mendes/Git/personal/portfolio-vite`

---

## 📅 Week-by-Week Progress

### Week 1-2: HTML Fundamentals
**Status**: ⬜ Not Started

**Learning Goals**:
- Understand HTML document structure
- Learn semantic HTML elements
- Create basic page layouts

**Tasks**:
- [ ] Week 1: HTML Structure
  - [ ] Create basic HTML document
  - [ ] Learn essential tags (h1-h6, p, div, span, a, img)
  - [ ] Create test.html with name and bio
  - [ ] Add headings, paragraphs, and links
  
- [ ] Week 2: Semantic HTML
  - [ ] Learn semantic elements (header, nav, main, section, article, footer)
  - [ ] Understand lists (ul, ol, li)
  - [ ] Learn forms (form, input, button, textarea, label)
  - [ ] Create portfolio structure with semantic tags
  - [ ] Create index.html, about.html, contacts.html

**Deliverables**:
- [ ] `index.html` with complete portfolio structure (no styling)
- [ ] `about.html` with about section
- [ ] `contacts.html` with contact form

**Notes**:
- 
- 

---

### Week 3-4: CSS Fundamentals
**Status**: ⬜ Not Started

**Learning Goals**:
- Understand CSS syntax and selectors
- Learn box model
- Style text, colors, backgrounds
- Basic layout techniques

**Tasks**:
- [ ] Week 3: CSS Basics
  - [ ] Learn CSS syntax (selector, property, value)
  - [ ] Understand selectors (element, class, ID, descendant)
  - [ ] Learn colors and text styling
  - [ ] Create styles.css file
  - [ ] Style HTML pages with basic colors and fonts
  
- [ ] Week 4: Box Model & Layout
  - [ ] Understand box model (content, padding, border, margin)
  - [ ] Learn spacing properties
  - [ ] Master display property (block, inline, flex, grid)
  - [ ] Learn positioning (relative, absolute, fixed)
  - [ ] Style portfolio sections with padding and margins
  - [ ] Use flexbox for header layout
  - [ ] Add borders and rounded corners

**Deliverables**:
- [ ] Styled portfolio with styles.css
- [ ] Responsive layout for header and sections
- [ ] Basic color scheme applied

**Notes**:
- 
- 

---

### Week 5-6: React Fundamentals
**Status**: ⬜ Not Started

**Learning Goals**:
- Understand React components
- Learn JSX syntax
- Manage component state with hooks
- Handle user events

**Tasks**:
- [ ] Week 5: React Components
  - [ ] Learn component structure (function components)
  - [ ] Understand JSX syntax
  - [ ] Learn props and passing data
  - [ ] Create Header, Footer, Button components
  - [ ] Pass props between components
  
- [ ] Week 6: React Hooks
  - [ ] Learn useState hook
  - [ ] Understand useEffect hook
  - [ ] Learn event handlers
  - [ ] Convert HTML/CSS to React components
  - [ ] Add state for mobile menu toggle
  - [ ] Add state for expandable project cards

**Deliverables**:
- [ ] React portfolio with component structure
- [ ] Header with mobile menu toggle
- [ ] Expandable project cards
- [ ] All sections as React components

**Notes**:
- 
- 

---

### Week 7: Tailwind CSS Fundamentals
**Status**: ⬜ Not Started

**Learning Goals**:
- Understand Tailwind utility classes
- Apply styles without custom CSS
- Use Tailwind's responsive design
- Configure Matrix theme colors

**Tasks**:
- [ ] Day 1-2: Tailwind Basics
  - [ ] Learn utility-first approach
  - [ ] Master common utilities (colors, spacing, typography)
  - [ ] Practice with simple component styling
  - [ ] Understand Tailwind config file

- [ ] Day 3-4: Tailwind Layout & Responsive
  - [ ] Learn flexbox utilities (flex, justify, items)
  - [ ] Learn grid utilities (grid, cols, gap)
  - [ ] Understand responsive design (sm:, md:, lg:)
  - [ ] Create responsive card layouts

- [ ] Day 5: Tailwind Configuration
  - [ ] Configure Matrix theme colors in tailwind config
  - [ ] Add custom utilities if needed
  - [ ] Review Vite + Tailwind setup

**Deliverables**:
- [ ] Styled components using Tailwind utilities
- [ ] Matrix theme colors configured
- [ ] Understanding of Tailwind utility system

**Notes**:
- 
- 

---

### Week 8: shadcn/ui Integration & Customization
**Status**: ⬜ Not Started

**Learning Goals**:
- Install and configure shadcn/ui
- Learn how to use pre-built components
- Customize shadcn components with Matrix theme
- Migrate custom components to shadcn where possible

**Tasks**:
- [ ] Day 1: shadcn/ui Setup
  - [ ] Install shadcn/ui CLI
  - [ ] Initialize project configuration
  - [ ] Configure to work with existing Tailwind setup
  - [ ] Add first component: button
  - [ ] Test button renders correctly

- [ ] Day 2: Customize & Migrate Button
  - [ ] Learn shadcn Button component structure
  - [ ] Understand component variants system (CVA)
  - [ ] Customize Button with Matrix theme colors
  - [ ] Replace all custom Button components with shadcn Button
  - [ ] Test all buttons across pages

- [ ] Day 3: Card Component & Migration
  - [ ] Add card component from shadcn
  - [ ] Learn card sub-components (CardHeader, CardTitle, etc.)
  - [ ] Customize Card styles (borders, colors, background)
  - [ ] Replace TerminalBlock with shadcn Card
  - [ ] Test in multiple components

- [ ] Day 4: Form Components (Input, Textarea)
  - [ ] Add input component
  - [ ] Add textarea component
  - [ ] Customize for Matrix theme (borders, colors)
  - [ ] Build contact form using shadcn components
  - [ ] Test form validation

- [ ] Day 5: Sheet Component & Header Migration
  - [ ] Add sheet component from shadcn
  - [ ] Learn Sheet customization and props (position, size)
  - [ ] Integrate Sheet into Header for mobile menu
  - [ ] Keep Header navigation logic, replace mobile menu UI with Sheet
  - [ ] Test responsive behavior (mobile vs desktop)
  - [ ] Final testing of all shadcn components

**Deliverables**:
- [ ] shadcn/ui fully configured in project
- [ ] Button, Card, Input, Textarea, Sheet components added
- [ ] All components migrated (or partially migrated) to shadcn
- [ ] Understanding of component customization (variants, props, styling)
- [ ] Custom Matrix theme applied to shadcn components

**Learning Outcomes**:
- [ ] Install and configure shadcn/ui in any project
- [ ] Add and use pre-built shadcn components
- [ ] Customize shadcn components with custom themes
- [ ] Compose shadcn components together
- [ ] Understand component variants system (CVA)
- [ ] Use Radix UI patterns (Sheet, Dialog, etc.)

**shadcn Installation Commands**:
```bash
# Initial setup
bunx --bun shadcn@latest init

# Add components (Week 8, Day 1-5)
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add textarea
bunx --bun shadcn@latest add sheet
```

**Notes**:
- 
- 

---

### Week 9-10: Vite & Build Setup
**Status**: ⬜ Not Started

**Learning Goals**:
- Understand Vite configuration
- Set up project structure
- Handle assets (images, icons)
- Configure TypeScript

**Tasks**:
- [ ] Week 9: Vite Fundamentals
  - [ ] Understand Vite vs Next.js
  - [ ] Review project structure
  - [ ] Learn about @ alias for imports
  - [ ] Copy assets (images, icons) from Next.js
  - [ ] Understand Vite config
  
- [ ] Week 10: Client-Side Routing
  - [ ] Install react-router-dom
  - [ ] Set up routes (Home, About, Contacts)
  - [ ] Update Header to use React Router links
  - [ ] Test navigation between pages

**Deliverables**:
- [ ] Vite project fully configured
- [ ] Routing working for all pages
- [ ] Assets (images, icons) properly loaded
- [ ] TypeScript type checking passing

**Notes**:
- 
- 

---

### Week 11-12: TanStack Query Integration
**Status**: ⬜ Not Started

**Learning Goals**:
- Fetch data with useQuery
- Write data with useMutation
- Handle loading/error states
- Optimize queries

**Tasks**:
- [ ] Week 11: Data Fetching
  - [ ] Learn useQuery hook
  - [ ] Create service layer (getProjects, getAchievements, etc.)
  - [ ] Create custom hooks with useQuery
  - [ ] Replace hardcoded data with service calls
  - [ ] Handle loading and error states
  
- [ ] Week 12: Mutations & Optimization
  - [ ] Learn useMutation hook
  - [ ] Implement contact form with useMutation
  - [ ] Add form validation
  - [ ] Handle query invalidation
  - [ ] Optimize query configuration (staleTime, prefetch)

**Deliverables**:
- [ ] Complete portfolio migrated to Vite + React + Tailwind + TanStack Query
- [ ] All data fetched via TanStack Query
- [ ] Contact form working with mutation
- [ ] Optimized query configuration
- [ ] Ready for production deployment

**Notes**:
- 
- 

---

## 📚 Learning Resources

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/) - HTML and CSS reference
- [CSS-Tricks](https://css-tricks.com/) - CSS tutorials
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive flexbox learning

### React
- [React Official Docs](https://react.dev/)
- [React Tutorial](https://react.dev/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)

### TanStack Query
- [TanStack Query Docs](https://tanstack.com/query/latest)

---

## 🎯 Component Migration Checklist

| Component | Source | Destination | Status |
|-----------|--------|-------------|---------|
| Global Styles | `portfolio-nextjs/src/app/globals.css` | `portfolio-vite/src/index.css` | ⬜ |
| Button | `portfolio-nextjs/src/components/common/base-button.tsx` | `portfolio-vite/src/components/common/base-button.tsx` | ⬜ |
| Terminal Block | `portfolio-nextjs/src/components/common/terminal-block.tsx` | `portfolio-vite/src/components/common/terminal-block.tsx` | ⬜ |
| Terminal Header | `portfolio-nextjs/src/components/common/terminal-header.tsx` | `portfolio-vite/src/components/common/terminal-header.tsx` | ⬜ |
| Header | `portfolio-nextjs/src/components/common/header.tsx` | `portfolio-vite/src/components/common/header.tsx` | ⬜ |
| Typing Text | `portfolio-nextjs/src/components/common/typing-text.tsx` | `portfolio-vite/src/components/common/typing-text.tsx` | ⬜ |
| Code Block | `portfolio-nextjs/src/components/common/code-block.tsx` | `portfolio-vite/src/components/common/code-block.tsx` | ⬜ |
| Overlay Box | `portfolio-nextjs/src/components/common/overlay-box.tsx` | `portfolio-vite/src/components/common/overlay-box.tsx` | ⬜ |
| Home Summary | `portfolio-nextjs/src/components/home/home-summary.tsx` | `portfolio-vite/src/features/home/components/home-summary.tsx` | ⬜ |
| Highlights | `portfolio-nextjs/src/components/home/highlights.tsx` | `portfolio-vite/src/features/home/components/highlights.tsx` | ⬜ |
| Project List | `portfolio-nextjs/src/components/projects/project-list.tsx` | `portfolio-vite/src/features/home/components/project-list.tsx` | ⬜ |
| Professional Summary | `portfolio-nextjs/src/components/about/professional-summary.tsx` | `portfolio-vite/src/features/about/components/professional-summary.tsx` | ⬜ |
| Experience | `portfolio-nextjs/src/components/about/experience.tsx` | `portfolio-vite/src/features/about/components/experience.tsx` | ⬜ |
| Education | `portfolio-nextjs/src/components/about/education.tsx` | `portfolio-vite/src/features/about/components/education.tsx` | ⬜ |
| Tech Skills | `portfolio-nextjs/src/components/about/tech-skills.tsx` | `portfolio-vite/src/features/about/components/tech-skills.tsx` | ⬜ |
| Management Skills | `portfolio-nextjs/src/components/about/management-skills.tsx` | `portfolio-vite/src/features/about/components/management-skills.tsx` | ⬜ |
| Contact Info | `portfolio-nextjs/src/components/contacts/contact-info.tsx` | `portfolio-vite/src/features/contacts/components/contact-info.tsx` | ⬜ |

---

## 📝 Daily Notes

### Week 1
- [ ] Day 1: 
- [ ] Day 2: 
- [ ] Day 3: 
- [ ] Day 4: 
- [ ] Day 5: 

### Week 2
- [ ] Day 1: 
- [ ] Day 2: 
- [ ] Day 3: 
- [ ] Day 4: 
- [ ] Day 5: 

---

## ✅ Completion Criteria

**Project is complete when:**
- [ ] All components migrated from Next.js to Vite
- [ ] Matrix theme fully implemented in Tailwind
- [ ] Routing working for all pages (Home, About, Contacts)
- [ ] All data managed by TanStack Query
- [ ] Contact form functional with mutation
- [ ] TypeScript type checking passes
- [ ] Build succeeds without errors
- [ ] All pages responsive and styled
- [ ] Animations working (typing, cursor blink, scanlines)

---

## 🚀 Deployment Checklist

- [ ] Run `bun run typecheck` - Ensure no TypeScript errors
- [ ] Run `bun run lint` - Ensure code quality
- [ ] Run `bun run build` - Create production build
- [ ] Test `bun run preview` - Verify production build
- [ ] Update index.html with metadata
- [ ] Add favicons
- [ ] Deploy to hosting service

---

*Last Updated: January 12, 2026*