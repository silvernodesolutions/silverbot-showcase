import type { Metadata } from "next";
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
      <head>
        {/* 🚀 Swapped out blocked jsdelivr with the reliable unpkg network */}
        <link rel="stylesheet" href="https://unpkg.com" />
        
        {/* GLOBAL STYLE INJECTOR: Overrides the n8n Shadow DOM elements cleanly */}
        <style>{`
          :root, body, n8n-chat {
            --n8n-chat-primary-color: #cbd5e1 !important;          /* Metallic Silver Accent */
            --n8n-chat-background-color: #0d0d0d !important;       /* Dark Obsidian Panel */
            --n8n-chat-text-color: #f8fafc !important;             /* Clear White Text */
            --n8n-chat-button-background: #1c1917 !important;      /* Slate Interactive Button */
          }
          /* Custom Logo Overrides for the floating button and header icon avatar */
          n8n-chat::shadow .n8n-chat-button img, 
          .n8n-chat-button img, 
          .n8n-chat-header-avatar img {
            content: url('/logo.png') !important;
            border-radius: 50% !important;
          }
        `}</style>
      </head>
      <body className="antialiased font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
