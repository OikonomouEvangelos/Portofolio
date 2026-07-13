"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  const containerRef = useRef(null);

  // Παρακολουθούμε το scroll μέσα στο container μας
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Μαθηματικά του Animation: 
  // Όταν είμαστε στην αρχή (0), το Avatar είναι στο κέντρο (0%).
  // Όταν σκρολάρουμε στο τέλος της σελίδας (1), πάει αριστερά (-25%).
  const splineX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <main ref={containerRef} className="relative bg-zinc-950">
      
      {/* 3D AVATAR BACKGROUND (FIXED) */}
      {/* Το motion.div επιτρέπει στο framer-motion να του αλλάζει τη θέση (x) ομαλά */}
      <motion.div 
        style={{ x: splineX }}
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <Spline scene="https://prod.spline.design/1HTMTd5bd3oJYwK3/scene.splinecode" />
      </motion.div>

      {/* ΣΕΛΙΔΕΣ (ΚΕΙΜΕΝΑ ΠΟΥ ΣΚΡΟΛΑΡΟΥΝ ΑΠΟ ΠΑΝΩ) */}
      <div className="relative z-10 pointer-events-none">
        <Hero />
        <About />
      </div>

    </main>
  );
}