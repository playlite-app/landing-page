import { useTranslations } from "next-intl";
import Reveal from "@/components/ui/Reveal";

type FeatureBlockProps = {
  tag: string;
  heading: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
  reverse?: boolean;
};

function FeatureBlock({
  tag,
  heading,
  description,
  bullets,
  visual,
  reverse,
}: Readonly<FeatureBlockProps>) {
  return (
    <div
      className={[
        "grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center mb-[120px] last:mb-0",
        reverse ? "md:[direction:rtl] [&>*]:[direction:ltr]" : "",
      ].join(" ")}
    >
      <Reveal>
        <div>
          <span className="inline-block text-[0.72rem] font-semibold text-[var(--brand)] uppercase tracking-[0.08em] mb-4 font-display">
            {tag}
          </span>
          <h2
            className="font-display font-bold tracking-[-0.03em] leading-[1.15] text-[var(--text-1)] text-[clamp(1.6rem,3vw,2.2rem)] mb-4"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className="text-base text-[var(--text-2)] leading-[1.7] mb-6">
            {description}
          </p>
          <ul className="flex flex-col gap-[10px] list-none">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-[10px] text-sm text-[var(--text-2)]"
              >
                <span className="shrink-0 mt-[6px] w-[5px] h-[5px] rounded-full bg-[var(--brand)]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={0.1}>{visual}</Reveal>
    </div>
  );
}

function ScreenshotVisual({
  src,
  alt,
}: Readonly<{ src: string; alt: string }>) {
  return (
    <div className="rounded-[10px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      <img src={src} alt={alt} className="w-full block" />
    </div>
  );
}

export default function Features() {
  const t = useTranslations("features");

  const features: FeatureBlockProps[] = [
    {
      tag: t("wishlist.tag"),
      heading: t("wishlist.heading"),
      description: t("wishlist.description"),
      bullets: t.raw("wishlist.bullets") as string[],
      visual: (
        <ScreenshotVisual
          src="/assets/wishlist-search.png"
          alt={t("wishlist.tag")}
        />
      ),
    },
    {
      tag: t("gameDetails.tag"),
      heading: t("gameDetails.heading"),
      description: t("gameDetails.description"),
      bullets: t.raw("gameDetails.bullets") as string[],
      visual: (
        <ScreenshotVisual
          src="/assets/game-details.png"
          alt={t("gameDetails.tag")}
        />
      ),
      reverse: true,
    },
    {
      tag: t("playlist.tag"),
      heading: t("playlist.heading"),
      description: t("playlist.description"),
      bullets: t.raw("playlist.bullets") as string[],
      visual: (
        <ScreenshotVisual src="/assets/playlist.png" alt={t("playlist.tag")} />
      ),
    },
    {
      tag: t("freeGames.tag"),
      heading: t("freeGames.heading"),
      description: t("freeGames.description"),
      bullets: t.raw("freeGames.bullets") as string[],
      visual: (
        <ScreenshotVisual src="/assets/giveway.png" alt={t("freeGames.tag")} />
      ),
      reverse: true,
    },
    {
      tag: t("subscriptions.tag"),
      heading: t("subscriptions.heading"),
      description: t("subscriptions.description"),
      bullets: t.raw("subscriptions.bullets") as string[],
      visual: (
        <ScreenshotVisual
          src="/assets/subscriptions.png"
          alt={t("subscriptions.tag")}
        />
      ),
    },
  ];

  return (
    <section className="py-[120px]" id="features">
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        {features.map((f) => (
          <FeatureBlock key={f.tag} {...f} />
        ))}
      </div>
    </section>
  );
}
