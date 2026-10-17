const skillGroups = [
  {
    category: "Front-end",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Back-end",
    technologies: [
      "Java",
      "Spring Boot",
      "Node.js",
      "PHP",
      "Slim 4",
      "Python",
      "C",
      "C++",
    ],
  },
  {
    category: "Banco de dados",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    category: "ORM e acesso a dados",
    technologies: ["Prisma", "Hibernate", "PDO"],
  },
  {
    category: "Ferramentas e práticas",
    technologies: ["Git", "GitHub", "Docker", "Postman", "Metodologias Ágeis"],
  },
];

const certificatesUrl =
  "https://www.linkedin.com/in/braian-melo-5b1345389/details/certifications/";

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="bg-black px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
              03 / Habilidades
            </span>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Tecnologias para tirar ideias do papel.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-neutral-300">
            Ferramentas que uso em projetos pessoais, acadêmicos e
            profissionais.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.category}
              className="border-t border-white/10 py-7"
            >
              <h3 className="text-lg font-medium">{group.category}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="border border-white/15 px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-lime-300/60 hover:text-lime-200"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <a
          href={certificatesUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-sm font-medium text-white transition hover:border-lime-300 hover:text-lime-200"
        >
          Ver certificados e cursos
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
