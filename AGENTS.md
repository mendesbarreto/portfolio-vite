# AGENTS.md

## Project Setup

- **Package Manager:** bun
- **Framework:** Vite + React
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS
- **State Management:** TanStack Query
- **Linting/Formatting:** Biome
- **Testing:** Playwright (Chromium only)

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Check code with Biome
- `bun run lint:fix` - Fix code issues with Biome
- `bun run typecheck` - Run TypeScript type checking
- `bun run test` - Run Playwright tests
- `bun run test:ui` - Run Playwright tests with UI

## Code Style (Biome Configuration)

- Indentation: 2 spaces
- Line width: 100 characters
- Quotes: Single quotes
- Semicolons: Required
- Trailing commas: All

## Project Structure

```
src/
├── components/        # Shared components
├── features/          # Feature-based modules
│   └── [feature]/
│       ├── components/  # Feature-specific components
│       ├── hooks/        # Feature-specific hooks
│       ├── services/     # API calls for this feature
│       └── types/        # TypeScript types
├── hooks/            # Shared React hooks
├── lib/              # Utility libraries
├── services/         # Shared API services
└── types/            # Shared TypeScript types
```

## Git Commit Convention

Use Conventional Commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat(auth): add login form component`

## TanStack Query Guidelines

- Use array-based query keys: `['users', userId]`
- Separate API calls into service files in `features/[feature]/services/`
- Use `useMutation` for write operations
- Configure stale time appropriately for your data
- Use query invalidation after mutations

## Component Conventions

- Use functional components with TypeScript
- Co-locate component types in the same file or in `types/`
- Use Tailwind CSS for styling
- Follow feature-based structure
- Keep components focused and reusable

## Testing (Playwright)

- Tests should be co-located with features: `features/[feature]/__tests__/`
- Use Chromium only
- Test user flows and critical paths
- Use data-testid attributes when needed
