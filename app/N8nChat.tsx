"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // Dynamically appends the official script file directly into the website context
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
          initialMessages: [
            "Hello! 👋 I am SilverBot v1.1, an automated assistant. Try asking me anything or ask me to handle a complex workflow!",
          ],
          i18n: {
            en: {
              title: "SilverBot (version 1.1)",
              subtitle: "AI Support Agent",
              footer: " ", 
              getStarted: "Start Conversation",
              inputPlaceholder: "Ask SilverBot a question...",
              closeButtonTooltip: "Close Chat",
            },
          },
          theme: {
            type: "dark",
            variables: {
              primaryColor: "#cbd5e1",
              backgroundColor: "#0d0d0d",
              textColor: "#f8fafc",
              chatWindowButtonBackground: "#1e293b",
            },
          },
        });

        // 🎨 SHADOW DOM INJECTION: Forces custom logo branding and layouts
        setTimeout(() => {
          const chatWidget = document.querySelector("n8n-chat");
          if (chatWidget && chatWidget.shadowRoot) {
            const style = document.createElement("style");
            style.textContent = `
              :host, .n8n-chat-wrapper {
                --n8n-chat-primary-color: #cbd5e1 !important;
                --n8n-chat-background-color: #0d0d0d !important;
                --n8n-chat-text-color: #f8fafc !important;
              }
              .n8n-chat-button img, .n8n-chat-header-avatar img {
                content: url('/logo.png') !important;
                border-radius: 50% !important;
                object-fit: cover !important;
              }
              .n8n-chat-button {
                background-color: #1c1917 !important;
                border: 1px solid #444444 !important;
              }
            `;
            chatWidget.shadowRoot.appendChild(style);
          }
        }, 1200);
      }
    };

    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return null;
}
