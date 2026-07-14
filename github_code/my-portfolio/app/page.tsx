"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo"; 
import TechStack from "@/components/TechStack";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Χορογραφία Avatar: [Hero (Κέντρο), About (Αριστερά), What I Do (Κέντρο)]
  const splineX = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-25%", "0%"]);

  return (
    <main ref={containerRef} className="relative bg-zinc-950">
      <SocialLinks />
      
      {/* 3D AVATAR BACKGROUND (FIXED) */}
      <motion.div 
        id="spline-robot"
        style={{ x: splineX }}
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <Spline scene="https://prod.spline.design/1HTMTd5bd3oJYwK3/scene.splinecode" />
      </motion.div>

      {/* ΣΕΛΙΔΕΣ ΠΟΥ ΣΚΡΟΛΑΡΟΥΝ (Όλες μαζί στο ίδιο wrapper πλέον!) */}
      <div className="relative z-10 pointer-events-none">
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <Contact />
        <Footer />
      </div>

    </main>
  );
}