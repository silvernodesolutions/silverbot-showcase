"use client";

import Script from "next/script";

export default function N8nChat() {
  const initializeChat = () => {
    const globalWindow = window as any;
    
    if (globalWindow.createChat) {
      globalWindow.createChat({
        // 🚨 Paste your active ngrok link here
        webhookUrl: "https://expenses-flaky-chili.ngrok-free.dev/webhook/fd0bd00d-608f-4ad4-a984-f36a8d7ea8ee/chat",
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
    }
  };

  return (
    <Script
      src="https://jsdelivr.net"
      type="module"
      strategy="afterInteractive"
      onLoad={initializeChat}
    />
  );
}
