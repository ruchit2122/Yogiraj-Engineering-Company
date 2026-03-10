<div align="center">

# Yogiraj Engineering Company

### Engineering Excellence for Tomorrow's World

A modern, responsive website for **Yogiraj Engineering Company** — a trusted manufacturer of industrial expansion joints, strainers, sight glasses, and piping solutions since 1985.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red)](#license)

</div>

---

## About

Yogiraj Engineering Company is a leading Indian manufacturer based in Vithal Udyognagar, Gujarat, with **35+ years** of experience in precision-engineered industrial components. This website serves as the company's digital presence — showcasing products, services, certifications, and company information.

## Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling** — Lenis-powered smooth scroll experience
- **Animated UI** — Rich animations using Framer Motion
- **Product Catalog** — Browse products by category with detailed pages
- **Service Pages** — Basic, On-Site, and Emergency service information
- **Quality Certificates** — Quality testing and certification showcase
- **News & Gallery** — Company news and photo gallery
- **Contact Form** — Integrated contact form with embedded map
- **SEO Optimized** — Full Open Graph, Twitter Card, and structured meta tags
- **Case Studies** — Real-world engineering project showcases
- **Sustainability** — Company's commitment to responsible engineering

## Tech Stack

| Category      | Technology                                     |
| ------------- | ---------------------------------------------- |
| Framework     | React 19                                       |
| Language      | TypeScript 5.8                                 |
| Build Tool    | Vite 7                                         |
| Styling       | Tailwind CSS 4                                 |
| Routing       | React Router DOM 7                             |
| Animations    | Framer Motion, Motion                          |
| Smooth Scroll | Lenis                                          |
| Icons         | Lucide React, React Icons                      |
| Utilities     | clsx, tailwind-merge, class-variance-authority |
| Linting       | ESLint 9 + TypeScript ESLint                   |

## Prerequisites

Ensure the following are installed on your system:

- **Node.js** — v18.0.0 or higher
- **npm** — v9.0.0 or higher (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/yogiraj-engineering-company.git
cd yogiraj-engineering-company
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server with HMR |
| `npm run build`   | Type-check and build for production   |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint across the project         |

## Project Structure

```
src/
├── App.tsx                  # Root component with route definitions
├── main.tsx                 # Application entry point
├── index.css                # Global styles
├── components/
│   ├── Layout.tsx           # Shared layout (Header + Footer + Outlet)
│   ├── Header/              # Navigation bar & emergency modal
│   ├── Footer/              # Footer with contact info & particles
│   ├── Home/                # Homepage sections (Hero, Products, Services, etc.)
│   ├── About/               # About page components
│   ├── Products/            # Product listing & pagination
│   ├── ProductCatalog/      # Individual product category pages
│   ├── Services/            # Basic, On-Site & Emergency services
│   ├── ServicesCatalog/     # Service catalog listing
│   ├── Contact/             # Contact form, hero & map
│   ├── QltTstCrt/           # Quality testing certificates
│   ├── CaseStudy/           # Engineering case studies
│   ├── NewsGallery/         # News articles & photo gallery
│   ├── Sustainability/      # Sustainability initiatives
│   └── animate-ui/          # Reusable animation primitives
├── Pages/                   # Page-level route components
├── hooks/                   # Custom React hooks (Lenis, InView)
├── lib/                     # Utility functions
└── utils/                   # Helper utilities
```

## Routes

| Path                        | Page                   |
| --------------------------- | ---------------------- |
| `/`                         | Home                   |
| `/about`                    | About Us               |
| `/products`                 | All Products           |
| `/products/:category`       | Product Category       |
| `/services`                 | Services               |
| `/quality-test-certificate` | Quality & Certificates |
| `/case-study`               | Case Studies           |
| `/news-gallery`             | News & Gallery         |
| `/sustainability`           | Sustainability         |
| `/contact`                  | Contact Us             |

## Production Build

Generate an optimized production build:

```bash
npm run build
```

Output is written to the `dist/` directory. Preview locally before deploying:

```bash
npm run preview
```

## Deployment

The production `dist/` folder can be deployed to any static hosting provider:

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm i -D vite-plugin-gh-pages
   ```
2. Set `base` in `vite.config.ts` to your repo name:
   ```ts
   base: "/yogiraj-engineering-company/";
   ```
3. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

### Docker (Optional)

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
docker build -t yogiraj-engineering .
docker run -p 80:80 yogiraj-engineering
```

## Environment Variables

Create a `.env` file in the project root if needed:

```env
VITE_APP_TITLE=Yogiraj Engineering Company
VITE_API_URL=https://api.yogirajengg.com
```

> All client-side env variables must be prefixed with `VITE_`.

## Contributing

This is a private project. For internal contributors:

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Commit changes with descriptive messages:
   ```bash
   git commit -m "feat: add product filter component"
   ```
3. Push and open a Pull Request:
   ```bash
   git push origin feature/your-feature-name
   ```

## License

This project is **proprietary** and confidential. All rights reserved by **Yogiraj Engineering Company**.  
Unauthorized copying, distribution, or modification is strictly prohibited.

---

<div align="center">

**Yogiraj Engineering Company**  
Plot No. C/2/6, GIDC, Vithal Udyognagar, Anand District, Gujarat 388121  
📞 +91 85111 03344 · ✉️ sales@yogirajengg.com  
🌐 [yogirajengg.com](https://yogirajengg.com)

</div>
