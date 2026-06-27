import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-10 border-t border-[var(--border-dim)]">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-sm text-[var(--text-3)] relative z-[1]">
        <p>{t("tagline")}</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/playlite-app/playlite"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] hover:text-[var(--text-1)] transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            {t("links.github")}
          </a>
          <a
            href="https://playlite.vercel.app/en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-1)] transition-colors"
          >
            {t("links.docs")}
          </a>
          <a
            href="https://github.com/playlite-app/playlite/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-1)] transition-colors"
          >
            {t("links.license")}
          </a>
        </div>
      </div>
    </footer>
  );
}
