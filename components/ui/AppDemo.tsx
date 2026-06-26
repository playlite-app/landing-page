export default function AppDemo() {
  return (
    <div className="relative mt-[72px] mx-auto max-w-[900px]">
      {/* Glow behind mockup */}
      <div className="absolute inset-[-40px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,106,247,0.2)_0%,transparent_65%)] pointer-events-none" />

      {/* Window chrome */}
      <div className="relative rounded-[20px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* Scanline */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent animate-scanline z-10 opacity-70" />

        {/* Title bar */}
        <div className="h-10 bg-[rgba(15,15,26,0.9)] border-b border-[var(--border-dim)] flex items-center px-4 gap-2 shrink-0">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>

        {/* Demo GIF */}
        <img
          src="/assets/demo.gif"
          alt="Playlite app demonstration"
          className="w-full block"
          style={{ aspectRatio: "16/9", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
