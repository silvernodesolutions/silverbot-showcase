"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // Dynamically imports the layout assets on the client side cleanly
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
            footer: " ", 
            getStarted: "Start Conversation",
            inputPlaceholder: "Ask SilverBot a question...",
            closeButtonTooltip: "Close Chat",
          },
        },
        // 💡 OFFICIAL NATIVE N8N COLOR CONFIGURATIONS
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

      // 💉 INJECT THEME CHANGES DIRECTLY TO BYPASS SHADOW DOM WALLS
      setTimeout(() => {
        const chatElement = document.querySelector("n8n-chat");
        if (chatElement && chatElement.shadowRoot) {
          const style = document.createElement("style");
          style.textContent = `
            :host, .n8n-chat-wrapper {
              --n8n-chat-primary-color: #cbd5e1 !important;
              --n8n-chat-background-color: #0d0d0d !important;
              --n8n-chat-text-color: #f8fafc !important;
            }
            /* Forces the input text typing window container layout block to render visibly */
            .n8n-chat-input, div[class*="chat-input"] {
              display: flex !important;
              visibility: visible !important;
              opacity: 1 !important;
            }
            /* Replaces default message icons with your premium custom logo graphic assets */
            .n8n-chat-button img, .n8n-chat-header-avatar img {
              content: url('/logo.png') !important;
              border-radius: 50% !important;
              object-fit: cover !important;
            }
            .n8n-chat-button {
              background-color: #1c1917 !important;
              border: 1px solid #444444 !important;
            }
          `;
          chatElement.shadowRoot.appendChild(style);
        }
      }, 1000); // 1-second delay ensures the widget is fully built inside the browser before styling it

    }).catch(err => console.error("Failed to load n8n chat bundle natively:", err));
  }, []);

  return null;
}
