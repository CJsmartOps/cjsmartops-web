"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#architecture", label: "Architecture" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#research", label: "Research" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 transition-colors group-hover:bg-accent/25">
            <Shield className="h-4 w-4 text-accent" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            CJsmart<span className="text-accent">Ops</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-secondary transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:contacto.cjsmartops@gmail.com"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
