# Download Instructions - Shashwat Sharma Portfolio

## 📥 How to Download Your Portfolio

### Method 1: Direct Download from Replit
1. **In your Replit project**, click the **three dots menu** (⋮) in the top right
2. Select **"Download as ZIP"**
3. Extract the ZIP file on your computer
4. Open the extracted folder in your code editor

### Method 2: Copy Files Manually
If download option is not available:
1. **Select all files** in the Replit file explorer
2. **Copy the entire project structure** to your local machine
3. **Recreate the folder structure** as shown below

## 📁 Complete File Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                    # Shadcn UI components
│   │   │   ├── about-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── terminal-window.tsx
│   │   │   └── typing-animation.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── animations.ts
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── attached_assets/
│   └── Resume of Shashwat Sharma_1751698017063.pdf
├── components.json
├── drizzle.config.ts
├── netlify.toml
├── package.json
├── postcss.config.js
├── README.md
├── LOCAL_SETUP.md
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

## 🚀 After Download - Setup Steps

1. **Open terminal/command prompt** in the downloaded folder

2. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose the LTS version

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   - Visit: `http://localhost:5000`
   - Your portfolio will be running locally!

## 🛠️ What You'll Need on Your System

- **Node.js** (v18 or higher)
- **Code Editor** (VS Code recommended)
- **Git** (optional, for version control)
- **Web browser** (Chrome, Firefox, Safari, Edge)

## 📋 Key Files to Customize

1. **Your Information**
   - `client/src/components/hero-section.tsx` - Name, role, intro
   - `client/src/components/about-section.tsx` - Professional summary
   - `client/src/components/contact-section.tsx` - Contact details

2. **Your Resume**
   - Replace file in `attached_assets/`
   - Update filename in `server/routes.ts`

3. **Your Projects**
   - `client/src/components/projects-section.tsx` - Add your projects
   - `client/src/components/skills-section.tsx` - Update skills

## 🌐 Deployment Options

After local setup, deploy to:
- **Vercel** - vercel.com (recommended)
- **Netlify** - netlify.com
- **GitHub Pages** - github.com
- **Railway** - railway.app

All deployment configurations are included!

## 🆘 Need Help?

If you encounter issues:
1. Check that Node.js is installed: `node --version`
2. Ensure you're in the correct folder
3. Try clearing cache: `npm cache clean --force`
4. Reinstall dependencies: `rm -rf node_modules && npm install`

## 📞 Contact

- Email: shashwatsharma111@gmail.com
- LinkedIn: [linkedin.com/in/shashwatsharma1211](https://linkedin.com/in/shashwatsharma1211)
- GitHub: [github.com/Shashwat1112](https://github.com/Shashwat1112)

---

Your professional portfolio is ready to showcase your skills! 🚀