"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  readonly href?: string;
  readonly variant?: "primary" | "ghost" | "hero" | "hero-alt";
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly target?: string;
  readonly rel?: string;
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: [
    "font-display text-sm font-semibold text-white",
    "bg-[var(--brand)] px-[18px] py-2 rounded-[var(--radius)]",
    "border-0 cursor-pointer",
    "transition-[opacity,box-shadow] duration-200",
    "hover:opacity-[0.88] hover:shadow-[0_0_20px_var(--brand-glow)]",
  ].join(" "),
  ghost: [
    "text-sm text-[var(--text-2)] px-4 py-2 rounded-[var(--radius)]",
    "transition-[color,background] duration-200",
    "hover:text-[var(--text-1)] hover:bg-[var(--brand-dim)]",
  ].join(" "),
  hero: [
    "font-display text-[0.95rem] font-semibold text-white",
    "bg-[var(--brand)] px-7 py-[13px] rounded-[var(--radius)]",
    "inline-flex items-center gap-2 cursor-pointer",
    "transition-[opacity,box-shadow,transform] duration-200",
    "hover:opacity-90 hover:shadow-[0_0_32px_var(--brand-glow)] hover:-translate-y-px",
  ].join(" "),
  "hero-alt": [
    "font-display text-[0.95rem] font-medium text-[var(--text-2)]",
    "bg-[var(--bg-card)] px-7 py-[13px] rounded-[var(--radius)]",
    "inline-flex items-center gap-2 cursor-pointer",
    "border border-[var(--border-dim)]",
    "transition-[color,border-color,transform] duration-200",
    "hover:text-[var(--text-1)] hover:border-[var(--border)] hover:-translate-y-px",
  ].join(" "),
};

export default function Button({
  href,
  variant = "primary",
  children,
  className,
  target,
  rel,
}: ButtonProps) {
  const styles = clsx(variantStyles[variant], className);

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={styles}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
