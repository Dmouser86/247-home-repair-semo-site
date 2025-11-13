
# 24/7 Home Repair SEMO — Static Website (GitHub Pages)

Owner: **Danny Mouser**  
Brand: **24/7 Home Repair SEMO** (general contractor; includes a dedicated 24/7 emergency page)  
Domain: **247homerepairsemo.com**

## Quick Start
1. Create a new **public** GitHub repo (e.g., `247homerepairsemo-site`).
2. Upload these files to the repo (or drag-and-drop the ZIP contents).
3. Go to **Settings → Pages → Source: Deploy from branch → Branch: main → /root**.
4. (Optional) Add custom domain: set **CNAME** in GitHub Pages to `247homerepairsemo.com` and create these DNS records at your registrar:
   - `A` @ → 185.199.108.153 / .109.153 / .110.153 / .111.153 (GitHub Pages)
   - or use CNAME `www → your-username.github.io`
5. The site will be live at your GitHub Pages URL, then at your custom domain once DNS propagates.

## Replace These Placeholders
- **Phone number** in footer, emergency page, and contact page: `(573) 000-0000` → your real number.
- **Email**: `hello@247homerepairsemo.com` → your real mailbox or forwarder.
- **Images**: Replace `/assets/images/*` with your phone photos. Keep filenames descriptive (city + service).

## Enable a Real Contact Form
GitHub Pages can't run server code. Use one of the following:
- **Google Forms**: Create a form → Share → copy the form URL → replace the `action` on `/contact.html` and map fields.
- **Formspree / Basin / Netlify Forms**: Add their provided form `action` and hidden inputs.
- **Mailto fallback** already included.

## Analytics & Tracking (Optional)
- Create GA4 property → copy Measurement ID → paste the gtag snippet in all pages right before `</head>`.

## SEO Tips
- Update `<title>` and `<meta description>` for each page with city/service keywords.
- Keep the **Emergency** page as a dedicated URL to rank for “24/7 repair” searches without dominating your homepage.
- Add alt text to all photos and include the **city** in captions for local SEO.

## Structure
- Clean, mobile-first CSS, no frameworks.
- Accessible navigation with mobile menu.
- JSON-LD schema for a Local Business.
- Dedicated **/emergency.html** with direct call button.

## No Mentions of Other Brands
- This repo is strictly for **24/7 Home Repair SEMO** (owner: **Danny Mouser**). No references to Rock Solid Drywall or other entities.

---

**Edit once, deploy everywhere.** Swap your photos and real contact info and you're live.
