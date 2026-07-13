export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      <div className="relative z-10 flex w-full flex-col justify-between px-6 py-10 pointer-events-none lg:flex-row lg:items-center xl:px-16 2xl:px-24">
        
        <div className="pointer-events-auto flex flex-col items-start text-left z-10">
          <span className="mb-2 text-xl font-light text-purple-200/80 sm:text-2xl">
            Hello! I&apos;m
          </span>
          <h1 className="flex flex-col text-5xl font-black leading-[0.85] tracking-tighter text-zinc-100 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span>ΒΑΓΓΕΛΗΣ</span>
            <span>ΟΙΚΟΝΟΜΟΥ</span>
          </h1>
        </div>

        <div className="pointer-events-auto mt-40 flex flex-col items-start lg:items-end text-left lg:text-right lg:mt-0 z-10">
          <span className="mb-2 text-xl font-light text-purple-200/80 sm:text-2xl">
            A Creative
          </span>
          <div className="flex flex-col items-start lg:items-end text-5xl font-black uppercase leading-[0.8] tracking-tighter sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span className="bg-gradient-to-b from-purple-500 to-zinc-950 bg-clip-text text-transparent opacity-80 z-0">
              Developer
            </span>
            <span className="-mt-4 text-zinc-100 sm:-mt-6 lg:-mt-8 z-10">
              Designer
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}