"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Docs", href: "https://playlite.vercel.app/en", external: true },
  {
    label: "GitHub",
    href: "https://github.com/playlite-app/playlite",
    external: true,
  },
  { label: "Changelog", href: "#changelog" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-[100]",
        "border-b border-[var(--border-dim)]",
        "bg-[rgba(9,9,15,0.8)] backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-[10px] font-display font-bold text-[1.1rem] tracking-tight text-[var(--text-1)]"
        >
          <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-[var(--brand)] to-violet-400 flex items-center justify-center text-sm">
            🎮
          </div>
          Playlite
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button
            href="https://github.com/playlite-app/playlite"
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source
          </Button>
          <Button
            href="https://github.com/playlite-app/playlite/releases/latest"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
