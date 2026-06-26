import clsx from "clsx";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({
  children,
  className,
}: SectionLabelProps) {
  return (
    <p
      className={clsx(
        "text-[0.72rem] uppercase tracking-[0.1em] text-[var(--brand)]",
        "font-display font-semibold mb-3",
        className,
      )}
    >
      {children}
    </p>
  );
}
