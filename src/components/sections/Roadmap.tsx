import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Roadmap() {
  const t = useTranslations("roadmap");

  const items = ["platforms", "linux"];

  return (
    <section
      className="py-[120px] border-t border-[var(--border-dim)]"
      id="roadmap"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <SectionLabel>{t("label")}</SectionLabel>
        <h2 className="font-display font-bold text-[var(--text-1)] text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight leading-[1.15] mb-10">
          {t("heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.1}>
              <div className="h-full p-6 rounded-[20px] bg-[var(--bg-card-2)] border border-[var(--border-dim)]">
                <div className="w-10 h-10 rounded-full bg-[var(--brand-dim)] border border-[var(--border)] flex items-center justify-center text-[var(--brand)] mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-[1.1rem] text-[var(--text-1)] mb-2">
                  {t(`items.${item}.title`)}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-[1.6]">
                  {t(`items.${item}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
