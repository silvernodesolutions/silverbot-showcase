"use client";
import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then((module) => {
      module.createChat({
        webhookUrl: "https://fig-either-nursing-drama.trycloudflare.com/webhook/9922192e-4e39-4ea3-b243-16192204207c/chat",
        mode: "window",
        showWelcomeScreen: false,
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

      // Periodic piercing execution loop to firmly force the asset rewrite
      const forceLogoSwap = () => {
        const chatWidget = document.querySelector("n8n-chat");
        if (chatWidget && chatWidget.shadowRoot) {
          // 1. Force Launcher button logo
          const launcherBtn = chatWidget.shadowRoot.querySelector(".n8n-chat-button");
          if (launcherBtn) {
            let img = launcherBtn.querySelector("img");
            if (!img) {
              img = document.createElement("img");
              launcherBtn.appendChild(img);
            }
            if (img.getAttribute("src") !== "/logo.png") {
              img.setAttribute("src", "/logo.png");
              img.style.setProperty("content", "url('/logo.png')", "important");
              img.style.setProperty("border-radius", "50%", "important");
              img.style.setProperty("object-fit", "cover", "important");
            }
          }

          // 2. Force Chat Window Header avatar logo
          const avatarDiv = chatWidget.shadowRoot.querySelector(".n8n-chat-header-avatar");
          if (avatarDiv) {
            let img = avatarDiv.querySelector("img");
            if (!img) {
              img = document.createElement("img");
              avatarDiv.appendChild(img);
            }
            if (img.getAttribute("src") !== "/logo.png") {
              img.setAttribute("src", "/logo.png");
              img.style.setProperty("content", "url('/logo.png')", "important");
              img.style.setProperty("border-radius", "50%", "important");
              img.style.setProperty("object-fit", "cover", "important");
            }
          }
        }
      };

      // Poll every 500ms for a few seconds to intercept the rendering pipeline cleanly
      const intervalId = setInterval(forceLogoSwap, 500);
      setTimeout(() => clearInterval(intervalId), 10000);

    }).catch(err => console.error("Failed to load n8n assets:", err));
  }, []);

  return null;
}
