# Local Setup Guide - Shashwat Sharma Portfolio

## 📋 Prerequisites

Before setting up locally, ensure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** - VS Code recommended

## 🚀 Quick Setup

1. **Clone/Download the project**
   ```bash
   # If using Git
   git clone <your-repo-url>
   cd portfolio
   
   # Or download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit: `http://localhost:5000`
   - Your portfolio will be running locally!

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/    # All UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/          # Utilities and helpers
│   │   └── hooks/        # Custom React hooks
├── server/                # Backend Express server
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API endpoints
│   └── storage.ts        # Data storage logic
├── shared/                # Shared types and schemas
├── attached_assets/       # Your resume and images
├── package.json          # Dependencies and scripts
└── README.md            # Documentation
```

## 🛠️ Available Scripts

```bash
# Start development server (frontend + backend)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check
```

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`client/src/components/hero-section.tsx`)
   - Name, role, specialization
   - Typing animation text

2. **About Section** (`client/src/components/about-section.tsx`)
   - Professional summary
   - Experience details

3. **Skills Section** (`client/src/components/skills-section.tsx`)
   - Technical skills with percentages
   - Technology stack

4. **Projects Section** (`client/src/components/projects-section.tsx`)
   - Project details, descriptions, links
   - Technologies used

5. **Experience Section** (`client/src/components/experience-section.tsx`)
   - Work experience timeline
   - Education details
   - Awards and achievements

6. **Contact Section** (`client/src/components/contact-section.tsx`)
   - Contact information
   - Social media links

### Replace Resume

1. Put your resume PDF in `attached_assets/`
2. Update filename in `server/routes.ts` (line 39)

### Add Your Photo

1. Replace the stock image in `about-section.tsx`
2. Or add your photo to `attached_assets/` and import it

## 🎨 Styling

The portfolio uses:
- **Tailwind CSS** for styling
- **VS Code color scheme** (defined in `client/src/index.css`)
- **Responsive design** (mobile-first)

### Color Scheme
- Background: Dark theme inspired by VS Code
- Primary: Blue (#007acc)
- Secondary: Cyan, Orange, Green
- Text: Light gray/white

## 📱 Mobile Responsive

The portfolio is fully responsive and tested on:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔍 Troubleshooting

### Port Already in Use
If you get `EADDRINUSE` error:
```bash
# Kill process using port 5000
npx kill-port 5000
npm run dev
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
# Check for TypeScript errors
npm run check

# Clean build
rm -rf dist/
npm run build
```

## 📦 Deployment

The portfolio is configured for:
- **Vercel** (vercel.json)
- **Netlify** (netlify.toml)
- **GitHub Pages**
- **Railway**

See `README.md` for detailed deployment instructions.

## 🤝 Need Help?

If you encounter any issues:
1. Check the terminal for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version (v18+)
4. Check that port 5000 is available

## 📞 Contact

- Email: shashwatsharma111@gmail.com
- LinkedIn: [linkedin.com/in/shashwatsharma1211](https://linkedin.com/in/shashwatsharma1211)
- GitHub: [github.com/Shashwat1112](https://github.com/Shashwat1112)

---

Your portfolio is now ready to run locally! 🚀