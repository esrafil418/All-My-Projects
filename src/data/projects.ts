export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    title: "Game Hub",
    description:
      "Game Hub is a full-stack e-commerce platform for purchasing video games.",
    tags: ["full-stack"],
    image: "https://i.imgpeek.com/OWaVxhEwHXpl",
    githubUrl: "https://github.com/esrafil418/Game-hub",
    liveUrl: "https://game-hub-mu-topaz-77.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "Product preview card",
    description:
      "This is a solution to the Product preview card component challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/v9bDhm7H9mX5",
    githubUrl: "https://github.com/esrafil418/Product-preview-card",
    liveUrl: "https://outgoing-behavior.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Time Tracking Dashboard",
    description:
      "This is a solution to the Time tracking dashboard challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/aGPZD0ICWDnd",
    githubUrl: "https://github.com/esrafil418/Time-Tracking-Dashboard",
    liveUrl: "https://time-tracking-dashboard-v2.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Tip calculator app",
    description:
      "This is a solution to the Tip calculator app challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/Hix9jiadxnxo",
    githubUrl: "https://github.com/esrafil418/Tip-calculator-app",
    liveUrl: "https://tip-calculator-app-v3.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Recipe Page",
    description:
      "This project is a solution to the Frontend Mentor Recipe Page Challenge.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/BQ-8QQpK-A7A",
    githubUrl: "https://github.com/esrafil418/Recipe-Page",
    liveUrl: "https://recipe-page-challenge.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Testimonials Grid Section",
    description:
      "This is a solution to the Testimonials grid section challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/ynajzWwrS0wv",
    githubUrl: "https://github.com/esrafil418/Testimonials-Grid-Section",
    liveUrl: "https://testimonials-grid-section-v2.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Simple Feature Section",
    description:
      "This is a solution to the Simple Feature Section challenge on DevChallenges.io.",
    tags: ["dev-challenges", "react.js"],
    image: "https://i.imgpeek.com/OnogegiJQo1c",
    githubUrl: "https://github.com/esrafil418/Simple-Feature-Section",
    liveUrl: "https://simple-feature-section-challenge.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Newsletter Sign-up Form",
    description:
      "This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/SJyKJpK433qd",
    githubUrl: "https://github.com/esrafil418/Newsletter-sign-up-form",
    liveUrl: "https://newsletter-sign-up-form-v3.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Article preview component",
    description:
      "This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/kTKi6ixKFIFQ",
    githubUrl: "https://github.com/esrafil418/Article-Preview-Component",
    liveUrl: "https://article-preview-component-v3.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Four card feature section",
    description:
      "This is a solution to the Four card feature section challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/z598TA2MD-2N",
    githubUrl: "https://github.com/esrafil418/Four-card-feature-section",
    liveUrl: "https://four-card-feature-section-v2.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Blog preview card",
    description:
      "This is my solution to the Blog preview card challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/40FzD-XPBtSu",
    githubUrl: "https://github.com/esrafil418/Blog-preview-card",
    liveUrl: "https://my-blog-preview.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Social links profile",
    description:
      "This is a solution to the Social links profile challenge on Frontend Mentor.",
    tags: ["frontend-mentor", "react.js"],
    image: "https://i.imgpeek.com/vfYWhHw16zRr",
    githubUrl: "https://github.com/esrafil418/Social-links-profile",
    liveUrl: "https://social-links-profile-challenge.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Blog-app",
    description:
      "A modern, responsive blog application built with React, TypeScript, and Material-UI (MUI).",
    tags: ["material-ui"],
    image: "https://i.imgpeek.com/y3FqfnZjFrqs",
    githubUrl: "https://github.com/esrafil418/Blog-app-with-MUI",
    liveUrl: "https://blog-app-with-mui.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Ecommerce-shop",
    description:
      "A simple ecommerce shopping app built with React, TypeScript, and Zustand for state management.",
    tags: ["zustand"],
    image: "https://i.imgpeek.com/S26R7jaSq2Jq",
    githubUrl: "https://github.com/esrafil418/Ecommerce-shop-with-Zustand",
    liveUrl: "https://ecommerce-shopping-app.surge.sh/",
  },
  {
    id: crypto.randomUUID(),
    title: "Game-Verse",
    description:
      "A modern, responsive gaming website showcasing game genres, features, and customer testimonials. Built with HTML, CSS, and JavaScript.",
    tags: ["html-css"],
    image: "https://i.imgpeek.com/75ToeNedcbJO",
    githubUrl: "https://github.com/esrafil418/HTML-CSS-Landing-Page",
    liveUrl: "https://esrafil418.github.io/HTML-CSS-Landing-Page/",
  },
  {
    id: crypto.randomUUID(),
    title: "My Portfolio",
    description:
      "Built with modern web technologies, it serves as both a digital resume and a central hub for my projects and blog posts.",
    tags: ["next.js"],
    image: "https://i.imgpeek.com/_EB8mSXZyIDd",
    githubUrl: "https://github.com/esrafil418/Portfolio",
    liveUrl: "https://portfolio-jade-phi-30.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "Memory Card Game",
    description:
      "A fun and interactive memory card game built with React, TypeScript, and Tailwind CSS. Test your memory by matching pairs of emoji cards!",
    tags: ["react.js"],
    image: "https://i.imgpeek.com/_xnMwSc8F6hF",
    githubUrl: "https://github.com/esrafil418/Memory-game",
    liveUrl: "https://memory-game-eight-psi.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "iHabit",
    description:
      "A modern, lightweight habit tracking application built with React and TypeScript. Track your daily habits, view weekly progress, and maintain streaks with an intuitive interface.",
    tags: ["react.js"],
    image: "https://i.imgpeek.com/5Bh-_hoJlquO",
    githubUrl: "https://github.com/esrafil418/iHabit",
    liveUrl: "https://ihabit-tracker.netlify.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "iSkilled",
    description:
      "iSkilled is a modern marketplace web application built with the TanStack ecosystem (Tanstack Start, Router, Query)",
    tags: ["tanstack"],
    image: "https://i.imgpeek.com/KkTL_AwHwJ5G",
    githubUrl: "https://github.com/esrafil418/iSkilled",
    liveUrl: "https://github.com/esrafil418/iSkilled",
  },
  {
    id: crypto.randomUUID(),
    title: "Squid Game CMS",
    description:
      "A simple Content Management System (CMS) panel with a design inspired by the Squid Game series. This project is built for managing users, products, transactions, and viewing sales reports.",
    tags: ["react.js"],
    image: "https://i.imgpeek.com/M9CsE0z5QF4q",
    githubUrl: "https://github.com/esrafil418/Squid-Game-CMS",
    liveUrl: "https://squid-game-cms.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "Game-Shop",
    description:
      "A simple and engaging video game store! Focused on a dynamic shopping cart, search, and item management. Built with pure HTML, CSS, and JavaScript (no frameworks).",
    tags: ["html-css"],
    image: "https://i.imgpeek.com/QvOZpTAC2AtV",
    githubUrl: "https://github.com/esrafil418/GameVerse",
    liveUrl: "https://esrafil418.github.io/GameVerse/",
  },
  {
    id: crypto.randomUUID(),
    title: "Death Stranding Landing Page",
    description:
      "A modern, fully responsive static landing page inspired by the Death Stranding promotional websites. This project showcases a clean and adaptive layout built with HTML5 and CSS3, optimized for mobile, tablet, and desktop screens.",
    tags: ["html-css"],
    image: "https://i.imgpeek.com/eiS1g6cR-DmL",
    githubUrl: "https://github.com/esrafil418/Death-Stranding",
    liveUrl: "https://github.com/esrafil418/Death-Stranding",
  },
];

export const tags = [
  "All",
  "frontend-mentor",
  "dev-challenges",
  "full-stack",
  "react.js",
  "next.js",
  "zustand",
  "material-ui",
  "tanstack",
  "html-css",
];
