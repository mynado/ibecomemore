# ibecomemore

Monorepo for the **“I Become More With You”** project.

This repository contains a **Next.js frontend** and a **Sanity Studio CMS**, managed with **pnpm workspaces**.

---

## 📁 Project Structure

```

/frontend   → Next.js website (production app)
/studio     → Sanity CMS (content management)
/package.json
/pnpm-workspace.yaml

```

---

## 🚀 Getting Started

### 1. Install dependencies

From the repo root:

```bash
pnpm install
```

---

### 2. Run development (both apps)

```bash
pnpm dev
```

This will start:

- Frontend (Next.js)
- Sanity Studio (CMS)

---

### 3. Run apps individually

#### Frontend only

```bash
pnpm dev:frontend
```

#### Studio only

```bash
pnpm dev:studio
```

---

## 🌐 Applications

### Frontend (Next.js)

- Located in `/frontend`
- Main public website
- Deployed on Vercel

**Local dev:**

```bash
cd frontend
pnpm dev
```

---

### Studio (Sanity CMS)

- Located in `/studio`
- Content management system
- Used to manage website content

**Local dev:**

```bash
cd studio
pnpm dev
```

---

## 🚀 Deployment

### Frontend (Vercel)

In Vercel project settings:

- **Root Directory:** `frontend`
- Framework: Next.js

---

### Studio (optional Vercel deployment)

You can deploy Sanity Studio separately:

- Root Directory: `studio`
- Build command: `pnpm build`
- Output: Sanity-managed build

---

## 🧠 Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- pnpm

### CMS

- Sanity v5
- React-based Studio
- GROQ queries

### Monorepo

- pnpm workspaces
- concurrently (dev orchestration)

---

## ⚙️ Workspace Setup

This repo uses pnpm workspaces defined in:

```
pnpm-workspace.yaml
```

```yaml
packages:
  - "frontend"
  - "studio"
```

Each app is an independent package with its own `package.json`.

---

## 🛠 Useful Commands

### Root commands

```bash
pnpm dev          # run both apps
pnpm install      # install all dependencies
```

### Frontend

```bash
pnpm dev:frontend
pnpm --filter frontend build
```

### Studio

```bash
pnpm dev:studio
pnpm --filter studio build
```

---

## 📌 Notes

- `.next`, `node_modules`, and build files are ignored via `.gitignore`
- Each app can be deployed independently
- Future shared code can live in `/packages`

---
