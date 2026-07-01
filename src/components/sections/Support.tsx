"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import { FaPix } from "react-icons/fa6";
import { SiKofi, SiGithubsponsors } from "react-icons/si";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

const PIX_KEY = "08106213-f9bf-4bc1-a039-829241304b97";

function CopyButton({ text }: { readonly text: string }) {
  const t = useTranslations("support.pix");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-[0.8rem] font-display font-medium text-[var(--brand)] border border-[var(--border)] bg-[var(--brand-dim)] px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80 cursor-pointer"
    >
      {copied ? (
        <MdCheck className="w-4 h-4" />
      ) : (
        <MdOutlineContentCopy className="w-4 h-4" />
      )}
      {copied ? t("copied") : t("copy")}
    </button>
  );
}

export default function Support() {
  const t = useTranslations("support");

  const donors = [
    {
      label: "Ko-fi",
      href: "https://ko-fi.com/alandeogoncalves",
      description: t("kofi"),
      icon: SiKofi,
    },
    {
      label: "GitHub Sponsors",
      href: "https://github.com/sponsors/Alan-oliveir",
      description: t("githubSponsors"),
      icon: SiGithubsponsors,
    },
  ];

  return (
    <section
      className="py-[120px] border-t border-[var(--border-dim)]"
      id="support"
    >
      <div className="max-w-[800px] mx-auto px-6 relative z-[1]">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[0.72rem] font-semibold text-[var(--brand)] uppercase tracking-[0.08em] mb-4 font-display">
              {t("label")}
            </span>
            <h2 className="font-display font-bold text-[var(--text-1)] text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight leading-[1.15] mb-4">
              {t("heading")}
            </h2>
            <p className="text-base text-[var(--text-2)] leading-[1.7] max-w-[540px] mx-auto">
              {t("description")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {donors.map(({ label, href, description, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-5 rounded-[var(--radius)] bg-[var(--bg-card)] border border-[var(--border-dim)] transition-all duration-200 hover:border-[var(--border)] hover:bg-[var(--bg-card-2)] group"
              >
                <span className="text-[var(--text-2)] group-hover:text-[var(--brand)] transition-colors duration-200">
                  <Icon />
                </span>
                <div>
                  <p className="text-sm font-display font-semibold text-[var(--text-1)]">
                    {label}
                  </p>
                  <p className="text-[0.72rem] text-[var(--text-3)] mt-[2px]">
                    {description}
                  </p>
                </div>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-4 h-4 text-[var(--text-3)] ml-auto group-hover:text-[var(--brand)] transition-colors duration-200"
                >
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>

        {/* PIX — Brasil only */}
        <Reveal delay={0.2}>
          <div className="rounded-[var(--radius)] bg-[var(--bg-card)] border border-[var(--border-dim)] p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[var(--text-2)]">
                <FaPix />
              </span>
              <div>
                <p className="text-sm font-display font-semibold text-[var(--text-1)]">
                  {t("pix.label")}
                </p>
                <p className="text-[0.72rem] text-[var(--text-3)] mt-[2px]">
                  {t("pix.badge")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0 w-[120px] h-[120px] rounded-lg bg-white p-2 flex items-center justify-center">
                <img
                  src="/assets/pix-qrcode.png"
                  alt="QR Code PIX"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-3 flex-1 w-full">
                <div>
                  <p className="text-[0.72rem] text-[var(--text-3)] font-display uppercase tracking-[0.06em] mb-[6px]">
                    {t("pix.pixKeyLabel")}
                  </p>
                  <p className="text-sm text-[var(--text-2)] font-mono bg-[var(--bg-card-2)] border border-[var(--border-dim)] rounded-lg px-4 py-3 break-all">
                    {PIX_KEY}
                  </p>
                </div>
                <CopyButton text={PIX_KEY} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
