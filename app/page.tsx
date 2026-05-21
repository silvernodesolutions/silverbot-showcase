"use client";

import dynamic from "next/dynamic"; // 💡 Imports the native Next.js dynamic loader module

// Prevents Next.js from rendering this component on the server, ensuring the input box initializes in the browser
const N8nChat = dynamic(() => import("./N8nChat"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* Visual background ambient lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/15 blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      {/* ─── HERO SECTION ─── */}
      <section className="min-h-[85vh] max-w-5xl mx-auto flex flex-col items-center justify-center px-6 text-center pt-20">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-neutral-900 border border-neutral-800 text-purple-400 mb-6 inline-block">
          SilverBot v1.1 • Live Production Demo
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent leading-none pb-4">
          Automate 80% of Your Customer Support
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
          Meet <span className="text-white font-semibold">SilverBot</span>. A highly intelligent AI agent built to capture leads, book clients, and resolve queries 24/7 without needing human intervention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full max-w-md">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition duration-300 text-center shadow-lg shadow-white/5 text-sm tracking-wide"
          >
            Deploy For Your Business
          </a>
          <button 
  onClick={() => {
    // 💡 Targets the core n8n web component element hidden inside the Shadow DOM
    const chatWidget = document.querySelector("n8n-chat");
    if (chatWidget && chatWidget.shadowRoot) {
      // Searches inside the shadow barrier for the core floating action trigger button layer
      const targetBubble = chatWidget.shadowRoot.querySelector(".n8n-chat-button") as HTMLElement;
      if (targetBubble) {
        targetBubble.click(); // Automatically fires a browser click event to pop open the window!
      }
    }
  }}
  className="px-8 py-4 bg-neutral-900 text-neutral-200 font-semibold rounded-xl border border-neutral-800 hover:border-purple-600 transition duration-300 text-center text-sm shadow-md hover:shadow-purple-600/10"
>
  Test Live Agent 👇
</button>
        </div>
      </section>

      {/* ─── FEATURES & VALUE PROPOSITION ─── */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for Scaling Workflows</h2>
          <p className="text-neutral-400 mt-3 text-base">Why businesses choose automated neural workflows over manual support desks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition duration-300">
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mb-6">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Instant Response</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Zero delays. Customers receive structured answers, accurate information, and document updates in milliseconds.</p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition duration-300">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold mb-6">🔗</div>
            <h3 className="text-lg font-bold text-white mb-2">CRM Deep Integration</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">SilverBot maps lead payloads natively into tools like Notion, HubSpot, sheets, or email databases effortlessly via n8n backend integrations.</p>
          </div>
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition duration-300">
            <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold mb-6">📉</div>
            <h3 className="text-lg font-bold text-white mb-2">Reduce Support Costs</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Slash operational customer desk overhead by handing tedious, repetitive tasks and triage over to AI.</p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT & CAPTURE SECTION ─── */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-24 text-center border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-white tracking-tight">Want a Custom Agent?</h2>
        <p className="text-neutral-400 mt-2 text-base max-w-sm mx-auto mb-10">
          Leave your requirements below. I will design an automation setup tailored exactly for your specific business.
        </p>

        <form action="https://formspree.io" method="POST" className="space-y-4 text-left bg-neutral-950 p-8 rounded-2xl border border-neutral-900">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Business Email</label>
            <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-purple-500 transition text-sm text-neutral-200" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Message & Use Case</label>
            <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-purple-500 transition text-sm text-neutral-200" placeholder="Explain what tasks you want your chatbot to handle..."></textarea>
          </div>
          <button type="submit" className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 font-bold rounded-xl transition duration-300 text-sm text-white tracking-wide">
            Send Inquiry Request
          </button>
        </form>
      </section>

      {/* Live widget renderer */}
      <N8nChat />
    </main>
  );
}
