# Dependency Update Notes - November 18, 2025

## Summary
Updated most dependencies to their latest versions. Some major version updates were not possible due to breaking changes that would require significant code refactoring.

## Successfully Updated

### Minor/Patch Updates
- `@nuxtjs/tailwindcss`: ^6.12.2 → ^6.14.0
- `@types/webpack-env`: ^1.18.5 → ^1.18.8
- `babel-eslint`: ^10.0.1 → ^10.1.0
- `eslint-config-prettier`: ^9.1.0 → ^10.1.8
- `prettier`: ^3.4.2 → ^3.6.2
- `typescript`: ^4.9.5 → ^5.9.3

### Infrastructure Changes
- Replaced `node-sass` with `sass` (Dart Sass) - node-sass is deprecated
- Added `@fortawesome/free-solid-svg-icons` to replace FontAwesome Pro icons
- Added `string-replace-loader` as explicit dependency (required by nuxt-lazy-load)
- Added webpack override to force webpack 4.x (required for Nuxt 2 compatibility)

## Reverted / Not Updated

### Nuxt Framework (MAJOR BREAKING CHANGE)
**Package:** `nuxt`
**Attempted:** ^2.18.1 → ^4.2.1
**Reverted to:** ^2.18.1
**Reason:** Nuxt 4 requires Vue 3, but this project uses Vue 2. Migrating would require:
- Complete rewrite of components for Vue 3 Composition API
- Update all Nuxt modules to Vue 3 compatible versions
- Significant testing and refactoring
**Future Action:** Consider planning a full migration to Nuxt 3/4 with Vue 3 as a separate major project

### ESLint (MAJOR BREAKING CHANGE)
**Package:** `eslint`
**Attempted:** ^8.57.1 → ^9.39.1
**Reverted to:** ^8.57.1
**Reason:** ESLint 9 has peer dependency conflicts with:
- `@nuxtjs/eslint-config-typescript` (requires ESLint ^8.x)
- `@nuxtjs/eslint-module` (requires ESLint ^8.x)
**Future Action:** Wait for Nuxt 2 ecosystem packages to support ESLint 9, or migrate to Nuxt 3/4

### FontAwesome (PEER DEPENDENCY CONFLICT)
**Packages:**
- `@fortawesome/fontawesome-svg-core`: ^6.7.2 (kept at 6.x, not 7.x)
- `@fortawesome/free-brands-svg-icons`: ^6.7.2 (kept at 6.x, not 7.x)
- `@fortawesome/vue-fontawesome`: ^2.0.10 (kept at 2.x, not 3.x)

**Reason:**
- FontAwesome 7.x is incompatible with vue-fontawesome 2.x
- vue-fontawesome 3.x requires Vue 3
**Future Action:** Will be resolved when migrating to Vue 3

### Sitemap Module (BREAKING CHANGE)
**Package:** `@nuxtjs/sitemap`
**Attempted:** ^2.4.0 → ^7.4.7
**Reverted to:** ^2.4.0
**Reason:** Version 7.x is for Nuxt 3/4 only
**Future Action:** Will be resolved when migrating to Nuxt 3/4

### Sass Loader (WEBPACK COMPATIBILITY)
**Package:** `sass-loader`
**Attempted:** ^10.4.1 → ^16.0.6
**Reverted to:** ^10.4.1
**Reason:** Newer versions require webpack 5, but Nuxt 2 uses webpack 4
**Future Action:** Will be resolved when migrating to Nuxt 3/4

### Nuxt Lazy Load (BREAKING CHANGE)
**Package:** `nuxt-lazy-load`
**Attempted:** ^1.3.0 → ^3.0.5
**Reverted to:** ^1.3.0
**Reason:** Version 3.x is for Nuxt 3 only
**Future Action:** Will be resolved when migrating to Nuxt 3/4

## Code Changes Made

### plugins/fontawesome.ts
- Removed dependency on `../pro-light-svg-icons` (FontAwesome Pro package not available)
- Switched to using `@fortawesome/free-solid-svg-icons` instead
- Simplified icon registration by adding entire `fas` library instead of individual icons
- All icons remain available, just using solid style instead of light style

### package.json
- Added webpack override: `"webpack": "^4.47.0"` to prevent webpack 5 from being installed
- Existing vue override maintained: `"vue": "2.7.16"`

## Known Warnings

### Sass Legacy JS API Deprecation
The build shows warnings about Sass legacy JS API deprecation. This is expected because:
- We're using Dart Sass (the modern implementation)
- With webpack 4 and sass-loader 10 (which use the legacy API)
- When we migrate to Nuxt 3/4 with webpack 5, this warning will be resolved

### Security Vulnerabilities
There are 70 vulnerabilities reported by npm audit. Many of these are in dependencies of Nuxt 2 and its ecosystem, which has reached EOL. These cannot be fully resolved without migrating to Nuxt 3/4.

## Recommendations

1. **Short-term:** The current dependency updates are safe and working correctly
2. **Medium-term:** Monitor for any security patches to Nuxt 2.x dependencies
3. **Long-term:** Plan a migration to Nuxt 3 or Nuxt 4 to get:
   - Latest dependency versions
   - Better performance
   - Active security updates
   - Vue 3 features
   - Webpack 5 or Vite

## Build Status
✅ Build: Successful
✅ Dev Server: Working
✅ Generate: Working
⚠️ Warnings: Expected (Sass legacy API, asset sizes)
