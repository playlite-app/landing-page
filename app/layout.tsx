import type { Metadata } from "next";
// @ts-ignore: allow side-effect import of CSS without type declarations
import "./globals.css";

export const metadata: Metadata = {
  title: "Playlite – Your game collection. Unified.",
  description:
    "Organize every game you own — Steam, Epic, GOG, emulators — in one fast, private, offline-first desktop app built with Rust and Tauri.",
  icons: "/icon.png",
  openGraph: {
    title: "Playlite – Your game collection. Unified.",
    description:
      "Organize every game you own — Steam, Epic, GOG, emulators — in one fast, private, offline-first desktop app built with Rust and Tauri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
