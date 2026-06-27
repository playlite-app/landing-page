import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// @ts-expect-error Next.js handles global CSS imports
import "@/app/globals.css";

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

export default async function LocaleLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
