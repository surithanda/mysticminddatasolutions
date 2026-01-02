# MysticMind Data Solutions

An AI and cloud analytics company website built with Next.js, showcasing data solutions, AI services, and innovative technologies.

## Tech Stack

- **Framework**: Next.js 15.1.7 (React 19)
- **Styling**: TailwindCSS, SCSS
- **Animations**: GSAP, Framer Motion
- **Forms**: Formik + Yup
- **Content**: Markdown (gray-matter)
- **Deployment**: Azure Static Web Apps

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Mail Service Configuration
NEXT_PUBLIC_MAIL_API_URL=https://mail-sender.accurateweb.in/api/template/930c3d470c93484b/send
NEXT_PUBLIC_MAIL_TOKEN=your_mail_token_here
```

Refer to `.env.example` for all required environment variables.

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
# or
yarn build
```

The static site will be exported to the `out/` directory.

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
│   ├── animation/        # Animation components
│   ├── shared/          # Shared/reusable components
│   ├── home/            # Home page sections
│   └── ...
├── data/                 # JSON and Markdown content
├── hooks/                # Custom React hooks
├── public/               # Static assets
├── scss/                 # SCSS stylesheets
└── utils/                # Utility functions
```

## Deployment

This project is configured for deployment on Azure Static Web Apps via GitHub Actions.

### Setup Azure Deployment

1. Create an Azure Static Web App resource
2. Add deployment token to GitHub Secrets as `AZURE_STATIC_WEB_APPS_API_TOKEN_GENTLE_COAST_08771761E`
3. Push to `main` branch to trigger deployment

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production static site
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)

