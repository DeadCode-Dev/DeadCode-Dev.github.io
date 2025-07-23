# DeadCode Dev Portfolio

This is a [Next.js](https://nextjs.org) portfolio website built with TypeScript, featuring a contact form with email integration.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm, or bun

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/DeadCode-Dev/DeadCode-Dev.github.io.git
cd DeadCode-Dev.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```bash
CONTACT_EMAIL=your-email@example.com
CONTACT_PASS=your-app-password
CONTACT_RECEIVER=receiver@example.com
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📧 Email Configuration

The contact form uses Zoho SMTP for sending emails. You need to configure the following environment variables:

- `CONTACT_EMAIL`: Your Zoho email address
- `CONTACT_PASS`: Your Zoho app password (not your regular password)
- `CONTACT_RECEIVER`: Email address to receive contact form submissions

### ⚠️ Important: Static Hosting Limitation

The contact form **will not work** on GitHub Pages or other static hosting platforms because they don't support server-side API routes. For the contact form to function, you need to deploy to a platform that supports serverless functions like:

- **Vercel** (Recommended)
- **Netlify** 
- **Railway**
- **DigitalOcean App Platform**

### Alternative Contact Solutions for Static Hosting

If you want to keep using GitHub Pages, consider these alternatives:

1. **EmailJS**: Client-side email sending service
2. **Formspree**: Form handling service for static sites  
3. **Netlify Forms**: If deploying to Netlify
4. **Direct Email Link**: Replace form with `mailto:` link

### Setting up Zoho App Password

1. Log in to your Zoho Mail account
2. Go to Settings → Security → App Passwords
3. Generate a new app password for this application
4. Use this app password in the `CONTACT_PASS` environment variable

## 🏗️ Building and Deployment

### Local Build
```bash
npm run build
```

This creates a static export in the `out` directory suitable for static hosting.

### Deployment Options

#### Option 1: GitHub Pages (Current Setup) ⚠️
- **Pros**: Free hosting, automatic deployment via GitHub Actions
- **Cons**: API routes don't work (no server-side functionality)
- **Contact Form**: Will not function due to static hosting limitations

The current setup deploys to GitHub Pages using static export. The contact form will be visible but non-functional due to the lack of server-side API support.

#### Option 2: Vercel (Recommended for Full Functionality) ✅
- **Pros**: API routes work, serverless functions, full Next.js support
- **Cons**: Requires Vercel account
- **Contact Form**: Fully functional with email sending

To deploy to Vercel:
1. Import your GitHub repository on [Vercel](https://vercel.com)
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

#### Option 3: Other Platforms
- **Netlify**: Supports Next.js with serverless functions
- **Railway**: Full server deployment
- **DigitalOcean App Platform**: Container-based deployment

### GitHub Pages Deployment (Current)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Required GitHub Secrets

Set up the following secrets in your GitHub repository (Settings → Secrets and variables → Actions):

1. `CONTACT_EMAIL` - Your Zoho email address  
2. `CONTACT_PASS` - Your Zoho app password
3. `CONTACT_RECEIVER` - Email to receive contact form messages

> **Note**: These secrets are set up for future use. The contact form won't work on GitHub Pages due to static hosting limitations.

#### Deployment Process

The deployment happens automatically when you push to the `main` branch:

1. GitHub Actions builds the Next.js application
2. Static files are generated in the `out` directory
3. Files are deployed to GitHub Pages
4. Site is available at your custom domain (antonious.me)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes
│   │   │   └── contact/ # Contact form endpoint
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   └── config/         # Configuration files
├── env.example         # Environment variables template
├── next.config.ts      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Alternative Deployment

While this project is configured for GitHub Pages, you can also deploy to other platforms:

### Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
