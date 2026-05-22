"use client";
import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then((module) => {
      module.createChat({
        webhookUrl: "https://appreciated-perfectly-tion-classic.trycloudflare.com/webhook/9922192e-4e39-4ea3-b243-16192204207c/chat",
        mode: "window",
        showWelcomeScreen: false,
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
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

      // Piercing function that aggressively clears native SVG images and forces your asset
      const enforceLogoGraphic = () => {
  const logoUrl = "/logo.png";

  const possibleButtons = document.querySelectorAll(
    "button, .chat-window-toggle, .chat-window-button, .n8n-chat-button"
  );

  possibleButtons.forEach((el) => {
    const btn = el as HTMLElement;

    const rect = btn.getBoundingClientRect();

    // Only target floating circular chat button
    if (rect.width >= 40 && rect.width <= 90 && rect.height >= 40 && rect.height <= 90) {
      btn.querySelectorAll("svg").forEach((svg) => svg.remove());

      btn.style.backgroundImage = `url('${logoUrl}')`;
      btn.style.backgroundSize = "cover";
      btn.style.backgroundPosition = "center";
      btn.style.backgroundRepeat = "no-repeat";
      btn.style.borderRadius = "50%";
    }
  });
};
      // Set up a loop to repeatedly apply the fix until the component fully hydrates
      const runInterval = setInterval(enforceLogoGraphic, 300);
      setTimeout(() => clearInterval(runInterval), 8000);

    }).catch(err => console.error("Could not mount n8n UI components:", err));
  }, []);

  return null;
}
