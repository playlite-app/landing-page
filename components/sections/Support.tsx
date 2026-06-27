"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const PIX_KEY = "seu-email@exemplo.com"; // substitua pela chave PIX real

const donors = [
  { label: "Ko-fi", href: "https://ko-fi.com/playlite", icon: KofiIcon },
  {
    label: "GitHub Sponsors",
    href: "https://github.com/sponsors/playlite-app",
    icon: GithubIcon,
  },
];

function KofiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682-.028-1.682-.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function PixIcon() {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
      <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.6 369.6C353.1 383.1 371.5 391.1 391.1 391.1C410.6 391.1 428.1 383.1 442.6 369.6L518.2 294C528.5 283.7 528.5 267 518.2 256.7L442.6 181.1C428.1 167.6 410.6 159.6 391.1 159.6C371.5 159.6 353.1 167.6 339.6 181.1L262.5 258.2C257.1 263.6 247.8 263.6 242.4 258.2L166.5 182.3C152 167.8 134.4 159.8 114.9 159.8C95.4 159.8 77.81 167.8 63.31 182.3L-12.28 257.9C-22.63 268.2-22.63 284.9-12.28 295.3L63.31 370.8C77.81 385.3 95.4 393.3 114.9 393.3C134.4 393.3 152 385.3 166.5 370.8L242.4 292.5zM391.1 224C403.1 224 415.4 228.7 424.5 237.8L481 294.3C484.3 297.6 484.3 302.3 481 305.6L424.5 362.1C415.4 371.3 403.1 376 391.1 376C378.1 376 366.6 371.3 357.5 362.1L280.4 285C276.1 280.7 271.1 278.4 256 278.4C240.9 278.4 235.9 280.7 231.6 285L154.5 362.1C145.4 371.3 133.9 376 121.8 376C108.8 376 97.31 371.3 88.18 362.1L31.67 305.6C28.33 302.3 28.33 297.6 31.67 294.3L88.18 237.8C97.31 228.7 108.8 224 121.8 224C133.9 224 145.4 228.7 154.5 237.8L231.6 314.9C235.9 319.3 240.9 321.6 256 321.6C271.1 321.6 276.1 319.3 280.4 314.9L357.5 237.8C366.6 228.7 378.1 224 391.1 224z" />
    </svg>
  );
}

function CopyButton({ text }: { readonly text: string }) {
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
        <>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Copiado!
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4"
          >
            <rect x="7" y="7" width="10" height="10" rx="2" />
            <path d="M3 13V4a1 1 0 011-1h9" />
          </svg>
          Copiar chave
        </>
      )}
    </button>
  );
}

export default function Support() {
  return (
    <section
      className="py-[120px] border-t border-[var(--border-dim)]"
      id="support"
    >
      <div className="max-w-[800px] mx-auto px-6 relative z-[1]">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[0.72rem] font-semibold text-[var(--brand)] uppercase tracking-[0.08em] mb-4 font-display">
              Support the Project
            </span>
            <h2 className="font-display font-bold text-[var(--text-1)] text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight leading-[1.15] mb-4">
              Playlite é e sempre será gratuito.
            </h2>
            <p className="text-base text-[var(--text-2)] leading-[1.7] max-w-[540px] mx-auto">
              Playlite continuará sendo gratuito e open source. As doações são
              totalmente opcionais e ajudam a financiar o desenvolvimento e a
              manutenção do projeto.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {donors.map(({ label, href, icon: Icon }) => (
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
                    {label === "Ko-fi"
                      ? "Apoie com um café"
                      : "Sponsor no GitHub"}
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
                <PixIcon />
              </span>
              <div>
                <p className="text-sm font-display font-semibold text-[var(--text-1)]">
                  PIX
                </p>
                <p className="text-[0.72rem] text-[var(--text-3)] mt-[2px]">
                  Exclusivo para o Brasil
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* QR Code placeholder — substitua pela img real */}
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
                    Chave PIX
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
