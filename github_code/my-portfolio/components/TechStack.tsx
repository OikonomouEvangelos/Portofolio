"use client";

import { motion } from "framer-motion";
// Εισαγωγή των icons από το react-icons
import { FaReact, FaNodeJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";
import ParticleBackground from "./ParticleBackground";

// Η λίστα με τις τεχνολογίες και τα αντίστοιχα icons τους
const technologies = [
  { name: "React", category: "FRONTEND", icon: FaReact, iconColor: "text-[#61DAFB]" },
  { name: "Next.js", category: "FRAMEWORK", icon: SiNextdotjs, iconColor: "text-zinc-100" },
  { name: "TypeScript", category: "LANGUAGE", icon: SiTypescript, iconColor: "text-[#3178C6]" },
  { name: "Tailwind CSS", category: "STYLING", icon: SiTailwindcss, iconColor: "text-[#38B2AC]" },
  { name: "Node.js", category: "BACKEND", icon: FaNodeJs, iconColor: "text-[#339933]" },
  { name: "Framer Motion", category: "ANIMATION", icon: SiFramer, iconColor: "text-[#0055FF]" },
  { name: "Git & GitHub", category: "VERSION CONTROL", icon: FaGithub, iconColor: "text-zinc-100" },
  { name: "Figma", category: "UI/UX DESIGN", icon: FaFigma, iconColor: "text-[#F24E1E]" },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative flex min-h-screen items-center justify-center py-24 overflow-hidden">
      
      {/* ΤΟ 3D PARTICLE BACKGROUND ΠΙΣΩ ΑΠΟ ΟΛΑ */}
      <ParticleBackground />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6">
        
        {/* ΤΙΤΛΟΣ */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-purple-400 uppercase">
            Tools & Technologies
          </p>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-zinc-100 sm:text-6xl md:text-7xl">
            My Tech Stack
          </h2>
        </div>

        {/* GRID ΜΕ ΤΑ ΚΟΥΤΙΑ */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Το στιλ με το dashed border που είχες
                className="group relative flex flex-col items-center justify-center p-8 border border-dashed border-zinc-800 bg-zinc-950/50 backdrop-blur-sm transition-colors hover:border-purple-500/50 hover:bg-zinc-900/50 pointer-events-auto"
              >
                {/* Γωνιακά σημαδάκια (προαιρετικά για έξτρα Cyberpunk feel) */}
                <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-zinc-700 transition-colors group-hover:border-purple-500" />
                <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-zinc-700 transition-colors group-hover:border-purple-500" />
                <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-zinc-700 transition-colors group-hover:border-purple-500" />
                <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-zinc-700 transition-colors group-hover:border-purple-500" />

                {/* Εικονίδιο */}
                <Icon className={`mb-4 text-5xl ${tech.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`} />
                
                {/* Κείμενα */}
                <h3 className="text-xl font-bold text-zinc-100 mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase group-hover:text-purple-300 transition-colors">
                  {tech.category}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}