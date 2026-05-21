"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then((module) => {
      module.createChat({
        // 🚨 1. Paste your current active Cloudflare tunnel address right here
        webhookUrl: "https://blacks-shepherd-saint-differently.trycloudflare.com/webhook/9922192e-4e39-4ea3-b243-16192204207c/chat",
        mode: "window",
        showWelcomeScreen: false,
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

      // 💉 Force-inject style definitions inside the Shadow DOM container after mount
      setTimeout(() => {
        const chatWidget = document.querySelector("n8n-chat");
        if (chatWidget && chatWidget.shadowRoot) {
          const style = document.createElement("style");
          style.textContent = `
            :host, .n8n-chat-wrapper, .n8n-chat-window {
              --n8n-chat-primary-color: #cbd5e1 !important;
              --n8n-chat-background-color: #0d0d0d !important;
              --n8n-chat-text-color: #f8fafc !important;
            }
            .n8n-chat-input, div[class*="chat-input"] {
              display: flex !important;
              visibility: visible !important;
              opacity: 1 !important;
            }
            .n8n-chat-button img, .n8n-chat-header-avatar img {
              content: url('/logo.png') !important;
              border-radius: 50% !important;
            }
          `;
          chatWidget.shadowRoot.appendChild(style);
        }
      }, 1500); // 1.5-second buffer guarantees everything loads before styles are applied
    }).catch(err => console.error("Failed to compile native n8n route:", err));
  }, []);

  return null;
}
