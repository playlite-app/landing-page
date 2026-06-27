"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const currentPathWithoutLocale = pathname.replace(/^\/(en|pt-BR)/, "") || "/";

  const navLinks = [
    { label: t("integrations"), href: "#integrations" },
    { label: t("features"), href: "#features" },
    { label: t("changelog"), href: "#changelog" },
    { label: t("roadmap"), href: "#roadmap" },
    { label: t("faq"), href: "#faq" },
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
          href={`/${locale}`}
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
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors p-2 rounded-lg cursor-pointer"
              aria-label="Trocar idioma"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3 opacity-70"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-1 w-[130px] bg-[var(--bg-card)] border border-[var(--border-dim)] rounded-[var(--radius)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <a
                href={`/en${currentPathWithoutLocale}`}
                className={`px-4 py-[10px] text-[0.8rem] font-display transition-colors ${
                  locale === "en"
                    ? "text-[var(--brand)] bg-[var(--brand-dim)] font-semibold"
                    : "text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--bg-card-2)]"
                }`}
              >
                English
              </a>
              <a
                href={`/pt-BR${currentPathWithoutLocale}`}
                className={`px-4 py-[10px] text-[0.8rem] font-display transition-colors ${
                  locale === "pt-BR"
                    ? "text-[var(--brand)] bg-[var(--brand-dim)] font-semibold"
                    : "text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--bg-card-2)]"
                }`}
              >
                Português
              </a>
            </div>
          </div>

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
