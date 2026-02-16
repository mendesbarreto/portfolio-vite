# Portfolio Migration Learning Plan

---

## 🤖 LLM Context (READ THIS FIRST)

**Project Goal**: Migrate existing Next.js portfolio to Vite + React + Tailwind + shadcn/ui + TanStack Query

**Important**: The student wants to learn by doing. They will build everything themselves while learning fundamentals. Do NOT generate complete solutions - guide them step-by-step.

**Source Project**: `/Users/mendes/Git/personal/portfolio-nextjs`
**Target Project**: `/Users/mendes/Git/personal/portfolio-vite`
**Learning Files**: `/Users/mendes/Git/personal/portfolio-vite/learn/`

### Source Portfolio Style Reference

Always consult source for accurate styling. Key file: `portfolio-nextjs/src/app/globals.css`

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#050505` | Main bg |
| Background Light | `#0b1a20` | Secondary bg |
| Background Lighter | `#14282f` | Tertiary bg |
| Matrix Green | `#008f11` | Green accents |
| Neon Yellow/Green | `#39ff14` | Headings, bright accents |
| Teal | `#00ffcc` | Links |
| Gray | `#e0e0e0` | Body text |
| Border | `#00ff41` | Default borders |

**Font**: `Fira Code` (Google Font, monospace)
**Effects**: `.scanlines`, `.matrix-glow`, `.border-glow`, `.cursor-blink`

---

## 📋 Student Profile

- **Name**: Douglas Mendes
- **Experience Level**: Backend Developer
- **Learning Style**: Side-by-side (concept → immediate practice)
- **Timeline**: 8-12 weeks (30-60 min/day)

---

## 📊 Progress Overview

| Phase | Weeks | Status | Progress |
|-------|-------|--------|----------|
| HTML Fundamentals | 1-2 | ✅ Complete | 100% |
| CSS Fundamentals | 3-4 | ✅ Complete | 100% |
| React Fundamentals | 5-6 | 🔄 In Progress | 0% |
| Tailwind CSS | 7 | ⬜ Not Started | 0% |
| shadcn/ui | 8 | ⬜ Not Started | 0% |
| Vite & Routing | 9-10 | ⬜ Not Started | 0% |
| TanStack Query | 11-12 | ⬜ Not Started | 0% |

**Learning Approach**: Migrate real components from `portfolio-nextjs` while learning React concepts.

**Started**: January 12, 2026
**Current Phase**: Week 5 - React Fundamentals (Migration Mode)

---

## Phase 1: HTML Fundamentals (Weeks 1-2)

### Week 1: HTML Structure ✅ COMPLETE

- [x] Create basic HTML document
- [x] Learn essential tags (h1-h6, p, div, span, a, img)
- [x] Create test.html with name and bio
- [x] Add headings, paragraphs, and links

### Week 2: Semantic HTML ✅ COMPLETE

**Tasks**:

- [x] Learn semantic elements (header, nav, main, section, article, footer)
- [x] Understand lists (ul, ol, li)
- [x] Learn forms (form, input, button, textarea, label)
- [x] Create portfolio structure with semantic tags
- [x] Complete index.html
- [x] Complete contacts.html
- [x] Complete about.html

**Deliverables**:

| File | Status |
|------|--------|
| `learn/html-fundamentals/index.html` | ✅ Complete |
| `learn/html-fundamentals/about.html` | ✅ Complete |
| `learn/html-fundamentals/contacts.html` | ✅ Complete |

**Best Practices Learned**:

- Use semantic HTML5 elements (header, nav, main, section, article, footer) for structure
- Always pair `<label>` with `<input>` using `for`/`id` attributes for accessibility
- `name` attribute determines form data submission, `id` is for element reference
- Use `required` attribute for form validation
- `<textarea>` is a separate element, not `type="textarea"`
- `for`/`id` linking enables clicking label text to focus input
- Relative navigation links need file extensions when serving locally (`about.html`, not `/about`)

---

## Phase 2: CSS Fundamentals (Weeks 3-4)

### Week 3: CSS Basics ✅ COMPLETE

**Learning Goals**:

- Understand CSS syntax and selectors
- Learn CSS variables for theming
- Link CSS to HTML
- Apply Matrix theme colors

**Tasks**:

- [x] Learn CSS syntax (selector, property, value)
- [x] Understand selectors (element, class, ID, descendant)
---

### Week 3: CSS Fundamentals (Session Notes)

