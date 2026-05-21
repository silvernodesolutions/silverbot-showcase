"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then((module) => {
      module.createChat({
        webhookUrl: "https://ngrok-free.dev",
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
        // 💡 Direct Style Injection to break through Shadow DOM restrictions
        styleOverride: `
          :host {
            --n8n-chat-primary-color: #cbd5e1 !important;
            --n8n-chat-background-color: #0d0d0d !important;
            --n8n-chat-text-color: #f8fafc !important;
          }
          .n8n-chat-button {
            background-color: #1c1917 !important;
            border: 1px solid #444444 !important;
          }
          .n8n-chat-button img {
            content: url('/logo.png') !important;
            border-radius: 50% !important;
          }
          .n8n-chat-header-avatar img {
            content: url('/logo.png') !important;
            border-radius: 50% !important;
          }
        `
      });
    }).catch(err => console.error("Failed to load n8n chat bundle natively:", err));
  }, []);

  return null;
}
