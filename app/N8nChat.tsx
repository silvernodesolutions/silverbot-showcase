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

      // Basic function to safely force injection of your logo image
      const injectLogoStyles = () => {
        const chatWidget = document.querySelector("n8n-chat");
        if (chatWidget && chatWidget.shadowRoot) {
          // Check to prevent duplicating styles
          if (chatWidget.shadowRoot.querySelector("#silverbot-logo-style")) return;

          const style = document.createElement("style");
          style.id = "silverbot-logo-style";
          style.textContent = `
            .n8n-chat-button img, 
            .n8n-chat-header-avatar img,
            div[class*="chat-header-avatar"] img {
              content: url('/logo.png') !important;
              border-radius: 50% !important;
              object-fit: cover !important;
            }
          `;
          chatWidget.shadowRoot.appendChild(style);
        }
      };

      // Watcher that triggers the instant the chatbot framework finishes mounting
      const observer = new MutationObserver(() => {
        injectLogoStyles();
      });

      observer.observe(document.body, { childList: true, subtree: true });
      injectLogoStyles(); 

    }).catch(err => console.error("Failed to load n8n assets:", err));
  }, []);

  return null;
}
