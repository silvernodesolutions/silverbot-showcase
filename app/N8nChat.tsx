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

      // Directly replaces image tags inside the Shadow DOM structure
      const hardcodeLogoAssets = () => {
        const chatWidget = document.querySelector("n8n-chat");
        if (chatWidget && chatWidget.shadowRoot) {
          
          // Find the floating action launcher button image
          const launcherImg = chatWidget.shadowRoot.querySelector(".n8n-chat-button img") as HTMLImageElement;
          if (launcherImg && !launcherImg.src.includes('/logo.png')) {
            launcherImg.src = '/logo.png';
            launcherImg.style.borderRadius = '50%';
            launcherImg.style.objectFit = 'cover';
          }

          // Find the internal header panel avatar image
          const headerImg = chatWidget.shadowRoot.querySelector(".n8n-chat-header-avatar img") as HTMLImageElement;
          if (headerImg && !headerImg.src.includes('/logo.png')) {
            headerImg.src = '/logo.png';
            headerImg.style.borderRadius = '50%';
            headerImg.style.objectFit = 'cover';
          }
        }
      };

      // Watcher to capture elements when they mount
      const observer = new MutationObserver(() => {
        hardcodeLogoAssets();
      });

      observer.observe(document.body, { childList: true, subtree: true });
      hardcodeLogoAssets(); 

    }).catch(err => console.error("Failed to load n8n assets:", err));
  }, []);

  return null;
}
