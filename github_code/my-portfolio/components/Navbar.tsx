import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 bg-transparent lg:px-24 xl:px-32">
      
      {/* Λογότυπο / Αρχικά (Αριστερά) */}
      <div className="text-2xl font-black tracking-tighter text-white">
        <Link href="/">oikonomou.dev</Link>
      </div>
      
      {/* Links (Δεξιά) */}
      <ul className="flex space-x-8 text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase sm:space-x-12">
        <li>
          {/* Το href="#about" ψάχνει να βρει το section με id="about" */}
          <Link href="#about" className="hover:text-white transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#work" className="hover:text-white transition-colors duration-300">
            Work
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
}