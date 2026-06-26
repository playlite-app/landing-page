const tabs = ["Media", "Similar", "Tech Details", "Notes"];
const mediaThumbs = ["▶", "🖼", "🖼", "🖼", "🖼", "▶"];

export default function GameDetailsVisual() {
  return (
    <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] min-h-[320px] flex flex-col">
      <div className="px-5 py-[14px] border-b border-[var(--border-dim)] flex items-center gap-2">
        <span className="font-display text-[0.8rem] font-semibold text-[var(--text-2)]">
          🎮 Elden Ring
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-4">
        <div className="flex border-b border-[var(--border-dim)] -mx-5 px-5">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={[
                "text-[0.72rem] font-display font-medium px-4 py-[10px] border-b-2 transition-colors",
                i === 0
                  ? "text-[var(--brand)] border-[var(--brand)]"
                  : "text-[var(--text-3)] border-transparent",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {mediaThumbs.map((thumb, i) => (
            <div
              key={i}
              className="aspect-[16/9] rounded-[6px] bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-[var(--border-dim)] flex items-center justify-center text-[1.2rem] text-[var(--text-3)]"
            >
              {thumb}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
