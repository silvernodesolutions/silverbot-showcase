import type { Metadata } from "next";
import "@n8n/chat/dist/style.css"; // 💡 Loads n8n styles natively from local workspace modules safely
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "AI Chatbot Showcase",
  description: "Dynamic AI solutions for your business",
};

export default function RootRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-black text-white">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
