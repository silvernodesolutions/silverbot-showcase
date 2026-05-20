"use client";

import Script from "next/script";

export default function N8nChat() {
  const initializeChat = () => {
    const globalWindow = window as any;
    
    if (globalWindow.createChat) {
      globalWindow.createChat({
        // 🚨 Paste your active ngrok link here
        webhookUrl: "https://expenses-flaky-chili.ngrok-free.dev/webhook/c75651fe-7794-4bae-978a-4f2dddc97cf7/chat",
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
