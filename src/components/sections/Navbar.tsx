"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("navbar");

  const navLinks = [
    { label: t("features"), href: "#features" },
    { label: t("changelog"), href: "#changelog" },
    { label: t("support"), href: "#support" },
  ];

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
          href="/"
          className="flex items-center gap-[10px] font-display font-bold text-[1.1rem] tracking-tight text-[var(--text-1)]"
        >
          <Image src="/icon.png" alt="Playlite" width={28} height={28} />
          Playlite
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
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
            {t("source")}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
