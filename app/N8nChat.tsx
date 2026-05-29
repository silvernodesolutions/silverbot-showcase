"use client";
import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then((module) => {
      module.createChat({
        webhookUrl: "https://bot.silvernodesolutions.com/webhook/41dd6a9b-88f1-4b6c-a845-0fa527cc7a5f/chat",
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

      const enforceChatStyling = () => {
        const logoUrl = "/logo.png";

        const allButtons = document.querySelectorAll("button");

        allButtons.forEach((el) => {
          const btn = el as HTMLElement;
          const rect = btn.getBoundingClientRect();

          const isFloatingLauncher =
            rect.width >= 45 &&
            rect.width <= 95 &&
            rect.height >= 45 &&
            rect.height <= 95 &&
            rect.bottom > window.innerHeight - 150 &&
            rect.right > window.innerWidth - 150;

          if (isFloatingLauncher) {
            btn.querySelectorAll("svg").forEach((svg) => svg.remove());

            btn.style.backgroundImage = `url('${logoUrl}')`;
            btn.style.backgroundSize = "82%";
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
          }

          const isLikelySendButton =
            rect.width >= 30 &&
            rect.width <= 60 &&
            rect.height >= 30 &&
            rect.height <= 60 &&
            !isFloatingLauncher &&
            btn.closest("form, textarea, input, [class*='chat']");

          if (isLikelySendButton) {
            btn.style.backgroundImage = "none";
            btn.style.backgroundColor = "#334155";
            btn.style.border = "1px solid rgba(148, 163, 184, 0.45)";
            btn.style.borderRadius = "999px";
            btn.style.filter = "none";
            btn.style.webkitFilter = "none";
          }
        });
      };

      const runInterval = setInterval(enforceChatStyling, 300);
      setTimeout(() => clearInterval(runInterval), 10000);
    }).catch((err) =>
      console.error("Could not mount n8n UI components:", err)
    );
  }, []);

  return null;
}
