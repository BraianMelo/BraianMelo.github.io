import SobreMimImagem from "../assets/images/SobreMim.jpg";

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Git",
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-black px-6 py-24 text-white lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Foto */}
        <div className="flex justify-center">
          <img
            src={SobreMimImagem}
            alt="Braian Melo"
            className="h-[550px] w-full max-w-md rounded-3xl object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Um pouco sobre mim
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Código, curiosidade e vontade de aprender.
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-300">
            Curso Ciência da Computação na UFSJ e gosto de ver minhas ideias
            saindo do papel e se transformando em aplicações que funcionam de
            verdade.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Nos meus projetos, já trabalhei em diferentes partes de uma
            aplicação, desde a interface até o banco de dados. React, Next.js,
            Node.js, PHP e PostgreSQL são algumas das tecnologias com que tenho
            trabalhado.
          </p>

          {/* Tecnologias */}
          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:border-white hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botão */}
          <a
            href="#projetos"
            className="mt-12 inline-flex rounded-full border border-white px-8 py-3 font-medium transition hover:bg-white hover:text-black"
          >
            Conheça meus projetos
          </a>
        </div>
      </div>
    </section>
  );
}
