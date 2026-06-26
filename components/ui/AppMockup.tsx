const sidebarItems = [
  { label: "Library", active: true },
  { label: "Playlists", active: false },
  { label: "Wishlist", active: false },
  { label: "Trending", active: false },
  { label: "Settings", active: false },
];

const gameCards = [
  { icon: "🗡️", name: "Elden Ring", status: "Playing" },
  { icon: "🔫", name: "CS2", status: "Completed" },
  { icon: "🚀", name: "No Man's Sky", status: "Dropped" },
  { icon: "🧙", name: "BG3", status: "Wishlist" },
];

export default function AppMockup() {
  return (
    <div className="relative mt-[72px] mx-auto max-w-[900px]">
      <div className="absolute inset-[-40px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,106,247,0.2)_0%,transparent_65%)] pointer-events-none" />
      <div className="relative rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent animate-scanline z-10 opacity-70" />
        <div className="h-10 bg-[rgba(15,15,26,0.9)] border-b border-[var(--border-dim)] flex items-center px-4 gap-2">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
        <div className="grid grid-cols-[200px_1fr] aspect-[16/9] bg-gradient-to-br from-[#0f0f1e] to-[#0a0a14]">
          <aside className="border-r border-[var(--border-dim)] p-5 flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={[
                  "px-3 py-2 rounded-lg text-[0.7rem] flex items-center gap-2 font-display",
                  item.active
                    ? "bg-[var(--brand-dim)] text-[var(--brand)]"
                    : "text-[var(--text-3)]",
                ].join(" ")}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-current" />
                {item.label}
              </div>
            ))}
          </aside>
          <div className="p-5 flex flex-col gap-[14px]">
            <div className="flex items-center justify-between">
              <span className="font-display text-[0.85rem] font-semibold text-[var(--text-1)]">
                My Library
              </span>
              <span className="text-[0.6rem] px-2 py-[3px] bg-[var(--brand-dim)] text-[var(--brand)] rounded-full border border-[var(--border)] font-display">
                142 games
              </span>
            </div>
            <div className="grid grid-cols-4 gap-[10px]">
              {gameCards.map((card) => (
                <div
                  key={card.name}
                  className="rounded-lg overflow-hidden bg-[var(--bg-card-2)] border border-[var(--border-dim)]"
                >
                  <div className="aspect-[2/3] bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] flex items-center justify-center text-2xl">
                    {card.icon}
                  </div>
                  <div className="px-2 py-[6px]">
                    <p className="text-[0.58rem] font-medium text-[var(--text-2)] font-display truncate">
                      {card.name}
                    </p>
                    <p className="text-[0.5rem] text-[var(--text-3)] mt-[2px]">
                      {card.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
