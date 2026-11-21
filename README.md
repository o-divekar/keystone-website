# Keystone Corporation website starter

React + Vite starter for the Keystone Corporation spring-distribution website.

## Requirements
- Node.js 20.19+ or 22.12+
- VS Code

## Run locally (Windows PowerShell)
1. Extract this ZIP.
2. Open the `keystone-corporation` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Current scope
- Responsive homepage
- Products directory with category filters
- Product detail route
- About, Industries, Quality, Gallery and Contact pages
- Mobile navigation
- Motion-based reveal and hover effects
- Working front-end enquiry form validation (demo only)

## Before publishing
- The Keystone logo from the catalogue cover is included at `public/logo/keystone-logo.png`. Replace it with a higher-resolution official logo file if the company supplies one.
- Replace remote demo photography with approved product/factory photographs.
- Verify all company claims, contact details, address, product specifications and Sai Springs relationship wording.
- Connect the enquiry form to a secure backend/email service. The current form is front-end only and does not send or save enquiries.
- Add the original catalogue PDF to `public/documents/` if you want the download button enabled.

## Product content
The initial product data is a starting directory based on categories visible in the supplied catalogue. Review all copy and technical specifications against the original catalogue before publication.

## Latest additions
- Official Keystone PDF catalogue is included at `public/documents/keystone-product-catalogue.pdf`.
- Homepage catalogue preview with download link.
- Dedicated `/catalogue` page with PDF viewer, download/open actions and catalogue category directory.
- Dedicated `/team` page for the Keystone team. Role descriptions are placeholders until approved team names, designations and photographs are supplied.
- Homepage team preview and navigation/footer links.

## Team content to provide before launch
Add approved Keystone team member names, designations, short biographies and photographs. Do not publish placeholder roles as named staff profiles.
