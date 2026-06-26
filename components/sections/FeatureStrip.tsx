import Reveal from "@/components/ui/Reveal";

const strips = [
  {
    label: "Privacy",
    heading: "Offline first.",
    text: "Your library lives on your machine. No accounts, no telemetry, no cloud dependency.",
  },
  {
    label: "Performance",
    heading: "Built on Rust\nand Tauri.",
    text: "Opens in under a second. Minimal memory footprint. More RAM for your games.",
  },
  {
    label: "Open Source",
    heading: "MIT licensed,\nfully auditable.",
    text: "Read the source, contribute features, or fork it. The code is yours to inspect.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="py-[60px] border-t border-b border-[var(--border-dim)]">
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--border-dim)]">
          {strips.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="bg-[var(--bg)] px-10 py-10">
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
