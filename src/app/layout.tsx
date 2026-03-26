import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
    icon: "/",
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
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
