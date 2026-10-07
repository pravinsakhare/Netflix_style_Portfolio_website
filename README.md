# 🎬 Netflix Style Portfolio Website

A stunning, Netflix-inspired personal portfolio website that showcases your projects, skills, and experience with a sleek, modern interface.

<img width="1919" height="879" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/32883ca7-4f74-4176-9a0a-c25345034b9d" />

## 🌟 Live Demo

**[View Live Website](https://gzzmonk.space/)**

## ✨ Features

- 🎨 **Netflix-Inspired Design** - Dark theme with smooth animations and modern UI
- 📱 **Fully Responsive** - Perfect viewing experience on all devices
- 🎭 **Horizontal Scrolling Sections** - Netflix-style project rows with smooth navigation
- ⚡ **Fast & Optimized** - Lightning-fast loading with optimized assets
- 🎯 **Interactive Animations** - Engaging hover effects and scroll animations
- 🔍 **SEO Optimized** - Built with best practices for search engines
- ♿ **Accessible** - WCAG compliant with keyboard navigation support
- 📊 **Dynamic Content** - Easy to update projects and information
- <!-- MongoDB backend removed for static deployment -->
- 🐳 **Docker Support** - Easy deployment with Docker and Docker Compose
- 📮 **Contact Form API** - Backend API endpoint for form submissions

## 📋 Sections

1. **Hero Section** - Eye-catching landing with your name and title
2. **About Me** - Brief introduction and professional summary
3. **Skills** - Technology stack and expertise areas
4. **Projects** - Horizontal scrolling showcase of your best work
5. **Experience** - Professional timeline and education
6. **Contact** - Get in touch form with MongoDB integration and social links

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with server-side rendering
- **React 18** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database for data persistence
- **MongoDB Node Driver** - Official MongoDB driver for Node.js

### DevOps
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **Node.js 20 Alpine** - Lightweight Docker base image

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB (for local development) or MongoDB Atlas account
- Docker & Docker Compose (optional, for containerized deployment)

### Installation

#### Option 1: Local Development

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
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/portfolio
   
   # Or for MongoDB Atlas
   # MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
   
   # Application
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Start MongoDB locally** (if not using Atlas)
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:6
   
   # Or install MongoDB locally from https://www.mongodb.com/try/download/community
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

#### Option 2: Docker Deployment

1. **Clone the repository**
   ```bash
   git clone https://github.com/pravinsakhare/Netflix_style_Portfolio_website.git
   cd Netflix_style_Portfolio_website
   ```

2. **Create environment file**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://mongo:27017/portfolio
   ```

3. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   
   Navigate to `http://localhost:3000`

5. **View logs**
   ```bash
   docker-compose logs -f
   ```

6. **Stop the containers**
   ```bash
   docker-compose down
   ```

## 📁 Project Structure

```
Netflix_style_Portfolio_website/
├── public/
│   └── images/              # Project images and assets
├── src/
│   ├── app/
│   │   ├── api/            # API routes
│   │   │   └── contact/    # Contact form endpoint
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── FloatingSocial.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   ├── lib/
│   │   ├── mongodb.ts      # MongoDB connection
│   │   └── utils.ts        # Utility functions
│   └── types/
│       └── global.d.ts     # TypeScript declarations
├── .dockerignore           # Docker ignore file
├── .gitignore             # Git ignore file
├── components.json         # shadcn/ui config
├── docker-compose.yml      # Docker Compose config
├── Dockerfile             # Docker configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔌 Contact API (Cloudflare Pages Functions)

The contact form is handled by a Cloudflare Pages Function at `functions/api/contact.js`. To deploy on Cloudflare Pages, set these environment variables in the Pages dashboard:

- `RESEND_API_KEY` — API key for Resend (used to send email notifications)
- `CONTACT_TO_EMAIL` — Destination email address to receive messages

The contact endpoint expects a POST JSON body with `name`, `email`, `message`, and an optional hidden `website` honeypot field. The function validates inputs and forwards successful messages to the configured email via Resend.


## 🗄️ Database Schema

### contacts Collection

```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  message: string,
  createdAt: Date
}
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/` to customize:

- **Hero Section**: `HeroSection.tsx` - Name, title, certifications
- **About Section**: `AboutSection.tsx` - Bio, highlights, stats
- **Projects**: `ProjectsSection.tsx` - Add/remove projects
- **Skills**: `SkillsSection.tsx` - Technology stack
- **Experience**: `ExperienceSection.tsx` - Work history and education
- **Contact**: `ContactSection.tsx` - Contact methods and social links

### Modify Theme Colors

Update `src/app/globals.css` to change the Netflix-inspired color scheme:

```css
:root {
  --netflix-red: #E50914;
  --netflix-black: #141414;
  --netflix-dark-gray: #1f1f1f;
  --netflix-light-gray: #b3b3b3;
}
```

### Configure MongoDB

Update `src/lib/mongodb.ts` to change database settings:

```typescript
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Set up environment variables in Vercel**
   - Go to your project settings
   - Add `MONGODB_URI` environment variable
   - Use MongoDB Atlas for production

3. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

### Deploy with Docker

1. **Build the Docker image**
   ```bash
   docker build -t portfolio-app .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 \
     -e MONGODB_URI=mongodb://your-mongo-host:27017/portfolio \
     portfolio-app
   ```

### Deploy to Cloud Platforms

The application can be deployed to:
- **Vercel** (Recommended for Next.js)
- **AWS ECS** (Docker containers)
- **Google Cloud Run** (Docker containers)
- **Azure Container Instances** (Docker containers)
- **DigitalOcean App Platform**
- **Railway**
- **Render**

**Note:** Make sure to set up MongoDB Atlas or a managed MongoDB instance for production deployments.

## 🐳 Docker Configuration

### Dockerfile Features

- Multi-stage build for optimized image size
- Node.js 20 Alpine base image
- Standalone output mode for Next.js
- Non-root user for security
- Port 3000 exposed

### Docker Compose Services

- **app**: Next.js application
- **mongo**: MongoDB 6 database
- **mongo-data**: Persistent volume for database

## 🛡️ Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB connection string | Yes | `mongodb://localhost:27017/portfolio` |
| `NEXT_PUBLIC_APP_URL` | Application URL | No | `http://localhost:3000` |

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
- LinkedIn: [Pravin Sakhare](https://www.linkedin.com/in/pravinsakhare/)
- Website: [pravinsakhare.in](https://pravinsakhare.in/)
- Email: pravinsakhare592@gmail.com

## 🙏 Acknowledgments

- Inspired by [Netflix](https://www.netflix.com/) interface design
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [MongoDB](https://www.mongodb.com/)
- Containerized with [Docker](https://www.docker.com/)

## 📸 Screenshots

### Desktop View
<img width="1919" height="872" alt="Desktop Screenshot" src="https://github.com/user-attachments/assets/6a78a62c-de55-455b-b640-1e1dd6c8cc36" />

### Mobile View
<img width="1919" height="868" alt="Mobile Screenshot" src="https://github.com/user-attachments/assets/cad7e766-91ca-45b4-befc-9a76ca66dda3" />

### Project Cards
<img width="1919" height="862" alt="Project Cards" src="https://github.com/user-attachments/assets/478753ef-5dae-4fbf-a8ea-7dfaecc2b071" />

## 🔧 Troubleshooting

### MongoDB Connection Issues

If you're having trouble connecting to MongoDB:

1. **Check MongoDB is running**
   ```bash
   # For Docker
   docker ps | grep mongo
   
   # For local MongoDB
   mongosh
   ```

2. **Verify connection string**
   - Ensure `MONGODB_URI` is correctly set
   - Check username/password if using authentication
   - Verify network connectivity

3. **Check Docker network**
   ```bash
   docker-compose logs mongo
   ```

### Port Already in Use

If port 3000 is already in use:

```bash
# Find the process
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

### Docker Build Failures

If Docker build fails:

1. Clear Docker cache
   ```bash
   docker system prune -a
   ```

2. Rebuild without cache
   ```bash
   docker-compose build --no-cache
   ```

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ by [Pravin Sakhare](https://github.com/pravinsakhare)
