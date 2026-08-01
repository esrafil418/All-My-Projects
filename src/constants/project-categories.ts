export const PROJECT_CATEGORIES = {
  TOP: "top-projects",
  FRONTEND_MENTOR: "frontend-mentor",
  DEV_CHALLENGES: "dev-challenges",
  REACT_MINI: "react-mini-projects",
  HTML_CSS: "html-css",
  NEXT_JS: "next-js",
  TANSTACK: "tanstack",
} as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];
