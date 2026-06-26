import Reveal from "@/components/ui/Reveal";
import WishlistVisual from "@/components/ui/WishlistVisual";
import GameDetailsVisual from "@/components/ui/GameDetailsVisual";

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

const features: FeatureBlockProps[] = [
  {
    tag: "Wishlist",
    heading: "Find your next game<br />by what you love.",
    description:
      "Search for games by characteristics — genre, mood, mechanics — using the GameBrain API. Add exactly what you want to your list, not what a storefront recommends.",
    bullets: [
      "Search by genre, theme, and playstyle",
      "Browse rich metadata before you add",
      "Sync your wishlist instantly to your library on purchase",
    ],
    visual: <WishlistVisual />,
  },
  {
    tag: "Game Details",
    heading: "Everything about<br />a game, in one place.",
    description:
      "The game details window opens into four tabs: media, similar games, technical specs, and your personal notes. Data pulled live from PCGamingWiki — so you know exactly what you're installing before you hit download.",
    bullets: [
      "Screenshots and trailers in the Media tab",
      "System requirements and language support from PCGamingWiki",
      "Controller compatibility at a glance",
      "Similar games recommended from your own library context",
    ],
    visual: <GameDetailsVisual />,
    reverse: true,
  },
];

export default function Features() {
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
