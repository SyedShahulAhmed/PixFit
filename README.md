# 🎬 PixFit - Social Media Content Optimizer

**Professional media optimization platform for creators to generate platform-specific content instantly**

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0+-2D3748?logo=prisma)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white)](https://clerk.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-Latest-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Neon Database](https://img.shields.io/badge/Neon-PostgreSQL-00E599?logo=neon&logoColor=black)](https://neon.com/)
---


# 🎯 Overview

PixFit is a full-stack SaaS application designed for content creators to optimize images and videos for multiple social media platforms. With intelligent resizing, compression, and platform-specific presets, creators can generate social-media-ready content in seconds—eliminating the need for manual optimization across different platforms.

**Perfect for:** YouTubers, Instagrammers, TikTok creators, bloggers, and content agencies.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🖼️ **Image Optimization** | Resize and format images with platform-specific dimensions |
| 🎥 **Video Compression** | Compress videos while maintaining quality |
| 📱 **Multi-Platform Support** | Presets for Instagram, Facebook, X/Twitter, YouTube, TikTok, LinkedIn, and more |
| 🔐 **Secure Authentication** | User authentication and session management |
| 📊 **Dashboard** | Manage your media library and view optimization history |
| ☁️ **Cloud Storage** | Secure cloud-based media processing |
| 📈 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile |

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14+](https://nextjs.org/) - React-based framework
- **Language:** [TypeScript 5+](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Authentication:** [Clerk](https://clerk.com/) - Modern user authentication
- **HTTP Client:** Fetch API + Next.js API routes

### Backend
- **Runtime:** Node.js with Next.js API Routes
- **Database:** [Neon PostgreSQL](https://neon.com/) - Serverless PostgreSQL database
- **ORM:** [Prisma](https://www.prisma.io/) - Type-safe database access
- **Schema:** Prisma with migrations

### DevOps & Tools
- **Package Manager:** npm/yarn
- **Linting:** ESLint
- **Build Tool:** TypeScript compiler + Next.js build system
- **Version Control:** Git

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/SyedShahulAhmed/PixFit
cd social-share

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Setup database
npx prisma migrate dev

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

---

## 🎬 Demo

🚀 Try PixFit here:

🔗 https://pix-fit.vercel.app/

## 📦 Installation

### Prerequisites

* Node.js 18+
* npm or yarn
* PostgreSQL (or Neon PostgreSQL)
* Cloudinary account
* Clerk account

### Setup Steps

1. **Clone the repository**

```bash
git clone https://github.com/SyedShahulAhmed/PixFit
cd social-share
```

2. **Install dependencies**

```bash
npm install
```

3. **Create the environment file**

```bash
cp .env.local
```

4. **Configure `.env.local`**

```env
# Database
DATABASE_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

5. **Run database migrations**

```bash
npx prisma migrate dev
```

6. **Generate Prisma Client**

```bash
npx prisma generate
```

7. **Start the development server**

```bash
npm run dev
```

Visit **http://localhost:3000** to see the application.

## 💻 Usage

### For Users
1. Sign up with email or social account
2. Upload image or video
3. Select target platform
4. Optimize and download

### For Developers

**Build for production:**
```bash
npm run build
npm start
```

**Run database migrations:**
```bash
npx prisma migrate dev --name migration_name
```

**View database GUI:**
```bash
npx prisma studio
```

---

## 📁 Project Structure

```
social-share/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/         # API routes
│   │   ├── (auth)/      # Auth pages (sign-in, sign-up)
│   │   ├── dashboard/   # Dashboard pages
│   │   └── page.tsx     # Home page
│   ├── components/       # React components
│   │   ├── auth/        # Auth components
│   │   ├── Dashboard/   # Dashboard components
│   │   └── landing/     # Landing page components
│   ├── lib/             # Utility functions
│   ├── types/           # TypeScript types
│   ├── styles/          # Global styles
│   └── middleware.ts    # Next.js middleware
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
├── public/              # Static assets
├── generated/           # Generated Prisma client
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

