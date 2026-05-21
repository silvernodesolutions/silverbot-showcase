"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // 💡 BYPASS LOCALTUNNEL SECURITY BARRIER (User-Agent Interception Method)
    // Overrides fetch to use a non-standard browser identifier, skipping the warning page without triggering preflight blocks
    const originalFetch = window.fetch;
    window.fetch = function (input, init) {
      if (typeof input === "string" && input.includes("loca.lt")) {
        init = init || {};
        init.headers = {
          ...init.headers,
          "User-Agent": "Mozilla/5.0 (compatible; SilverBotShowcaseClient/1.0)",
        };
      }
      return originalFetch.call(this, input, init);
    };

    import("@n8n/chat").then((module) => {
      module.createChat({
        // 🚨 Update your active Localtunnel link inside the quotation marks below
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

      // Inject custom styling variables to guarantee a silver/dark look inside the shadow DOM
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
      }, 1000);
    }).catch(err => console.error("Failed to load n8n chat bundle:", err));
  }, []);

  return null;
}
