import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  SiSteam,
  SiEpicgames,
  SiUbisoft,
  SiGogdotcom,
  SiEa,
  SiBattledotnet,
  SiLegacygames,
} from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";

const platformIcons: Record<string, React.ReactNode> = {
  steam: <SiSteam />,
  epic: <SiEpicgames />,
  ubisoft: <SiUbisoft />,
  legacy: <SiLegacygames />,
  manual: <MdSportsEsports />,
  gog: <SiGogdotcom />,
  ea: <SiEa />,
  amazon: <FaAmazon />,
  battleNet: <SiBattledotnet />,
};

export default function Integrations() {
  const t = useTranslations("integrations");

  const supported = ["steam", "epic", "ubisoft", "legacy", "manual"];
  const planned = ["gog", "ea", "amazon", "battleNet"];

  return (
    <section
      className="py-[120px] border-t border-[var(--border-dim)] bg-[var(--bg)]"
      id="integrations"
    >
      <div className="max-w-[800px] mx-auto px-6 relative z-[1] text-center">
        <Reveal>
          <SectionLabel className="justify-center flex">
            {t("label")}
          </SectionLabel>
          <h2 className="font-display font-bold text-[var(--text-1)] text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight leading-[1.15] mb-4">
            {t("heading")}
          </h2>
          <p className="text-base text-[var(--text-2)] leading-[1.7] max-w-[600px] mx-auto mb-12">
            {t("description")}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[0.8rem] text-[var(--text-3)] font-display uppercase tracking-[0.06em] mb-4">
                {t("supported")}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {supported.map((key) => (
                  <span
                    key={key}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-dim)] text-[var(--brand)] border border-[var(--border)] text-sm font-semibold font-display"
                  >
                    <span className="text-base leading-none">
                      {platformIcons[key]}
                    </span>
                    {t(`platforms.${key}`)}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.8rem] text-[var(--text-3)] font-display uppercase tracking-[0.06em] mb-4">
                {t("planned")}
              </p>
              <div className="flex flex-wrap justify-center gap-3 opacity-60">
                {planned.map((key) => (
                  <span
                    key={key}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent text-[var(--text-2)] border border-[var(--border-dim)] text-sm font-display"
                  >
                    <span className="text-base leading-none">
                      {platformIcons[key]}
                    </span>
                    {t(`platforms.${key}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
