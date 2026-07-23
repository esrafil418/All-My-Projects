export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Blog preview card",
    description:
      "This is my solution to the Blog preview card challenge on Frontend Mentor.",
    tags: ["frontend-mentor"],
    image: "https://i.imgpeek.com/0cC9wD3dNrO4",
    githubUrl: "https://github.com/esrafil418/Blog-preview-card",
    liveUrl: "https://my-blog-preview.surge.sh/",
  },
  {
    id: 2,
    title: "Recipe Page",
    description:
      "This project is a solution to the Frontend Mentor Recipe Page Challenge.",
    tags: ["frontend-mentor"],
    image: "https://i.imgpeek.com/BQ-8QQpK-A7A",
    githubUrl: "https://github.com/esrafil418/Recipe-Page",
    liveUrl: "https://recipe-page-challenge.surge.sh/",
  },
  {
    id: 3,
    title: "Social links profile",
    description:
      "This is a solution to the Social links profile challenge on Frontend Mentor.",
    tags: ["frontend-mentor"],
    image: "https://i.imgpeek.com/zC5dtDUkx_hh",
    githubUrl: "https://github.com/esrafil418/Social-links-profile",
    liveUrl: "https://social-links-profile-challenge.surge.sh/",
  },
  {
    id: 4,
    title: "Product preview card",
    description:
      "This is a solution to the Product preview card component challenge on Frontend Mentor.",
    tags: ["frontend-mentor"],
    image: "https://i.imgpeek.com/v9bDhm7H9mX5",
    githubUrl: "https://github.com/esrafil418/Product-preview-card",
    liveUrl: "https://outgoing-behavior.surge.sh/",
  },
  {
    id: 5,
    title: "Game Hub",
    description:
      "Game Hub is a full-stack e-commerce platform for purchasing video games.",
    tags: ["full-stack"],
    image: "https://i.imgpeek.com/OWaVxhEwHXpl",
    githubUrl: "https://github.com/esrafil418/Game-hub",
    liveUrl: "https://game-hub-mu-topaz-77.vercel.app/",
  },
  {
    id: 6,
    title: "Blog-app",
    description:
      "A modern, responsive blog application built with React, TypeScript, and Material-UI (MUI).",
    tags: ["mui"],
    image: "https://i.imgpeek.com/y3FqfnZjFrqs",
    githubUrl: "https://github.com/esrafil418/Blog-app-with-MUI",
    liveUrl: "https://blog-app-with-mui.surge.sh/",
  },
];

export const tags = [
  "All",
  "html-css",
  "react.js",
  "next.js",
  "full-stack",
  "frontend-mentor",
  "mui",
  "chakra",
];
