# 🚀 Modern Professional Portfolio

A sleek, high-performance personal portfolio built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. Designed for developers who want to showcase their work with elegance and speed.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## ✨ Features

- **⚡ Blazing Fast Performance**: Optimized with Next.js App Router and Server Components.
- **🎨 Premium UI/UX**: Crafted with Tailwind CSS 4 and smooth animations using Framer Motion.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop.
- **📝 MDX Integration**: Easy blog and project management using MDX and gray-matter.
- **📧 Contact Form**: Integrated with Resend for reliable email delivery.
- **🌗 Dark Mode**: Beautifully optimized for both light and dark preferences.
- **🧩 Reusable Components**: Modular and scalable architecture.

---

## 🏗️ Folder Structure

```text
personal_portfolio/
├── public/                 # Static assets (images, icons, fonts)
├── src/
│   ├── app/                # Next.js App Router (pages & layouts)
│   │   ├── (main)/         # Main application routes
│   │   │   ├── about/      # About page
│   │   │   ├── contact/    # Contact page
│   │   │   └── projects/   # Projects showcase
│   │   ├── api/            # Serverless API routes
│   │   ├── globals.css     # Global styles & Tailwind layers
│   │   ├── layout.tsx      # Root layout configuration
│   │   └── page.tsx        # Homepage entry point
│   ├── components/         # Atomic design components
│   │   ├── features/       # Feature-specific components (Home, Projects)
│   │   ├── layouts/        # Shared layouts (Navbar, Footer)
│   │   ├── navigation/     # Navigation-related components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Shadcn/Reusable UI primitives
│   ├── content/            # MDX files for projects/blog
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions & shared logic
├── components.json         # Shadcn UI configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Forms**: [Resend](https://resend.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Feedback**: [Sonner](https://sonner.emilkowal.ski/)
- **Content**: [MDX](https://mdxjs.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/personal_portfolio.git
cd personal_portfolio
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your keys:
```env
RESEND_API_KEY=your_resend_api_key
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📈 Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub.
2. Import your repository into Vercel.
3. Configure Environment Variables.
4. Deploy!

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the project, feel free to fork it and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git checkout origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by <b>Your Name</b>
</p>