- **Day 1**: Learned CSS variables in `:root`, how `var()` works, creating custom properties
- **Day 2**: Learned universal selector `*`, CSS reset (`margin: 0`, `padding: 0`, `box-sizing: border-box`), and how `box-sizing: border-box` fixes width issues
- **Day 3**: Learned HTML element `font-size: 16px` base for `rem` units, body base styles, line-height for accessibility
- **Day 4**: Learned typography, link pseudo-classes (`:hover`, `:focus`), text-shadow for glow effects, matrix effects (scanlines, cursor blink animation)
- **Day 5**: Implemented complete `styles.css` with Matrix theme from source portfolio, added Google Fonts and CSS link to `index.html`

### What You Accomplished

✅ Mastered CSS fundamentals from scratch
✅ Applied Matrix theme from your source portfolio
✅ Created complete stylesheet (135 lines of CSS)
✅ Linked stylesheet and Google Fonts to HTML
✅ Learned semantic HTML from Week 2
✅ Built form with proper labels and structure

---

**Week 3 Deliverables:**
- ✅ `styles.css` with full Matrix theme
- ✅ `index.html` with proper structure and semantic elements
- ✅ Google Fonts integrated
- ✅ CSS reset applied for consistency
- ✅ Form with proper labels (`for`/`id` pairs)
- ✅ Buttons with submit and reset functionality

**You're ready for Week 4: Box Model & Layout!**
- [x] Create styles.css file
- [x] Apply Matrix theme from source portfolio
- [x] Add CSS reset/normalize
- [x] Style index.html with base styles

**Deliverables**:

| File | Status |
|------|--------|
| `learn/html-fundamentals/styles.css` | ✅ Complete |

**Best Practices to Learn**:

| Practice | Why |
|----------|-----|
| CSS variables in `:root` | Define once, use everywhere - easy theme changes |
| One CSS file linked in `<head>` | Separation of concerns (structure vs styling) |
| Lowercase, hyphen-separated class names | `.nav-link` not `.navLink` (consistency) |
| CSS reset (`box-sizing: border-box`) | Consistent behavior across browsers |
| Use `rem` over `px` for fonts | Respects user browser settings (accessibility) |
| Style `:hover` AND `:focus` | Keyboard and mouse users get feedback |
| Limit font families (2-3 max) | Better performance, visual consistency |

### Week 4: Box Model & Layout ⬜ NOT STARTED

**Learning Goals**:

- Understand box model (content, padding, border, margin)
- Learn spacing properties
- Master flexbox for layouts

**Tasks**:

- [ ] Understand box model components
- [ ] Learn spacing properties (margin, padding, border)
- [ ] Master display property (block, inline, flex, grid)
- [ ] Use flexbox for header layout
- [ ] Add borders and rounded corners
- [ ] Style portfolio sections

**Deliverables**:

| File | Status |
|------|--------|
| Styled `index.html` | ⬜ Not started |

**Best Practices to Learn**:

| Practice | Why |
|----------|-----|
| `box-sizing: border-box` globally | Padding included in width calculations |
| Use `margin` for spacing between elements | Keeps components independent |
| Use `padding` for spacing inside elements | Content away from edges |
| Consistent spacing scale (8, 16, 24, 32px) | Visual rhythm, easier decisions |
| Use `gap` in flexbox | Cleaner than margins, no edge issues |
| Avoid fixed widths | Let flex handle responsiveness |

---

## Phase 3: React Fundamentals (Weeks 5-6) 🔄 IN PROGRESS

### Week 5: React Components - Migration Mode

**Learning by doing**: Migrate real components from your Next.js portfolio.

**Component: Header** (First Migration)
- [ ] Understand the source Header component (`portfolio-nextjs/src/components/common/header.tsx`)
- [ ] Learn component structure (function components)
- [ ] Learn JSX syntax
- [ ] Learn `useState` hook (mobile menu toggle)
- [ ] Learn event handlers (`onClick`)
- [ ] Create `src/components/common/header.tsx` in Vite project
- [ ] Style with existing Tailwind classes
- [ ] Integrate Header into App.tsx

**Concepts You'll Learn**:
| Concept | Where in Header |
|---------|-----------------|
| Function components | `export function Header()` |
| JSX syntax | The return statement HTML-like code |
| `useState` hook | `const [isMenuOpen, setIsMenuOpen] = useState(false)` |
| Event handlers | `onClick={() => setIsMenuOpen(!isMenuOpen)}` |
| Props | Will pass to children later |
| Flexbox | Header layout (Week 4 concept in practice) |

### Week 6: React Hooks

- [ ] Learn useState hook
- [ ] Understand useEffect hook
- [ ] Learn event handlers
- [ ] Convert HTML/CSS to React components
- [ ] Add state for mobile menu toggle

---

## Phase 4: Tailwind CSS (Week 7) ⬜ NOT STARTED

**Tasks**:

- [ ] Learn utility-first approach
- [ ] Configure Matrix theme colors
- [ ] Practice with component styling

