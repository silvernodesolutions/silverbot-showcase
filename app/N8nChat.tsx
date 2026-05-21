"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then((module) => {
      module.createChat({
        // 🚨 Paste your active Cloudflare tunnel link inside the quotation marks below
        webhookUrl: "https://fig-either-nursing-drama.trycloudflare.com/webhook/9922192e-4e39-4ea3-b243-16192204207c/chat",
        mode: "window",
        showWelcomeScreen: false,
        
        // 💡 CRUCIAL FOR NON-AI WORKFLOWS: Changes input keys to send plain text payloads
        chatInputKey: "message", 
        chatSessionKey: "action",
        
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
      });
    }).catch(err => console.error("Failed to load n8n chat bundle:", err));
  }, []);

  return null;
}
