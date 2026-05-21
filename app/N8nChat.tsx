"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // Dynamically imports the chat logic on the client side safely
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
            footer: "Powered by n8n Workflows",
            getStarted: "Start Conversation",
            inputPlaceholder: "Ask SilverBot a question...",
          },
        },
      });
    }).catch(err => console.error("Failed to load n8n chat bundle natively:", err));
  }, []);

  return null;
}
