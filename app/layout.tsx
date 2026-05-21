import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "@n8n/chat/dist/style.css"; // 💡 Loads the styling files natively inside Vercel
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Chatbot Showcase",
  description: "Dynamic AI solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
