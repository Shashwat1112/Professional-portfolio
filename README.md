# Shashwat Sharma - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js, featuring a VS Code-inspired design.

## 🌟 Features

- **Modern Design**: VS Code-inspired dark theme with syntax highlighting
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Typing animations, smooth scrolling, and hover effects
- **Professional Showcase**: Complete overview of skills, projects, and experience
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct download of resume PDF

## 🚀 Free Deployment Options

This portfolio is configured for multiple free hosting platforms:

### 1. **Vercel** (Recommended)
- **Features**: Zero-config deployment, global CDN, automatic HTTPS
- **Steps**:
  1. Push your code to GitHub
  2. Visit [vercel.com](https://vercel.com) and sign up
  3. Connect your GitHub repository
  4. Deploy with one click
- **Free Tier**: 100GB bandwidth, custom domains, SSL certificates

### 2. **Netlify**
- **Features**: Build automation, form handling, edge functions
- **Steps**:
  1. Push your code to GitHub
  2. Visit [netlify.com](https://netlify.com) and sign up
  3. Connect your repository
  4. Deploy automatically
- **Free Tier**: 100GB bandwidth, 300 build minutes, custom domains

### 3. **GitHub Pages**
- **Features**: Free hosting for public repositories
- **Steps**:
  1. Push code to GitHub
  2. Go to repository Settings > Pages
  3. Select source branch
  4. Access at `username.github.io/repository-name`
- **Free Tier**: Unlimited public repositories

### 4. **Railway**
- **Features**: Full-stack hosting with database support
- **Steps**:
  1. Visit [railway.app](https://railway.app)
  2. Connect GitHub repository
  3. Deploy with automatic builds
- **Free Tier**: $5 monthly credits, perfect for portfolios

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── lib/          # Utilities
├── server/                # Express backend
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage
├── shared/                # Shared types and schemas
└── attached_assets/       # Static assets (resume, images)
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `netlify.toml` - Netlify deployment configuration
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration

## 🎨 Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- React Hook Form for form handling
- TanStack Query for API calls

**Backend:**
- Express.js with TypeScript
- In-memory storage (easily upgradeable to database)
- Zod for validation
- File serving for resume download

## 📱 Mobile Responsive

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🔐 Privacy & Security

- No sensitive data exposed in client-side code
- Contact form validation on both client and server
- Secure file serving for resume downloads
- Environment-based configuration

## 🚀 Quick Deploy

1. **Fork this repository**
2. **Choose your platform:**
   - Vercel: Connect GitHub → Deploy
   - Netlify: Connect GitHub → Deploy
   - Railway: Connect GitHub → Deploy
3. **Done!** Your portfolio is live

## 📞 Contact

- **Email**: shashwatsharma111@gmail.com
- **LinkedIn**: [linkedin.com/in/shashwatsharma1211](https://linkedin.com/in/shashwatsharma1211)
- **GitHub**: [github.com/Shashwat1112](https://github.com/Shashwat1112)

---

Built with ❤️ by Shashwat Sharma