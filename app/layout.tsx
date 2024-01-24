import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "@/env.mjs";
import { GeistSans } from "geist/font/sans";
import defaultMetadata from "@/config/metadata";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/layout/Header";

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.className,
          "relative min-h-screen",
        )}
      >
        <div className="dot" />
        <Header />
        <div>{children}</div>
      </body>
      {env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
