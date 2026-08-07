import heroImage from "../assets/images/Braian.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem */}
      <img
        src={heroImage}
        alt="Braian Melo"
        className="absolute inset-0 h-full w-full object-cover object-[55%_30%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Conteúdo */}
      <div className="absolute inset-0 z-10 flex items-end justify-end p-6 pb-20 md:p-12">
        <div className="max-w-xl text-right text-white">
          <span className="mb-4 block text-sm uppercase tracking-[0.35em] text-neutral-300">
            Portfólio
          </span>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">Braian Melo</h1>

          <p className="mb-3 text-xl md:text-2xl">Desenvolvedor Full Stack</p>

          <p className="mb-10 max-w-2xl text-neutral-300">
            Transformando ideias em aplicações modernas, performáticas e com
            foco na experiência do usuário.
          </p>

          <div className="flex flex-col justify-end gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-neutral-200"
            >
              Ver Projetos
            </a>

            <a
              href="#contato"
              className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-black"
            >
              Contato
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-3xl text-white">
        ↓
      </div>
    </section>
  );
}
