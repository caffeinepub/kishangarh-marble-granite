# Kishangarh Marble & Granite

## Current State
The site uses a cream/black/gold theme. The Navbar, Footer, and LogoSplash all reference `/assets/generated/kmg-logo-new.dim_400x400.png`. Text color issues persist: some text that appears on light cream/beige backgrounds is rendering with insufficient contrast (appears too faint/invisible). The `--muted-foreground` CSS variable is `0.45 0.01 60` (mid-grey), and some sections may still inadvertently use `text-white` on light backgrounds.

## Requested Changes (Diff)

### Add
- Nothing new to add.

### Modify
1. **Logo**: Replace the logo path `/assets/generated/kmg-logo-new.dim_400x400.png` in Navbar.tsx, Footer.tsx, and LogoSplash.tsx with the user-uploaded image path: `/assets/whatsapp_image_2026-03-27_at_11.07.47_pm-019d5210-5819-74a6-82a2-5e1432458363.jpeg`
2. **Text color fix**: Ensure ALL text on light backgrounds (bg-background, bg-beige, bg-card, bg-white sections) uses proper dark colors:
   - All body/description text: `text-foreground` (0.15 0.01 60 - near black) or `text-muted-foreground` (must be darkened to at least 0.35 lightness)
   - Increase `--muted-foreground` in index.css from `0.45 0.01 60` to `0.30 0.01 60` for better readability
   - Scan all pages (Home.tsx, About.tsx, Contact.tsx, Marble.tsx, Granite.tsx, Exotic.tsx, ProductDetail.tsx) for any `text-white` or `text-white/XX` that appear on non-dark-background sections and change them to `text-foreground` or `text-gold`
3. **About page values section**: `text-muted-foreground` on `bg-background` - ensure readable
4. **Contact page**: Check all text colors on `bg-background` and `bg-beige` sections

### Remove
- Nothing to remove.

## Implementation Plan
1. Update the `NEW_LOGO` constant in Navbar.tsx and Footer.tsx to point to the uploaded image path
2. Update `LOGO_SRC` in LogoSplash.tsx to point to the uploaded image path
3. In index.css, darken `--muted-foreground` from `0.45 0.01 60` to `0.28 0.012 60` so descriptive text is always clearly readable on ivory/cream/beige backgrounds
4. Scan all page files and fix any `text-white` usage that is NOT inside a dark-background section (bg-dark, inline dark gradient overlay, etc.)
5. Validate build
