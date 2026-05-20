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
        {/* Forces the browser to load the mandatory styling definitions for the chat interface */}
        <link 
          rel="stylesheet" 
          href="https://jsdelivr.net" 
        />
      </head>
      <body className="antialiased font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
