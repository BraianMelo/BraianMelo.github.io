import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const navLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "formacao", label: "Formação" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];

const navLinkClassName = (active: boolean, mobile = false) =>
  [
    "relative after:absolute after:left-0 after:h-0.5 after:w-full after:bg-lime-300 after:transition-transform after:duration-300",
    mobile
      ? "w-fit border-b border-white/10 py-4 after:bottom-3"
      : "after:-bottom-2",
    active
      ? "text-lime-200 after:scale-x-100"
      : "text-white after:scale-x-0 transition hover:text-neutral-300 hover:after:scale-x-100",
  ].join(" ");

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.45;
      const currentSection = navLinks.find(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const { top, bottom } = section.getBoundingClientRect();
        return top <= marker && bottom > marker;
      });

      setActiveSection(currentSection?.id ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
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
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={navLinkClassName(activeSection === id)}
            >
              {label}
            </a>
          ))}
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
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 text-white">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              className={navLinkClassName(activeSection === id, true)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
