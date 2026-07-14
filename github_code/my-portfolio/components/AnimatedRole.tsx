"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedRole() {
  const [isSwapped, setIsSwapped] = useState(false);

  // Εναλλαγή κάθε 4 δευτερόλεπτα (αργός, σταθερός ρυθμός)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  // Οι κανόνες του 3D Animation
  const variants = {
    front: {
      y: "0%",
      scale: 1,
      color: "#f4f4f5", // Λευκό (zinc-100)
      opacity: 1,
      zIndex: 10,
      filter: "blur(0px)",
    },
    back: {
      y: "-65%", // Πάει πιο πάνω
      scale: 0.9, // Μικραίνει λίγο για να δώσει την αίσθηση του βάθους
      color: "#a855f7", // Έντονο Μωβ
      opacity: 0.5, // Πιο αχνό
      zIndex: 0,
      filter: "blur(2px)", // Θολώνει ελαφρώς για κινηματογραφικό εφέ
    },
  };

  return (
    <div className="flex flex-col items-start lg:items-end justify-center z-10 pointer-events-none">
      
      {/* Το στατικό "A Creative" */}
      <h2 className="text-xl md:text-3xl font-light text-zinc-300 mb-2 lg:mb-4">
        A Creative
      </h2>

      {/* Το Container: Αρκετά ψηλό (2.5em) για να χωράνε και οι 2 λέξεις άνετα */}
      <div className="relative h-[2.5em] w-[300px] md:w-[450px] lg:w-[500px] text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter drop-shadow-lg">

        {/* Λέξη 1: DESIGNER */}
        <motion.div
          variants={variants}
          initial="front"
          // Αν το isSwapped είναι true, πάει πίσω. Αλλιώς μπροστά.
          animate={isSwapped ? "back" : "front"} 
          // Απαλό, κινηματογραφικό easing διάρκειας 1.2 δευτερολέπτων
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }} 
          // Στοιχίζεται αριστερά στα κινητά και δεξιά στις μεγάλες οθόνες
          className="absolute bottom-0 left-0 origin-left lg:left-auto lg:right-0 lg:origin-right block leading-tight"
        >
          DESIGNER
        </motion.div>

        {/* Λέξη 2: DEVELOPER */}
        <motion.div
          variants={variants}
          initial="back"
          // Κάνει ακριβώς το αντίθετο από την πρώτη λέξη!
          animate={isSwapped ? "front" : "back"}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 origin-left lg:left-auto lg:right-0 lg:origin-right block leading-tight"
        >
          DEVELOPER
        </motion.div>

      </div>
    </div>
  );
}