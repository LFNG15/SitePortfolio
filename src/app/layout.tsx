import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { heroProjects } from "./portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumen Connection",
  description: "Lumen Connection",
  keywords: ["Lumen Connection", "Portfolio", "Desenvolvimento Web", "Edição de Vídeo", "Design Gráfico", "React", "Next.js"],
  authors: [{ name: "Lumen Connection" }],
  icons: {
    icon: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen Connection",
    description: "Lumen Connection",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const firstHeroImage = heroProjects[0]?.image
  const otherHeroImages = heroProjects
    .slice(1)
    .map((p) => p.image)
    .filter((src): src is string => !!src && src !== '/' && src !== firstHeroImage)

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {firstHeroImage && (
          <link
            rel="preload"
            as="image"
            href={firstHeroImage}
            fetchPriority="high"
          />
        )}
        {otherHeroImages.map((src) => (
          <link key={src} rel="prefetch" as="image" href={src} />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
