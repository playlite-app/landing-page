const wishlistResults = [
  {
    icon: "🗡️",
    name: "Elden Ring",
    meta: "Action RPG · Open World · FromSoftware",
  },
  {
    icon: "🧙",
    name: "Baldur's Gate 3",
    meta: "RPG · Story-rich · Larian Studios",
  },
  {
    icon: "⚔️",
    name: "Dragon's Dogma 2",
    meta: "Action RPG · Fantasy · Capcom",
  },
];

export default function WishlistVisual() {
  return (
    <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] min-h-[320px] flex flex-col">
      <div className="px-5 py-[14px] border-b border-[var(--border-dim)] flex items-center gap-2">
        <span className="font-display text-[0.8rem] font-semibold text-[var(--text-2)]">
          🔍 Wishlist Search
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-4">
        <div className="bg-[var(--bg-card-2)] border border-[var(--border)] rounded-lg px-[14px] py-[10px] flex items-center gap-[10px]">
          <span className="text-[var(--text-3)] text-sm">⌕</span>
          <span className="text-[0.8rem] text-[var(--text-3)] font-body">
            Action RPG with deep story…
          </span>
        </div>
        <div className="flex gap-[6px] flex-wrap">
          {["Action RPG", "Story-rich"].map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] px-[10px] py-1 rounded-full bg-[var(--brand-dim)] text-[var(--brand)] border border-[var(--border)] font-display"
            >
              {tag}
            </span>
          ))}
          {["Open World", "Souls-like"].map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] px-[10px] py-1 rounded-full bg-white/[0.03] text-[var(--text-3)] border border-[var(--border-dim)] font-display"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {wishlistResults.map((result) => (
            <div
              key={result.name}
              className="flex items-center gap-3 px-3 py-[10px] rounded-lg bg-[var(--bg-card-2)] border border-[var(--border-dim)]"
            >
              <div className="w-9 h-12 rounded-[4px] bg-gradient-to-br from-[#1a1a2e] to-[#0a0a14] flex items-center justify-center text-[1.1rem] shrink-0">
                {result.icon}
              </div>
              <div className="flex-1">
                <p className="text-[0.75rem] font-semibold text-[var(--text-1)] font-display">
                  {result.name}
                </p>
                <p className="text-[0.65rem] text-[var(--text-3)] mt-[3px]">
                  {result.meta}
                </p>
              </div>
              <span className="text-[0.65rem] text-[var(--brand)] border border-[var(--border)] bg-[var(--brand-dim)] rounded-[6px] px-[10px] py-1 font-display font-semibold">
                + Add
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