---

## Phase 5: shadcn/ui (Week 8) ⬜ NOT STARTED

**Tasks**:

- [ ] Install and configure shadcn/ui
- [ ] Add: button, card, input, textarea, sheet
- [ ] Customize components with Matrix theme
- [ ] Integrate Sheet into Header

**Installation Commands**:

```bash
bunx --bun shadcn@latest init
bunx --bun shadcn@latest add button card input textarea sheet
```

---

## Phase 6: Vite & Routing (Weeks 9-10) ⬜ NOT STARTED

**Tasks**:

- [ ] Understand Vite vs Next.js
- [ ] Install react-router-dom
- [ ] Copy assets from Next.js
- [ ] Set up routes

---

## Phase 7: TanStack Query (Weeks 11-12) ⬜ NOT STARTED

**Tasks**:

- [ ] Learn useQuery hook
- [ ] Learn useMutation hook
- [ ] Create service layer
- [ ] Handle loading/error states

---

## 📝 Session Notes

### Week 2 (HTML Fundamentals)

- **Day 1**: Learned `for`/`id` relationship, form submission sends `name` not `id`
- **Day 2**: Understood `<textarea>` is separate element, fixed in contacts.html

### Week 3: CSS Fundamentals (CSS Basics, Box Model & Layout)

- **Day 1**: Learned CSS variables in `:root`, how `var()` works, creating custom properties
- **Day 2**: Learned universal selector `*`, CSS reset (`margin: 0`, `padding: 0`, `box-sizing: border-box`), and how `box-sizing: border-box` fixes width issues
- **Day 3**: Learned HTML element `font-size: 16px` base for `rem` units, body base styles, line-height for accessibility
- **Day 4**: Learned typography, link pseudo-classes (`:hover`, `:focus`), text-shadow for glow effects, matrix effects (scanlines, cursor blink animation)
- **Day 5**: Implemented complete `styles.css` with Matrix theme from source portfolio, added Google Fonts and CSS link to `index.html`
- **Day 2**: Learned universal selector `*`, CSS reset (`margin: 0`, `padding: 0`, `box-sizing: border-box`), and how `box-sizing: border-box` fixes width issues
- **Day 3**: Learned HTML element `font-size: 16px` base for `rem` units, body base styles, line-height for accessibility
- **Day 4**: Learned typography, link pseudo-classes (`:hover`, `:focus`), text-shadow for glow effects, matrix effects (scanlines, cursor blink animation)
- **Day 5**: Implemented complete `styles.css` with Matrix theme from source portfolio, added Google Fonts and CSS link to `index.html`

---

## 📦 Component Migration Checklist

| Component | Destination | Phase | Status |
|-----------|-------------|-------|--------|
| Button | `src/components/common/base-button.tsx` | 5-6 | ⬜ |
| Header | `src/components/common/header.tsx` | 5-6 | ⬜ |
| TypingText | `src/components/common/typing-text.tsx` | 5-6 | ⬜ |

### Week 8: shadcn/ui Migration

| Component | shadcn Component | Status |
|-----------|------------------|--------|
| Button | `@/components/ui/button` | ⬜ |
| Card | `@/components/ui/card` | ⬜ |
| Input | `@/components/ui/input` | ⬜ |
| Textarea | `@/components/ui/textarea` | ⬜ |
| Sheet | `@/components/ui/sheet` | ⬜ |

---

## ✅ Final Completion Checklist

- [ ] All components migrated from Next.js to Vite
- [ ] Matrix theme fully implemented in Tailwind
- [ ] shadcn/ui components integrated and customized
- [ ] Routing working (react-router-dom)
- [ ] TanStack Query for data fetching
- [ ] Contact form functional with mutation
- [ ] TypeScript type checking passes (`bun run typecheck`)
- [ ] Build succeeds (`bun run build`)
- [ ] All pages responsive and styled
- [ ] Animations working (typing, cursor blink, scanlines)

---

## 🚀 Deployment Checklist

- [ ] Run `bun run typecheck`
- [ ] Run `bun run lint`
- [ ] Run `bun run build`
- [ ] Test `bun run preview`
- [ ] Update index.html metadata
- [ ] Add favicons
- [ ] Deploy to hosting

---

## 📚 Learning Resources

### HTML/CSS

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)

### React

- [React Official Docs](https://react.dev/)
- [React Tutorial](https://react.dev/learn)

### Tailwind CSS

- [Tailwind Docs](https://tailwindcss.com/docs/)
- [Tailwind Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)

### shadcn/ui

- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [class-variance-authority](https://cva.style/)

### TanStack Query

- [TanStack Query Docs](https://tanstack.com/query/latest)

---

*Last Updated: January 27, 2026*
