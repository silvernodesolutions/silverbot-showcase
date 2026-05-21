"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    // Dynamically imports the chat logic safely on the client side
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
            footer: " ", // Keeps the footer section empty
            getStarted: "Start Conversation",
            inputPlaceholder: "Ask SilverBot a question...",
            closeButtonTooltip: "Close Chat",
          },
        },
        // 💡 PREMIUM METALLIC SILVER THEME INJECTED NATIVELY (Bypasses Shadow DOM Blocks)
        theme: {
          type: "dark",
          variables: {
            primaryColor: "#cbd5e1",            /* Sleek Metallic Silver Accent */
            backgroundColor: "#0d0d0d",          /* Velvet Dark Slate Dashboard Interior */
            textColor: "#f8fafc",                /* Clean White Messaging Font */
            chatWindowButtonBackground: "#1e293b" /* Gunmetal Interactive Buttons */
          }
        }
      });
    }).catch(err => console.error("Failed to load n8n chat bundle natively:", err));
  }, []);

  return null;
}
