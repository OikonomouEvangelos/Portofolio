import AnimatedRole from "./AnimatedRole";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      <div className="relative z-10 flex w-full flex-col justify-between px-6 py-10 pointer-events-none lg:flex-row lg:items-center xl:px-16 2xl:px-24">
        
        {/* ΑΡΙΣΤΕΡΗ ΠΛΕΥΡΑ (Το όνομά σου) */}
        <div className="pointer-events-auto flex flex-col items-start text-left z-10">
          <span className="mb-2 text-xl font-light text-purple-200/80 sm:text-2xl">
            Hello! I&apos;m
          </span>
          <h1 className="flex flex-col text-5xl font-black leading-[0.85] tracking-tighter text-zinc-100 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span>EVANGELOS</span>
            <span>OIKONOMOU</span>
          </h1>
        </div>

        {/* ΔΕΞΙΑ ΠΛΕΥΡΑ (Εδώ μπαίνει πλέον το Animated Slot Machine!) */}
        <div className="pointer-events-auto mt-40 flex flex-col items-start lg:items-end text-left lg:text-right lg:mt-0 z-10">
          <AnimatedRole />
        </div>

      </div>
    </section>
  );
}