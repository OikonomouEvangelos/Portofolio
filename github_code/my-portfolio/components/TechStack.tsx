export default function TechStack() {
  // Εδώ ορίζεις τα εργαλεία που γνωρίζεις. Μπορείς να προσθέσεις ή να αφαιρέσεις όσα θες!
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Framer Motion", category: "Animation" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "Figma", category: "UI/UX Design" },
  ];

  return (
    <section 
      id="techstack" 
      className="relative z-30 flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 px-6 py-20 lg:px-16 xl:px-24"
    >
      
      {/* Τίτλος */}
      <div className="mb-20 flex flex-col items-center text-center">
        <span className="mb-4 text-sm font-bold tracking-[0.2em] text-purple-400 uppercase">
          Tools & Technologies
        </span>
        <h2 className="text-5xl font-black uppercase tracking-tighter text-white sm:text-6xl lg:text-7xl">
          My Tech Stack
        </h2>
      </div>

      {/* Grid με τις κάρτες των τεχνολογιών */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="group relative flex cursor-default flex-col items-center justify-center border border-dashed border-zinc-800 bg-zinc-900/20 py-10 transition-colors duration-500 hover:bg-zinc-900/80 hover:border-zinc-700"
          >
            {/* Μωβ Glow Effect (Εμφανίζεται στο hover) */}
            <div className="absolute inset-0 z-0 bg-purple-500/0 transition-colors duration-500 group-hover:bg-purple-500/5 blur-xl"></div>

            {/* Διακοσμητικές Γωνίες (Ανάβουν μωβ στο hover) */}
            <div className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-zinc-600 transition-colors duration-300 group-hover:border-purple-400"></div>
            <div className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-zinc-600 transition-colors duration-300 group-hover:border-purple-400"></div>
            <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-zinc-600 transition-colors duration-300 group-hover:border-purple-400"></div>
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-zinc-600 transition-colors duration-300 group-hover:border-purple-400"></div>

            {/* Κείμενα */}
            <span className="relative z-10 text-xl font-bold tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white">
              {tech.name}
            </span>
            <span className="relative z-10 mt-2 text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase transition-colors duration-300 group-hover:text-purple-300">
              {tech.category}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}