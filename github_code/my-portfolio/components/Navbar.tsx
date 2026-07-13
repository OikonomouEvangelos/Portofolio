import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-zinc-900 border-b border-zinc-800">
      <div className="text-xl font-bold text-white">
        <Link href="/">Evangelos.dev</Link>
      </div>
      
      <ul className="flex space-x-6 text-zinc-300">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Αρχική
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            Επικοινωνία
          </Link>
        </li>
      </ul>
    </nav>
  );
}