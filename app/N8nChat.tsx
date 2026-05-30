"use client";
import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat")
      .then((module) => {
        module.createChat({
          webhookUrl:
            "https://bot.silvernodesolutions.com/webhook/41dd6a9b-88f1-4b6c-a845-0fa527cc7a5f/chat",
          mode: "window",
          showWelcomeScreen: false,
          chatInputKey: "chatInput",
          chatSessionKey: "sessionId",
          initialMessages: [
            "Hello! 👋 I am SilverBot, an automated assistant. Try asking me anything or ask me to handle a complex workflow!",
          ],
          i18n: {
            en: {
              title: "SilverBot (v1.1)",
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

        const enforceLogoGraphic = () => {
  const launcherButtons = document.querySelectorAll(".chat-window-toggle");

  launcherButtons.forEach((el) => {
    const btn = el as HTMLElement;

    btn.querySelectorAll("svg").forEach((svg) => svg.remove());
    btn.querySelectorAll("img.silverbot-launcher-logo").forEach((img) => img.remove());

    btn.style.backgroundImage = "url('/logo.png')";
    btn.style.backgroundSize = "78%";
    btn.style.backgroundPosition = "center";
    btn.style.backgroundRepeat = "no-repeat";
    btn.style.backgroundColor = "#000000";
    btn.style.border = "2px solid rgba(156, 163, 175, 0.9)";
    btn.style.borderRadius = "50%";
    btn.style.opacity = "1";
    btn.style.filter = "none";
    btn.style.webkitFilter = "none";
    btn.style.mixBlendMode = "normal";
    btn.style.boxShadow =
      "0 0 14px rgba(156, 163, 175, 0.35), 0 0 24px rgba(139, 92, 246, 0.22)";
  });
};
        const runInterval = setInterval(enforceLogoGraphic, 300);
        setTimeout(() => clearInterval(runInterval), 10000);
      })
      .catch((err) =>
        console.error("Could not mount n8n UI components:", err)
      );
  }, []);

  return null;
}
