"use client";

import Link from "next/link";
import { ModeToggle } from "./theme/theme-button";

export function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      bg-background/80
      backdrop-blur
      "
    >
      <nav
        className="
        container
        mx-auto
        flex
        h-16
        items-center
        justify-between
        px-4
        "
      >
        <Link
          href="/"
          className="
          text-xl
          font-bold
          "
        >
          Esrafil
        </Link>

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
