"use client";

import { useState } from "react";

export default function WhatIDo() {
  // Αυτό ελέγχει ποια κάρτα είναι ανοιχτή (develop, design, ή καμία)
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (card: string) => {
    setOpenCard(openCard === card ? null : card);
  };

  return (
    <section 
      id="work" 
      // Αλλάξαμε σε pointer-events-none για να περνάει το ποντίκι στο 3D Avatar!
      className="relative flex min-h-screen flex-col items-center justify-between px-6 py-20 lg:flex-row lg:px-16 xl:px-24 pointer-events-none"
    >
      
      {/* ΑΡΙΣΤΕΡΟ ΜΕΡΟΣ: Τίτλος */}
      <div className="flex w-full flex-col text-left lg:w-1/4 z-10 pointer-events-auto">
        <h2 className="text-6xl font-black uppercase tracking-tighter text-white sm:text-7xl xl:text-8xl">
          What
          <br />
          <span className="text-purple-400">I Do</span>
        </h2>
      </div>

      {/* ΚΕΝΤΡΙΚΟ ΜΕΡΟΣ: Άδειος χώρος (Τώρα το ποντίκι περνάει από μέσα του!) */}
      <div className="hidden h-[400px] w-full lg:block lg:h-[600px] lg:w-2/4"></div>

      {/* ΔΕΞΙ ΜΕΡΟΣ: Tech Cards */}
      <div className="flex w-full flex-col gap-8 lg:w-1/3 z-10 mt-10 lg:mt-0 pointer-events-auto">
        
        {/* ================= ΚΑΡΤΑ 1: DEVELOP ================= */}
        <div 
          onClick={() => toggleCard('develop')}
          className="relative cursor-pointer overflow-hidden border border-dashed border-zinc-700 bg-zinc-950/80 p-8 backdrop-blur-md transition-colors hover:bg-zinc-900/90"
        >
          {/* Μωβ Λάμψη (Εμφανίζεται μόνο όταν είναι ανοιχτή) */}
          <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-400 blur-[50px] transition-opacity duration-500 ${openCard === 'develop' ? 'opacity-40' : 'opacity-0'}`}></div>

          {/* Γωνίες */}
          <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-zinc-400"></div>
          <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-zinc-400"></div>
          <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-zinc-400"></div>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-zinc-400"></div>

          <h3 className="mb-2 text-3xl font-black uppercase tracking-wide text-white">Develop</h3>
          <p className="mb-4 text-xs tracking-widest text-zinc-500 uppercase">Description</p>
          <p className="text-sm leading-relaxed text-zinc-400">
            Started building websites with React and Next.js, now I craft custom high-performance applications, dashboards, and scalable architectures.
          </p>

          {/* Αναδιπλούμενο Περιεχόμενο (Accordion Effect) */}
          <div className={`grid transition-all duration-300 ease-in-out ${openCard === 'develop' ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
            <div className="overflow-hidden">
              <p className="mb-3 text-xs tracking-widest text-zinc-500 uppercase">Skillset & Tools</p>
              <div className="flex flex-wrap gap-2">
                {/* Badges */}
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">JavaScript</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">TypeScript</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">React</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">Next.js</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Βελάκι (Αλλάζει φορά ανάλογα με το state) */}
          <div className="absolute bottom-6 right-6 border border-zinc-700 p-1">
            <svg className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${openCard === 'develop' ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* ================= ΚΑΡΤΑ 2: DESIGN ================= */}
        <div 
          onClick={() => toggleCard('design')}
          className="relative cursor-pointer overflow-hidden border border-dashed border-zinc-700 bg-zinc-950/80 p-8 backdrop-blur-md transition-colors hover:bg-zinc-900/90"
        >
          {/* Μωβ Λάμψη */}
          <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-400 blur-[50px] transition-opacity duration-500 ${openCard === 'design' ? 'opacity-40' : 'opacity-0'}`}></div>

          {/* Γωνίες */}
          <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-zinc-400"></div>
          <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-zinc-400"></div>
          <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-zinc-400"></div>
          <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-zinc-400"></div>

          <h3 className="mb-2 text-3xl font-black uppercase tracking-wide text-white">Design</h3>
          <p className="mb-4 text-xs tracking-widest text-zinc-500 uppercase">Description</p>
          <p className="text-sm leading-relaxed text-zinc-400">
            I blend modern UI/UX principles with creative aesthetics to deliver intuitive, engaging, and accessible digital experiences.
          </p>

          {/* Αναδιπλούμενο Περιεχόμενο */}
          <div className={`grid transition-all duration-300 ease-in-out ${openCard === 'design' ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
            <div className="overflow-hidden">
              <p className="mb-3 text-xs tracking-widest text-zinc-500 uppercase">Skillset & Tools</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">Figma</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">UI/UX Design</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">Spline 3D</span>
                <span className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-300">Framer Motion</span>
              </div>
            </div>
          </div>

          {/* Βελάκι */}
          <div className="absolute bottom-6 right-6 border border-zinc-700 p-1">
            <svg className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${openCard === 'design' ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}