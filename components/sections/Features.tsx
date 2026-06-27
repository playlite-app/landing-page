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

const features: FeatureBlockProps[] = [
  {
    tag: "Wishlist",
    heading: "Find your next game<br />by what you love.",
    description:
      "Search for games by characteristics — genre, mood, mechanics — using the GameBrain API. Add exactly what you want to your list, not what a storefront recommends.",
    bullets: [
      "Search by genre, theme, and playstyle",
      "Browse rich metadata before you add",
    ],
    visual: (
      <ScreenshotVisual
        src="/assets/wishlist-search.png"
        alt="Wishlist search — find games by genre, mood and mechanics"
      />
    ),
  },
  {
    tag: "Game Details",
    heading: "Everything about<br />a game, in one place.",
    description:
      "The game details window opens into four tabs: description, media, similar games and technical specs. So you know exactly what you're installing before you hit download.",
    bullets: [
      "Screenshots and trailers in the Media tab",
      "System requirements and language support from PCGamingWiki",
      "Similar games recommended from your own library context",
    ],
    visual: (
      <ScreenshotVisual
        src="/assets/game-details.png"
        alt="Game details — description, media, similar games and tech specs in one place"
      />
    ),
    reverse: true,
  },
  {
    tag: "Playlist",
    heading: "Queue up your<br />next adventure.",
    description:
      "Build an ordered playlist of games you want to play next. Drag to reorder, launch directly from the queue, and never lose track of what you were going to play.",
    bullets: [
      "Drag-and-drop reordering",
      "Launch games directly from the playlist",
      "Keep your backlog organized and intentional",
    ],
    visual: (
      <ScreenshotVisual
        src="/assets/playlist.png"
        alt="Playlist — queue up and reorder your next games"
      />
    ),
  },
  {
    tag: "Free Games",
    heading: "Never miss a<br />free game again.",
    description:
      "Playlite tracks limited-time giveaways from Epic Games, Steam, and other storefronts in one place. Claim what you want before it's gone.",
    bullets: [
      "Giveaways from Epic, Steam, and more",
      "Filter by store",
      "See expiration dates at a glance",
    ],
    visual: (
      <ScreenshotVisual
        src="/assets/giveway.png"
        alt="Free Games — track limited-time giveaways across storefronts"
      />
    ),
    reverse: true,
  },
  {
    tag: "Subscriptions",
    heading: "All your subscriptions,<br />one place.",
    description:
      "Browse games available through Prime Gaming, Game Pass, EA Play, Ubisoft+ and Humble Choice without switching between apps. See what's expiring soon and claim before it's gone.",
    bullets: [
      "Prime Gaming, Game Pass, EA Play, Ubisoft+, Humble Choice",
      "Spotlight on featured titles",
      "Expiration countdowns so you never miss a claim",
    ],
    visual: (
      <ScreenshotVisual
        src="/assets/subscriptions.png"
        alt="Subscriptions — browse Prime Gaming, Game Pass, EA Play and more in one place"
      />
    ),
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
