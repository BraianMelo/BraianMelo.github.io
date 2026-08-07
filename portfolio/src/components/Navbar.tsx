import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/60 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold tracking-wide text-white">
          Braian Melo
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-white md:flex">
          <a href="#sobre" className="transition hover:text-neutral-300">
            Sobre
          </a>

          <a href="#projetos" className="transition hover:text-neutral-300">
            Projetos
          </a>

          <a href="#habilidades" className="transition hover:text-neutral-300">
            Habilidades
          </a>

          <a href="#contato" className="transition hover:text-neutral-300">
            Contato
          </a>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? (
            <HiOutlineXMark size={30} />
          ) : (
            <HiOutlineBars3 size={30} />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden bg-black/90 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 text-white">
          <a
            href="#sobre"
            className="border-b border-white/10 py-4"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>

          <a
            href="#projetos"
            className="border-b border-white/10 py-4"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </a>

          <a
            href="#habilidades"
            className="border-b border-white/10 py-4"
            onClick={() => setMenuOpen(false)}
          >
            Habilidades
          </a>

          <a
            href="#contato"
            className="py-4"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
