"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles: Particle[] = [];

    // ΡΥΘΜΙΣΕΙΣ ΕΝΤΑΣΗΣ (Τις ανεβάσαμε για πιο έντονο εφέ)
    const particleCount = 250; // Πιο πολλά σωματίδια (από 120)
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        // Πιο μεγάλα σωματίδια
        this.size = Math.random() * 2.5 + 1; 
        // Μεγαλύτερη ταχύτητα/βάρος αντίδρασης
        this.density = Math.random() * 40 + 5; 
      }

      draw() {
        if (!ctx) return;
        // Πιο έντονο μωβ χρώμα (0.8 opacity αντί για 0.4)
        ctx.fillStyle = "rgba(177, 133, 219, 0.8)"; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // Η ακτίνα που νιώθουν το ποντίκι (αυξήθηκε στα 220px)
        let maxDistance = 220; 
        let force = (maxDistance - distance) / maxDistance;
        
        // Πολλαπλασιάζουμε επί 2 τη δύναμη για πιο εκρηκτική απομάκρυνση
        let directionX = forceDirectionX * force * this.density * 2; 
        let directionY = forceDirectionY * force * this.density * 2;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 15; // Πιο ομαλή επιστροφή
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Αφαιρέσαμε το opacity-60 για να είναι 100% φωτεινό
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}