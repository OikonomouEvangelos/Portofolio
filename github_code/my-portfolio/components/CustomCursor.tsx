"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverRobot, setIsOverRobot] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // 1. Ελέγχουμε αν είμαστε πάνω από κείμενο/links
      const target = e.target as HTMLElement;
      const isText = target.closest("h1, h2, h3, h4, p, span, a, button, li, nav");
      setIsHoveringText(!!isText);

      // 2. Η ΜΑΓΕΙΑ: Φτιάχνουμε την αόρατη ζώνη του Ρομπότ
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Πόσο απέχει το ποντίκι από το κέντρο της οθόνης;
      const distanceX = Math.abs(e.clientX - centerX);
      const distanceY = Math.abs(e.clientY - centerY);

      // Αν το ποντίκι είναι κοντά στο κέντρο (σε ακτίνα περίπου 350-400px) 
      // ΚΑΙ βρισκόμαστε τέρμα πάνω στη σελίδα (δεν έχουμε σκρολάρει)
      if (distanceX < 350 && distanceY < 400 && window.scrollY < 100) {
        setIsOverRobot(true);
      } else {
        setIsOverRobot(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 100) setIsOverRobot(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ενεργοποιούμε το Volt ΜΟΝΟ αν είμαστε στη ζώνη του ρομπότ ΚΑΙ όχι πάνω σε κείμενο
  const showVolt = isOverRobot && !isHoveringText;

  return (
    <>
      {/* Ο ΜΑΓΙΚΟΣ ΦΑΚΟΣ / ΑΥΡΑ */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full"
        animate={{
          x: mousePosition.x - (showVolt ? 60 : 20),
          y: mousePosition.y - (showVolt ? 60 : 20),
        }}
        transition={{
          type: "spring",
          stiffness: 250, 
          damping: 20,
          mass: 0.5
        }}
        style={{
          width: showVolt ? 120 : 40,
          height: showVolt ? 120 : 40,
          backgroundColor: showVolt ? "rgba(204, 255, 0, 0.45)" : "#ffffff", 
          mixBlendMode: showVolt ? "color-dodge" : "difference", 
          filter: showVolt ? "blur(15px)" : "blur(2px)",
        }}
      />

      {/* Η ΜΙΚΡΗ ΛΕΥΚΗ ΤΕΛΕΙΑ ΣΤΟ ΚΕΝΤΡΟ */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
        style={{
          width: 6,
          height: 6,
          mixBlendMode: "difference",
          opacity: showVolt ? 0 : 1 
        }}
      />
    </>
  );
}