

# Angular Monorepo with PNPM and Turborepo

This is a **dummy Angular monorepo setup** using [PNPM](https://pnpm.io), [Turborepo](https://turbo.build), and the Angular CLI. The purpose of this project is to test **injecting internal/shared packages** into Angular apps cleanly and efficiently.



---

## 🚀 What’s Included

- ✅ Angular CLI workspace
- ✅ `apps/web-client` Angular app
- ✅ `packages/shared-ui` (e.g. reusable button)
- ✅ `packages/shared-utils` (e.g. capitalize function)
- ✅ PNPM workspace and dependency linking
- ✅ Turborepo pipeline for build/lint/test
- ✅ Scoped imports via TypeScript path aliases

---

## 📦 Scripts

Run from the root of the monorepo:

| Task              | Command                         | Description                          |
|-------------------|----------------------------------|--------------------------------------|
| Build all         | `pnpm build`                     | Uses Turborepo to build everything   |
| Build app only    | `pnpm --filter web-client build` | Builds web-client and its deps       |
| Dev (if needed)   | `pnpm dev`                       | Turbo task for dev scripts (optional)|
| Lint all          | `pnpm lint`                      | Lints all packages/apps              |
| Test all          | `pnpm test`                      | Runs all test tasks                  |


## 📥 How to Add a New Package or App

```bash
# Create a new library
pnpm --filter web-client exec ng generate library my-lib --project-root=packages/my-lib --prefix=lib

# Add another app (if needed in future)
pnpm dlx @angular/cli new admin-client --directory=apps/admin-client --create-application --strict --routing --style=scss
````

---

## 💡 Usage Example

### `shared-utils/src/lib/capitalize.ts`

```ts
export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
```

### `web-client` App Usage

```ts
import { capitalize } from '@shared-utils';

console.log(capitalize('hello')); // → Hello
```

> Note: TS paths are configured in `tsconfig.base.json`.

---




---


## 🧪 Goal of This Project

The aim is to test and validate:

* Proper injection of shared packages into Angular apps
* Building isolated apps with dependencies
* Monorepo practices using PNPM + Turborepo


