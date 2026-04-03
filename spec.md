# Khushi Marble and Granite

## Current State

The website is a full-featured premium marble & granite business site with:
- Navbar, animated hero (uploaded image background), stats bar, collections, showroom gallery, YouTube section, featured projects, why us section, contact snippet, footer
- Advanced animations: floating particles, shimmer text, staggered word reveals, animated counters, marble-gold dividers, 3D card tilt (via Framer Motion), spring hovers, glowing CTA buttons
- Featured Projects section shows 5 project cards with static product images
- No animated logo intro/splash screen
- Hero uses an uploaded showroom photo as background

## Requested Changes (Diff)

### Add
1. **Animated Logo Splash Screen**: A full-screen intro that plays when the website first opens. Shows the KM logo animating in (scale + fade + glow), brand name appearing letter by letter or word by word, gold shimmer line, then the whole splash fades out revealing the main site. Stores a sessionStorage flag so it only plays once per session.
2. **Italian Marble Hero Background**: Replace the current hero background image with the generated Italian Carrara marble texture at `/assets/generated/italian-marble-bg.dim_1920x1080.jpg`.
3. **Hyperlapse Gallery in Featured Projects**: Replace the 5 static stone images in the Featured Projects section with 6 cinematic hyperlapse-style images showing marble/granite applications at home and office:
   - `/assets/generated/hyperlapse-home-living.dim_800x600.jpg` — Living Room Flooring
   - `/assets/generated/hyperlapse-kitchen-granite.dim_800x600.jpg` — Kitchen Countertop
   - `/assets/generated/hyperlapse-office-lobby.dim_800x600.jpg` — Office Lobby
   - `/assets/generated/hyperlapse-bathroom-marble.dim_800x600.jpg` — Luxury Bathroom
   - `/assets/generated/hyperlapse-exterior-granite.dim_800x600.jpg` — Exterior Facade
   - `/assets/generated/hyperlapse-staircase.dim_800x600.jpg` — Grand Staircase
4. **Bold Eye-Catching Animations**:
   - Parallax scroll effect on the hero image (moves slower than scroll)
   - Kinetic text effect on section headings (characters animate in one by one)
   - Magnetic hover on CTA buttons (button subtly follows cursor)
   - Ripple/wave reveal on the Featured Projects section images
   - Add a bold "HYPERLAPSE SHOWCASE" label/badge on each project card
   - Glowing gold border pulse on hovered project cards

### Modify
- `src/frontend/src/App.tsx`: Wrap app with splash screen logic — show `LogoSplash` component before routing if session is fresh
- `src/frontend/src/pages/Home.tsx`: Update hero background, update featuredProjects array, enhance animations

### Remove
- Nothing removed

## Implementation Plan

1. Create `src/frontend/src/components/LogoSplash.tsx` — animated full-screen splash component using Framer Motion. Logo scales + glows in, text animates, gold shimmer line sweeps, then entire screen fades/slides up. Uses `sessionStorage` to skip on revisit.
2. Modify `src/frontend/src/App.tsx` — import and render `LogoSplash` with `AnimatePresence` above the router so it overlays the page on first load.
3. Modify `src/frontend/src/pages/Home.tsx`:
   a. Change `HERO_IMAGE` to `/assets/generated/italian-marble-bg.dim_1920x1080.jpg`
   b. Replace `featuredProjects` array with hyperlapse images and new titles/locations
   c. Add parallax scroll effect on hero using `useScroll` + `useTransform` from Framer Motion
   d. Enhance Featured Projects cards: add badge, glowing border, ripple reveal animation
4. Validate and build
