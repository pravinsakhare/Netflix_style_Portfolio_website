# 🎬 Netflix Style Portfolio Website

A stunning, Netflix-inspired personal portfolio website that showcases your projects, skills, and experience with a sleek, modern interface.

![Portfolio Preview](./preview.png)

## 🌟 Live Demo

[View Live Website](#) <!-- Add your deployment URL -->

## ✨ Features

- 🎨 **Netflix-Inspired Design** - Dark theme with smooth animations and modern UI
- 📱 **Fully Responsive** - Perfect viewing experience on all devices
- 🎭 **Horizontal Scrolling Sections** - Netflix-style project rows with smooth navigation
- ⚡ **Fast & Optimized** - Lightning-fast loading with optimized assets
- 🎯 **Interactive Animations** - Engaging hover effects and scroll animations
- 🔍 **SEO Optimized** - Built with best practices for search engines
- ♿ **Accessible** - WCAG compliant with keyboard navigation support
- 📊 **Dynamic Content** - Easy to update projects and information

## 🛠️ Built With

- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (ES6+)** - Modern JavaScript features
- **Lucide React** - Beautiful icon library
- **Vite** - Next-generation frontend build tool

## 📋 Sections

1. **Hero Section** - Eye-catching landing with your name and title
2. **About Me** - Brief introduction and professional summary
3. **Skills** - Technology stack and expertise areas
4. **Projects** - Horizontal scrolling showcase of your best work
5. **Experience** - Professional timeline and education
6. **Contact** - Get in touch form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pravinsakhare/Netflix_style_Portfolio_website.git
   cd Netflix_style_Portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_TITLE=Your Name
   VITE_API_URL=your_api_url_if_needed
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Netflix_style_Portfolio_website/
├── public/
│   ├── images/          # Project images and assets
│   └── favicon.ico      # Site favicon
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/           # Project and personal data
│   │   └── projects.js
│   ├── styles/         # CSS and styling files
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

Edit the data files in `src/data/` to customize:

- **Personal details** (name, title, bio)
- **Projects** (add/remove projects)
- **Skills** (technology stack)
- **Experience** (work history and education)
- **Social links** (GitHub, LinkedIn, etc.)

### Modify Theme Colors

Update `tailwind.config.js` to change the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#141414',
          gray: '#1f1f1f',
        }
      }
    }
  }
}
```

### Add New Sections

Create a new component in `src/components/` and import it in `App.jsx`.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://pravinsakhare.github.io/Netflix_style_Portfolio_website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The optimized files will be in the `dist/` directory.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Pravin Sakhare**

- GitHub: [@pravinsakhare](https://github.com/pravinsakhare)
- LinkedIn: [Your LinkedIn](#) <!-- Add your LinkedIn URL -->
- Portfolio: [Your Website](#) <!-- Add your website URL -->

## 🙏 Acknowledgments

- Inspired by [Netflix](https://www.netflix.com/) interface design
- Icons from [Lucide React](https://lucide.dev/)
- Built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](<img width="1919" height="872" alt="image" src="https://github.com/user-attachments/assets/6a78a62c-de55-455b-b640-1e1dd6c8cc36" />
)

### Mobile View
![Mobile Screenshot](<img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/cad7e766-91ca-45b4-befc-9a76ca66dda3" />
)

### Project Cards
![Project Cards](<img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/478753ef-5dae-4fbf-a8ea-7dfaecc2b071" />
)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ by [Pravin Sakhare](https://github.com/pravinsakhare)
