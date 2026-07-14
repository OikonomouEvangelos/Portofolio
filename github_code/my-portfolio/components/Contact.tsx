"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // 1. ΣΩΤΗΡΙΟ ΒΗΜΑ: Αποθηκεύουμε τη φόρμα σε μια σταθερή μεταβλητή ΤΩΡΑ 
    // πριν ξεκινήσει το fetch, ώστε να μην τη "χάσει" η React μετά το await!
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // 2. Χρησιμοποιούμε τη μεταβλητή μας για να αδειάσουμε τη φόρμα με ασφάλεια!
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Frontend Submit Error:", error);
      setStatus("error");
    }
  };

  return (
    <section 
      id="contact" 
      className="relative z-30 flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 px-6 py-20 lg:px-16 xl:px-24 pointer-events-auto"
    >
      <div className="flex w-full max-w-5xl flex-col gap-12 lg:flex-row lg:items-center">
        
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col text-left lg:w-1/2">
          <span className="mb-4 text-sm font-bold tracking-[0.2em] text-purple-400 uppercase">
            Get In Touch
          </span>
          <h2 className="mb-6 text-5xl font-black uppercase tracking-tighter text-white sm:text-6xl">
            Let&apos;s Build
            <br />
            Something <span className="text-purple-400">Great</span>
          </h2>
          <p className="mb-8 max-w-md text-zinc-400">
            Have a project in mind, looking for a developer for your team, or just want to say hi? Fill out the form below and I&apos;ll get back to you as soon as possible!
          </p>
          <div className="text-zinc-500">
            <p className="text-xs tracking-widest uppercase">Direct Email</p>
            {/* Μην ξεχάσεις να βάλεις εδώ το πραγματικό σου email */}
            <a href="mailto:oikonomouevaggelos35@gmail.com" className="text-lg font-bold text-white hover:text-purple-400 transition-colors">
              oikonomouevaggelos35@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="relative w-full border border-dashed border-zinc-800 bg-zinc-900/20 p-8 lg:w-1/2">
          <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-zinc-600"></div>
          <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-zinc-600"></div>
          <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-zinc-600"></div>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-zinc-600"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col">
              <label className="mb-2 text-xs font-bold tracking-widest text-zinc-500 uppercase">Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                disabled={status === "loading"}
                className="w-full border border-zinc-800 bg-zinc-950/50 p-3 text-white outline-none transition-colors focus:border-purple-400 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-xs font-bold tracking-widest text-zinc-500 uppercase">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                disabled={status === "loading"}
                className="w-full border border-zinc-800 bg-zinc-950/50 p-3 text-white outline-none transition-colors focus:border-purple-400 disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-xs font-bold tracking-widest text-zinc-500 uppercase">Message</label>
              <textarea 
                name="message" 
                required 
                rows={5}
                disabled={status === "loading"}
                className="w-full resize-none border border-zinc-800 bg-zinc-950/50 p-3 text-white outline-none transition-colors focus:border-purple-400 disabled:opacity-50"
                placeholder="How can I help you?"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="relative mt-4 w-full bg-purple-600 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:bg-zinc-600 disabled:shadow-none"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback Messages */}
            {status === "success" && (
              <p className="text-center text-sm text-green-400">Your message was sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}