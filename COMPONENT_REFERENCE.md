# Component Reference Guide

## 🎨 Matrix Theme Colors

### CSS Variables
```css
--color-background: #050505;
--color-background-light: #0b1a20;
--color-backgroundLight: #14282f;
--color-m-purple: #008f11;
--color-m-red: #2c4a6b;
--color-m-green: #008f11;
--color-m-yellow: #39ff14;
--color-m-blue: #2b2b2b;
--color-m-teal: #00ffcc;
--color-m-gray: #e0e0e0;
```

### Tailwind Utility Mapping
| CSS Variable | Tailwind Class |
|--------------|----------------|
| --color-mTeal | text-mTeal, border-mTeal, bg-mTeal |
| --color-background | bg-background |
| --color-backgroundLight | bg-backgroundLight |

---

## 🏗️ Component Structure

### Common Components (`src/components/common/`)

#### Button
```tsx
interface ButtonProps {
  onClick?: () => void;
  title: string;
  className?: string;
}
```

**Usage**:
```tsx
<Button title="Click me" onClick={handleClick} />
```

---

#### Terminal Block
```tsx
interface TerminalBlockProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}
```

**Usage**:
```tsx
<TerminalBlock title="terminal">
  <span>Command output</span>
</TerminalBlock>
```

---

#### Header
```tsx
// Uses state for mobile menu
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

**Features**:
- Responsive navigation (hamburger menu on mobile)
- Links to Home, About, Contacts
- Logo integration

---

#### Typing Text
```tsx
interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // default: 100ms
}
```

**Usage**:
```tsx
<TypingText text="Hello, World!" speed={100} />
```

---

### Feature Components

#### Highlights (`src/features/home/components/highlights.tsx`)
- Uses array of achievement objects
- Grid layout with Tailwind
- Hover effects with scale and glow

#### Project List (`src/features/home/components/project-list.tsx`)
- State for expandable cards
- Filter by project type (optional)
- Uses TanStack Query for data

---

## 📊 Data Models

### Project Interface
```typescript
interface Project {
  name: string;
  shortDescription: string;
  types: string[];
  company?: string;
  role?: string;
  timePeriod?: string;
  link?: string;
  highlights?: string[];
}
```

### Achievement Interface
```typescript
interface Achievement {
  icon: string;
  title: string;
  value: string;
  label: string;
  description: string;
  color: string;
}
```

---

## 🚀 TanStack Query Patterns

### Query Keys
```typescript
['projects']              // All projects
['projects', id]          // Single project
['achievements']          // Achievements
['experience']            // Experience
['education']             // Education
['skills']               // Skills
```

### Custom Hooks
```typescript
// Fetch all projects
export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 10,
  });
}

// Submit contact form
export function useSubmitContact() {
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
}
```

---

## 🎯 Next.js to React Migration Patterns

### Imports
```tsx
// Next.js
import Link from 'next/link';
import Image from 'next/image';

// React + React Router
import { Link } from 'react-router-dom';
<img src="/path/to/image.jpg" alt="Description" />
```

### Directives
```tsx
// Next.js
"use client";

// React (not needed in Vite)
// All components are client-side by default
```

### Routing
```tsx
// Next.js (file-based)
// /about/about.tsx

// React Router
<Route path="/about" element={<About />} />
```

---

## 📚 Common Tailwind Classes Reference

### Spacing
- `p-4` - padding: 1rem (16px)
- `m-2` - margin: 0.5rem (8px)
- `gap-4` - gap: 1rem (16px)
- `px-4` - horizontal padding: 1rem
- `py-2` - vertical padding: 0.5rem

### Typography
- `text-xl` - font-size: 1.25rem
- `font-bold` - font-weight: 700
- `text-center` - text-align: center
- `text-mTeal` - color: var(--color-mTeal)

### Layout
- `flex` - display: flex
- `flex-col` - flex-direction: column
- `justify-center` - justify-content: center
- `items-center` - align-items: center
- `grid` - display: grid
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` - Responsive columns

### Borders & Colors
- `border border-mTeal` - border with teal color
- `rounded-lg` - border-radius: 0.5rem
- `bg-background` - background color
- `bg-backgroundLight` - lighter background

### Interactive
- `hover:bg-mTeal` - background on hover
- `hover:scale-105` - scale up on hover
- `transition-all` - smooth transitions
- `cursor-pointer` - pointer cursor

---

*Last Updated: January 12, 2026*