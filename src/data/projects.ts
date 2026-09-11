import {
  PROJECT_CATEGORIES,
  ProjectCategory,
} from "@/constants/project-categories";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  /** Set to true to disable the Code button (private repository). */
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "verve-shop-e-commerce-shop-dev",
    title: "Verve Shop",
    description:
      "A motion-first e-commerce shop built for the modern web. Curated products, a bespoke accessible design system, and smooth, theme-aware interactions — engineered with Next.js 16, React 19, TypeScript, and Tailwind CSS v4 for performance and scalability.",
    tags: ["next.js", "typescript", "shadcn", "tanstack-query", "zustand "],
    image: "https://i.imgpeek.com/dTm8Qs-aZAmu",
    githubUrl: "https://github.com/esrafil418/Verve#e-commerce-shop",
    liveUrl: "",
    category: PROJECT_CATEGORIES.TOP,
  },
  {
    id: "blog-dashboard-next-js",
    title: "Blog Dashboard",
    description:
      "A modern blog management dashboard built with Next.js, TypeScript, TanStack Query, TanStack Table, shadcn/ui, Tailwind CSS, and React ecosystem tools.",
    tags: ["next.js", "typescript", "shadcn", "tanstack-query", "recharts"],
    image: "https://i.imgpeek.com/Vh5nKAp8_7MY",
    githubUrl: "https://github.com/esrafil418/Blog-Dashboard",
    liveUrl: "https://blog-dashboard-nine-ivory.vercel.app/",
    category: PROJECT_CATEGORIES.TOP,
  },
  {
    id: "game-hub",
    title: "Game Hub",
    description:
      "Game Hub is a full-stack e-commerce platform for purchasing video games.",
    tags: [
      "full-stack",
      "react",
      "typescript",
      "shadcn",
      "mongoose",
      "express",
    ],
    image: "https://i.imgpeek.com/OWaVxhEwHXpl",
    githubUrl: "https://github.com/esrafil418/Game-hub",
    liveUrl: "https://game-hub-mu-topaz-77.vercel.app/",
    category: PROJECT_CATEGORIES.TOP,
  },
  {
    id: "product-preview-card",
    title: "Product preview card",
    description:
      "This is a solution to the Product preview card component challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/v9bDhm7H9mX5",
    githubUrl: "https://github.com/esrafil418/Product-preview-card",
    liveUrl: "https://outgoing-behavior.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "time-tracking-dashboard",
    title: "Time Tracking Dashboard",
    description:
      "This is a solution to the Time tracking dashboard challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/aGPZD0ICWDnd",
    githubUrl: "https://github.com/esrafil418/Time-Tracking-Dashboard",
    liveUrl: "https://time-tracking-dashboard-v2.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "tip-calculator-app",
    title: "Tip calculator app",
    description:
      "This is a solution to the Tip calculator app challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/Hix9jiadxnxo",
    githubUrl: "https://github.com/esrafil418/Tip-calculator-app",
    liveUrl: "https://tip-calculator-app-v3.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "recipe-page",
    title: "Recipe Page",
    description:
      "This project is a solution to the Frontend Mentor Recipe Page Challenge.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/BQ-8QQpK-A7A",
    githubUrl: "https://github.com/esrafil418/Recipe-Page",
    liveUrl: "https://recipe-page-challenge.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "testimonials-grid-section",
    title: "Testimonials Grid Section",
    description:
      "This is a solution to the Testimonials grid section challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/ynajzWwrS0wv",
    githubUrl: "https://github.com/esrafil418/Testimonials-Grid-Section",
    liveUrl: "https://testimonials-grid-section-v2.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "newsletter-sign-up-form",
    title: "Newsletter Sign-up Form",
    description:
      "This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/SJyKJpK433qd",
    githubUrl: "https://github.com/esrafil418/Newsletter-sign-up-form",
    liveUrl: "https://newsletter-sign-up-form-v3.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "article-preview-component",
    title: "Article preview component",
    description:
      "This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/kTKi6ixKFIFQ",
    githubUrl: "https://github.com/esrafil418/Article-Preview-Component",
    liveUrl: "https://article-preview-component-v3.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "four-card-feature-section",
    title: "Four card feature section",
    description:
      "This is a solution to the Four card feature section challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/z598TA2MD-2N",
    githubUrl: "https://github.com/esrafil418/Four-card-feature-section",
    liveUrl: "https://four-card-feature-section-v2.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "blog-preview-card",
    title: "Blog preview card",
    description:
      "This is my solution to the Blog preview card challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/40FzD-XPBtSu",
    githubUrl: "https://github.com/esrafil418/Blog-preview-card",
    liveUrl: "https://my-blog-preview.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "social-links-profile",
    title: "Social links profile",
    description:
      "This is a solution to the Social links profile challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/vfYWhHw16zRr",
    githubUrl: "https://github.com/esrafil418/Social-links-profile",
    liveUrl: "https://social-links-profile-challenge.surge.sh/",
    category: PROJECT_CATEGORIES.FRONTEND_MENTOR,
  },
  {
    id: "lumen",
    title: "Lumen",
    description:
      "A modern, responsive blog application built with React, TypeScript, and Material-UI (MUI).",
    tags: ["react", "material-ui"],
    image: "https://i.imgpeek.com/FNvCK0IR3g4z",
    githubUrl: "https://github.com/esrafil418/Lumen",
    liveUrl: "https://blog-mui-future-ray.surge.sh/",
    category: PROJECT_CATEGORIES.REACT_MINI,
  },
  {
    id: "aurum",
    title: "Aurum",
    description:
      "A simple E-commerce shopping app built with React, TypeScript, and Zustand for state management.",
    tags: ["react", "zustand"],
    image: "https://i.imgpeek.com/4p3Rt3oN6aJu",
    githubUrl: "https://github.com/esrafil418/Aurum",
    liveUrl: "https://ecommerce-shop-teeny-tiny-pocket.surge.sh/",
    category: PROJECT_CATEGORIES.REACT_MINI,
  },
  {
    id: "my-portfolio",
    title: "My Portfolio",
    description:
      "Built with modern web technologies, it serves as both a digital resume and a central hub for my projects and blog posts.",
    tags: ["next.js"],
    image: "https://i.imgpeek.com/_EB8mSXZyIDd",
    githubUrl: "https://github.com/esrafil418/Portfolio",
    liveUrl: "https://portfolio-jade-phi-30.vercel.app/",
    category: PROJECT_CATEGORIES.NEXT_JS,
  },
  {
    id: "squid-game-cms",
    title: "Squid Game CMS",
    description:
      "A simple Content Management System (CMS) panel with a design inspired by the Squid Game series. This project is built for managing users, products, transactions, and viewing sales reports.",
    tags: ["react.js", "mui", "recharts"],
    image: "https://i.imgpeek.com/xLjros5AFV0i",
    githubUrl: "https://github.com/esrafil418/Squid-Game-CMS",
    liveUrl: "https://squid-game-cms.vercel.app/",
    category: PROJECT_CATEGORIES.REACT_MINI,
  },
  {
    id: "simple-feature-section",
    title: "Simple Feature Section",
    description:
      "This is a solution to the Simple Feature Section challenge on DevChallenges.io.",
    tags: ["dev-challenges", "react.js"],
    image: "https://i.imgpeek.com/OnogegiJQo1c",
    githubUrl: "https://github.com/esrafil418/Simple-Feature-Section",
    liveUrl: "https://simple-feature-section-challenge.surge.sh/",
    category: PROJECT_CATEGORIES.REACT_MINI,
  },
  {
    id: "cadenza-game",
    title: "Cadenza Game",
    description:
      "An interactive, real-time guessing game built with Next.js, Tailwind CSS, and Supabase. Players test their knowledge of high-end shoes and luxury bags across multiple categories while tracking their live score, daily streaks, and global ranking. Features a sleek, dark-mode UI, real-time leaderboard updates, and a robust admin panel for content management.",
    tags: ["next.js", "tailwind", "supabase"],
    image: "https://i.imgpeek.com/hlh0YeERqIoa",
    githubUrl: "https://github.com/esrafil418/cadenza-game",
    isPrivate: true,
    liveUrl: "https://cadenza-game.vercel.app/",
    category: PROJECT_CATEGORIES.REACT_MINI,
  },
  {
    id: "i-habit",
    title: "iHabit",
    description:
      "A modern, lightweight habit tracking application built with React and TypeScript. Track your daily habits, view weekly progress, and maintain streaks with an intuitive interface.",
    tags: ["react.js"],
    image: "https://i.imgpeek.com/5Bh-_hoJlquO",
    githubUrl: "https://github.com/esrafil418/iHabit",
    liveUrl: "https://ihabit-tracker.netlify.app/",
    category: PROJECT_CATEGORIES.REACT_MINI,
  },
  {
    id: "i-skilled",
    title: "iSkilled",
    description:
      "iSkilled is a modern marketplace web application built with the TanStack ecosystem (Tanstack Start, Router, Query)",
    tags: ["tanstack"],
    image: "https://i.imgpeek.com/KkTL_AwHwJ5G",
    githubUrl: "https://github.com/esrafil418/iSkilled",
    liveUrl: "https://github.com/esrafil418/iSkilled",
    category: PROJECT_CATEGORIES.TANSTACK,
  },
  {
    id: "nexora-game-shop",
    title: "Nexora Game Shop",
    description:
      "Nexora is a multi-page game shop built with vanilla HTML, CSS, and JavaScript — night-mode UI, searchable catalog with pagination, deals, and a local cart.",
    tags: ["html-css", "javascript"],
    image: "https://i.imgpeek.com/AA1GH0YXP4Tl",
    githubUrl: "https://github.com/esrafil418/Nexora-Game-Shop",
    liveUrl: "https://game-shop-sigma-five.vercel.app/",
    category: PROJECT_CATEGORIES.HTML_CSS,
  },
  {
    id: "death-stranding-landing-page",
    title: "Death Stranding Landing Page",
    description:
      "A modern, fully responsive static landing page inspired by the Death Stranding promotional websites. This project showcases a clean and adaptive layout built with HTML5 and CSS3, optimized for mobile, tablet, and desktop screens.",
    tags: ["html-css", "javascript"],
    image: "https://i.imgpeek.com/2y55g2mB4Umh",
    githubUrl: "https://github.com/esrafil418/Death-Stranding",
    liveUrl: "https://death-stranding.vercel.app/",
    category: PROJECT_CATEGORIES.HTML_CSS,
  },
  {
    id: "VELORA-landing-page",
    title: "VELORA Landing Page",
    description:
      "A modern, fully responsive static landing page inspired by the VELORA promotional websites. This project showcases a clean and adaptive layout built with HTML5 and CSS3, optimized for mobile, tablet, and desktop screens.",
    tags: ["html-css", "javascript"],
    image: "https://i.imgpeek.com/xOlZap7uP1Lt",
    githubUrl: "https://github.com/esrafil418/VELORA",
    liveUrl: "https://hct-landing-page.vercel.app/",
    category: PROJECT_CATEGORIES.HTML_CSS,
  },
];

export const tags = [
  "All",
  "full-stack",
  "frontend-mentor",
  "dev-challenges",
  "react.js",
  "next.js",
  "material-ui",
  "zustand",
  "tanstack",
  "tanstack-query",
  "recharts",
  "html-css",
  // UI
  "shadcn",
  "bootstrap",
  "tailwind",
  // database
  "supabase",
];
