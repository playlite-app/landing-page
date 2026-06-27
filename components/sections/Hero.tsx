"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AppDemo from "@/components/ui/AppDemo";

export default function Hero() {
  return (
    <section className="pt-[160px] pb-[100px] text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,106,247,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-display font-bold tracking-[-0.04em] leading-[1.08] text-[var(--text-1)] text-[clamp(2.6rem,6vw,4.2rem)] max-w-[780px] mx-auto mb-5"
        >
          Your game collection.{" "}
          <em className="not-italic bg-gradient-to-br from-violet-400 via-[var(--brand)] to-[#c4b5fd] bg-clip-text text-transparent">
            Unified.
          </em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-[1.1rem] text-[var(--text-2)] max-w-[520px] mx-auto mb-10 leading-[1.65] font-light"
        >
          Organize every game you own — Steam, Epic, GOG, emulators — in one
          fast, private, offline-first desktop app built with Rust and Tauri.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Button
            href="https://github.com/playlite-app/playlite/releases/latest"
            variant="hero"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↓ Download for Windows
          </Button>
          <Button
            href="https://playlite.vercel.app/en"
            variant="hero-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View documentation →
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <AppDemo />
        </motion.div>
      </div>
    </section>
  );
}
