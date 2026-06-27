import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Cards() {
  const t = useTranslations("cards");

  const cards = [
    { key: "unified", title: t("unified.title"), text: t("unified.text") },
    { key: "wishlist", title: t("wishlist.title"), text: t("wishlist.text") },
    { key: "details", title: t("details.title"), text: t("details.text") },
  ];

  return (
    <section className="py-[120px]" id="changelog">
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <SectionLabel>{t("label")}</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Reveal key={card.key} delay={index * 0.08}>
              <div className="h-full rounded-[20px] border border-[var(--border-dim)] bg-[var(--bg-card)] p-6">
                <p className="text-[0.72rem] uppercase tracking-[0.08em] text-[var(--text-3)] font-display mb-3">
                  0{index + 1}
                </p>
                <h3 className="font-display text-[1.15rem] font-semibold text-[var(--text-1)] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-[1.7]">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
