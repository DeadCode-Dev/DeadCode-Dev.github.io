# DeadCode Dev Portfolio 🥷

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel)](https://antonious.me)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

## 🌟 Overview

A modern, responsive portfolio website with a unique Japanese-inspired design theme. This Next.js application showcases professional skills, projects, and experience with an elegant samurai aesthetic, featuring smooth animations and an integrated contact system.

**🌐 Live Site:** [antonious.me](https://antonious.me)

## ✨ Features

- 🎨 **Japanese-Inspired Design** - Unique samurai theme with custom graphics
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed
- 📧 **Contact Form** - Integrated email system with Zoho SMTP
- 🔗 **Resume Integration** - Professional resume accessible via navbar
- 🎯 **SEO Optimized** - Comprehensive meta tags and structured data
- 🎭 **Interactive Skills Carousel** - Dynamic skills showcase
- 💼 **Project Gallery** - Detailed project presentations
- 🌙 **Professional Styling** - Clean, modern design with custom CSS variables
- 📊 **Work Experience Timeline** - Interactive experience showcase

## 🛠️ Technology Stack

### Frontend
- **Framework:** Next.js 15.4.1 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0 & Custom CSS
- **Icons:** React Icons
- **Components:** Custom React components

### Backend & Services
- **API Routes:** Next.js API routes for contact form
- **Email Service:** Nodemailer with Zoho SMTP
- **Deployment:** GitHub Pages with GitHub Actions

### Development Tools
- **Linting:** ESLint with Next.js configuration
- **Build Tool:** Next.js built-in bundler
- **Version Control:** Git & GitHub
- **Sitemap:** next-sitemap for SEO

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
5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Alternative Contact Solutions for Static Hosting

If you want to keep using GitHub Pages, consider these alternatives:

1. **EmailJS**: Client-side email sending service
2. **Formspree**: Form handling service for static sites  
3. **Netlify Forms**: If deploying to Netlify
4. **Direct Email Link**: Replace form with `mailto:` link

## 🏗️ Building and Deployment

### Local Build
```bash
npm run build
```

This creates a static export in the `out` directory suitable for static hosting.
## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions deployment workflows
├── public/              # Static assets and resume
│   ├── resume.html      # Professional resume page
│   ├── *.png           # Images and graphics
│   └── robots.txt      # SEO configuration
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes (contact form)
│   │   ├── globals.css # Global styles and CSS variables
│   │   ├── layout.tsx  # Root layout with metadata
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable React components
│   │   ├── Navbar.tsx      # Navigation with Resume link
│   │   ├── Home.tsx        # Hero section
│   │   ├── Skills.tsx      # Skills carousel
│   │   ├── MyProjects.tsx  # Project gallery
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── ContactMe.tsx   # Contact form
│   │   └── *.tsx          # Other UI components
│   └── config/         # Configuration files
├── env.example         # Environment variables template
├── next.config.ts      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Styling
- **CSS Variables:** Defined in `src/app/globals.css` for easy theme customization
- **Component Styling:** Individual components use Tailwind classes with custom CSS
- **Responsive Design:** Mobile-first approach with Tailwind breakpoints

### Content Updates
- **Portfolio Data:** Update project information in component files
- **Resume:** Replace `public/resume.html` with your own resume
- **Contact Info:** Update social links and contact details in components
- **Skills:** Modify skills data in the Skills component

### Adding New Sections
You can easily add new sections by:
1. Creating a new component in `src/components/`
2. Adding it to the main page in `src/app/page.tsx`
3. Adding navigation links in `src/components/Navbar.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Workflow
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the existing code style and conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes locally before submitting

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Additional Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 📞 Contact

**Antonious Youssef** - Backend-Focused Full-Stack Developer

- 📧 Email: [contact@antonious.me](mailto:contact@antonious.me)
- 🔗 LinkedIn: [tony-yousef](https://www.linkedin.com/in/tony-yousef/)
- 🐙 GitHub: [DeadCode-Dev](https://github.com/DeadCode-Dev)
- 🌐 Website: [antonious.me](https://antonious.me)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Antonious Youssef](https://antonious.me)

</div>
