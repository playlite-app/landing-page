import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function Cta() {
  return (
    <section className="py-[120px] text-center border-t border-[var(--border-dim)]">
      <div className="max-w-[800px] mx-auto px-6 relative z-[1]">
        <Reveal>
          <h2 className="font-display font-bold text-[var(--text-1)] text-[clamp(2rem,4vw,3rem)] mb-6 tracking-tight">
            Ready to unify your collection?
          </h2>
          <p className="text-[1.1rem] text-[var(--text-2)] mb-10 leading-[1.6]">
            Download Playlite today and take control of your game library. 100%
            offline and open-source.
          </p>
          <Button
            href="https://github.com/playlite-app/playlite/releases/latest"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
