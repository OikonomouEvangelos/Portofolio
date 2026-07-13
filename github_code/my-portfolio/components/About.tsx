export default function About() {
  return (
    <section 
      id="about" 
      className="relative flex min-h-screen items-center px-6 lg:px-24 xl:px-32"
    >
      {/* Το αριστερό 50% είναι άδειο για να χωρέσει το Avatar */}
      <div className="hidden lg:block lg:w-1/2"></div>
      
      {/* Το δεξί 50% έχει το κείμενο */}
      <div className="pointer-events-auto flex w-full flex-col justify-center lg:w-1/2 z-10">
        
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-300 uppercase">
            About Me
          </h2>
        </div>

        <p className="text-3xl font-bold leading-snug text-zinc-100 sm:text-4xl lg:text-4xl">
          I&apos;m a creative developer & designer with a passion for blending technical expertise with creative edge. Driven by curiosity, I always try to explore and learn new skills.
        </p>

      </div>
    </section>
  );
}