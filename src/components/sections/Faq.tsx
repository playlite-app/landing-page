import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Faq() {
  const t = useTranslations("faq");

  const questions = [1, 2, 3, 4, 5, 6];

  return (
    <section
      className="py-[120px] border-t border-[var(--border-dim)]"
      id="faq"
    >
      <div className="max-w-[800px] mx-auto px-6 relative z-[1]">
        <Reveal>
          <SectionLabel className="text-center flex justify-center">
            {t("label")}
          </SectionLabel>
          <h2 className="font-display font-bold text-center text-[var(--text-1)] text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight leading-[1.15] mb-12">
            {t("heading")}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {questions.map((q, index) => (
            <Reveal key={q} delay={index * 0.05}>
              <details className="group rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-dim)] overflow-hidden open:border-[var(--border)] transition-colors">
                <summary className="flex items-center justify-between gap-4 p-6 font-display font-semibold text-[0.95rem] text-[var(--text-1)] cursor-pointer list-none select-none">
                  {t(`q${q}`)}
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[var(--bg-card-2)] text-[var(--text-2)] group-open:-rotate-180 transition-transform duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-sm text-[var(--text-2)] leading-[1.7]">
                  {t(`a${q}`)}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
