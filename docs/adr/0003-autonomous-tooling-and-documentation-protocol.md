# 3. Autonomous Tooling, Local Installation & Zero-Hallucination Protocol

- **Status**: Approved
- **Date**: 2026-08-30

## Context

To ensure smooth, error-free execution and prevent outdated API hallucinations or broken module imports during portfolio creation, strict rules were required for autonomous local package management, MCP tool utilization, and live context verification.

## Decision

1. **Autonomous Local Installation**: The agent is authorized to detect, install, and manage all necessary npm libraries (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `shadcn/ui` components) directly in the local project directory (`package.json`) without interrupting the user.
2. **Zero-Hallucination Documentation Checks**: Before writing code for Next.js, Framer Motion, or Tailwind, the agent will verify local type definitions, exports, and MCP tools to enforce 100% syntactical accuracy.
3. **MCP Tool Integration**: Full activation of Playwright MCP (visual QA across 1440px, 768px, 375px), Filesystem MCP (resume parsing), and Fetch MCP (design benchmarks).

## Consequences

### Positive
- Eliminates manual package management friction for the user.
- Prevents runtime errors caused by deprecated API usage.
- Ensures all dependencies remain strictly contained in the project workspace without global system pollution.
