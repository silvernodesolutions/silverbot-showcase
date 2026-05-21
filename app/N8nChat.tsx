"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // Dynamically appends the official script file directly into the website's HTML document context
    const script = document.createElement("script");
    script.src = "https://jsdelivr.net";
    script.type = "module";
    script.async = true;

    script.onload = () => {
      const globalWindow = window as any;
      if (globalWindow.createChat) {
        globalWindow.createChat({
          // 🚨 Update your active Cloudflare tunnel link inside the quotation marks below
          webhookUrl: "https://blacks-shepherd-saint-differently.trycloudflare.com/webhook/9922192e-4e39-4ea3-b243-16192204207c/chat",
          mode: "window",
          showWelcomeScreen: false,
        });
      }
    };

    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return null;
}
