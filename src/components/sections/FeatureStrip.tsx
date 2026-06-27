import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import { MdLockOutline } from "react-icons/md";
import { SiRust } from "react-icons/si";
import { GoCode } from "react-icons/go";

const stripIcons = {
  privacy: <MdLockOutline size={22} />,
  performance: <SiRust size={20} />,
  openSource: <GoCode size={22} />,
};

export default function FeatureStrip() {
  const t = useTranslations("featureStrip");

  const strips = [
    {
      key: "privacy",
      label: t("privacy.label"),
      heading: t("privacy.heading"),
      text: t("privacy.text"),
    },
    {
      key: "performance",
      label: t("performance.label"),
      heading: t("performance.heading"),
      text: t("performance.text"),
    },
    {
      key: "openSource",
      label: t("openSource.label"),
      heading: t("openSource.heading"),
      text: t("openSource.text"),
    },
  ];

  return (
    <section
      className="py-[60px] border-t border-b border-[var(--border-dim)]"
      id="highlights"
    >
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border-dim)]">
          {strips.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.1} className="h-full">
              <div className="h-full bg-[var(--bg)] px-10 py-10 border-t-2 border-t-transparent hover:border-t-[var(--brand)] transition-colors duration-300 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--brand-dim)] border border-[var(--border)] text-[var(--brand)] mb-5 transition-colors duration-300">
                  {stripIcons[item.key as keyof typeof stripIcons]}
                </div>
                <p className="text-[0.72rem] text-[var(--text-3)] uppercase tracking-[0.08em] mb-[10px] font-display">
                  {item.label}
                </p>
                <h3 className="font-display text-[1.35rem] font-bold tracking-tight text-[var(--text-1)] leading-[1.25] mb-[10px] whitespace-pre-line">
                  {item.heading}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-[1.6]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
