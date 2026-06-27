export default function AppDemo() {
  return (
    <div className="relative mt-[72px] mx-auto max-w-[900px]">
      {/* Window */}
      <div className="relative rounded-[10px] border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* Scanline */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent animate-scanline z-10 opacity-70" />
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
