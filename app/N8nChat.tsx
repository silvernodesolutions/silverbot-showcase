"use client";

import { useState } from "react";

export default function N8nChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    { sender: "bot", text: "Hello! 👋 I am SilverBot v1.1, an automated assistant. Try asking me anything or ask me to handle a complex workflow!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setIsLoading(true);

    try {
      // 🚨 Replace this link with your active ngrok Webhook link from your node!
      const response = await fetch("https://ngrok-free.dev/webhook-test/3115fd7a-a092-4464-84e1-d9fabb55dc8e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();
      const botReply = data.text || data.output || "I am processing your workflow request now.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Connection error. Please check your backend service sync status." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-white">
      {/* Floating Toggle Icon Bubble Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition active:scale-95">
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Main Interactive Floating Chat Window Panel Layout Container */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-80 sm:w-96 h-[450px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header Profile Title Slot Banner */}
          <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-sm">🤖</div>
            <div>
              <h3 className="font-bold text-sm">SilverBot (version 1.1)</h3>
              <p className="text-[10px] text-neutral-400">AI Support Agent • Active 24/7</p>
            </div>
          </div>

          {/* Core Content Messages Mapping History Window Layout Field */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl leading-relaxed ${msg.sender === "user" ? "bg-purple-600 text-white rounded-br-none" : "bg-neutral-900 text-neutral-200 rounded-bl-none border border-neutral-800"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-900 border border-neutral-800 text-neutral-400 px-4 py-2.5 rounded-2xl rounded-bl-none animate-pulse text-xs">
                  SilverBot is processing...
                </div>
              </div>
            ))}
          </div>

          {/* Input Chat Message Field Box Form Bar Wrapper */}
          <form onSubmit={sendMessage} className="p-3 bg-neutral-900 border-t border-neutral-800 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask SilverBot a question..." className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-purple-500 text-neutral-200" />
            <button type="submit" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-xs transition">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
