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

      // Piercing function that aggressively clears native SVG images and forces your asset
      const enforceLogoGraphic = () => {
        const chatWidget = document.querySelector("n8n-chat");
        if (chatWidget && chatWidget.shadowRoot) {
          
          // 1. Force Launcher circular button image block
          const launcherBtn = chatWidget.shadowRoot.querySelector("button") || 
                              chatWidget.shadowRoot.querySelector(".n8n-chat-button");
          
          if (launcherBtn) {
            // Remove n8n's built-in white chat-bubble svg icon if it is present
            const nativeSvg = launcherBtn.querySelector("svg");
            if (nativeSvg) nativeSvg.remove();

            // Apply logo as a direct centered layout background element
            const btnEl = launcherBtn as HTMLElement;
            btnEl.style.backgroundImage = "url('/logo.png')";
            btnEl.style.backgroundSize = "cover";
            btnEl.style.backgroundPosition = "center";
            btnEl.style.backgroundRepeat = "no-repeat";
            btnEl.style.borderRadius = "50%";
            btnEl.style.width = "56px";
            btnEl.style.height = "56px";
          }

          // 2. Force Upper Chat Window Panel Avatar Header graphic
          const headerAvatar = chatWidget.shadowRoot.querySelector(".n8n-chat-header-avatar");
          if (headerAvatar) {
            const avatarEl = headerAvatar as HTMLElement;
            avatarEl.style.backgroundImage = "url('/logo.png')";
            avatarEl.style.backgroundSize = "cover";
            avatarEl.style.backgroundPosition = "center";
            avatarEl.style.borderRadius = "50%";
            
            // Clean up any broken default image placeholders left over inside
            const innerImg = avatarEl.querySelector("img");
            if (innerImg) innerImg.style.opacity = "0";
          }
        }
      };

      // Set up a loop to repeatedly apply the fix until the component fully hydrates
      const runInterval = setInterval(enforceLogoGraphic, 300);
      setTimeout(() => clearInterval(runInterval), 8000);

    }).catch(err => console.error("Could not mount n8n UI components:", err));
  }, []);

  return null;
}
