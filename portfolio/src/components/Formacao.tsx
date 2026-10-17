import { HiOutlineAcademicCap } from "react-icons/hi2";

const learningAreas = [
  "Arquitetura de software",
  "Engenharia de software",
  "Desenvolvimento de aplicações web",
];

const educationHistory = [
  {
    title: "Ciência da Computação",
    institution: "Universidade Federal de São João del-Rei (UFSJ)",
    period: "2022 – Dezembro/2026",
    status: "Em andamento",
    description:
      "Ao longo do curso, venho aprendendo os fundamentos da computação e aplicando esse conhecimento em projetos e atividades práticas.",
    experiences: [
      {
        title: "Linked - Assessor de Projetos (Web)",
        organization: "Empresa Júnior de Ciência da Computação da UFSJ",
        period: "Jun/2025 – Atual",
        description:
          "Participo de projetos web, colaborando com a equipe na organização das demandas e no desenvolvimento das soluções.",
      },
    ],
  },
  {
    status: "Concluído",
    level: "Ensino técnico",
    title: "Técnico integrado ao Ensino Médio",
    description:
      "Formação técnica em Informática, com contato inicial com programação e desenvolvimento de sistemas.",
    institution: "IFTM, Campus Paracatu",
    period: "2019 — 2021",
  },
];

export default function Formacao() {
  return (
    <section id="formacao" className="bg-black px-6 py-24 text-white lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="self-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
            01 / Formação
          </span>

          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight md:text-5xl">
            Construindo conhecimento e experiência.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-300">
            Curso Ciência da Computação na UFSJ e procuro colocar em prática o
            que aprendo, participando de projetos e trabalhando em equipe.
          </p>
        </div>

        <div className="relative border-l border-neutral-800 py-2 pl-7 sm:pl-10">
          {educationHistory.map((education, index) => (
            <article
              key={education.title}
              className={`relative pb-10 ${
                index > 0 ? "border-t border-neutral-800 pt-8" : ""
              }`}
            >
              <span
                className={`absolute -left-[33px] top-5 h-2.5 w-2.5 rounded-full ring-4 ring-black sm:-left-[45px] ${
                  index === 0 ? "bg-white" : "bg-neutral-500"
                }`}
              />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                    education.status === "Concluído"
                      ? "text-lime-200"
                      : "text-yellow-200"
                  }`}
                >
                  {education.status === "Em andamento" && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-300" />
                  )}
                  {education.status}
                </span>

                <span className="text-sm text-neutral-400">
                  {education.period}
                </span>
              </div>

              <div className="mt-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-neutral-950">
                  <HiOutlineAcademicCap size={25} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {education.title}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-400">
                    {education.institution}
                  </p>

                  {education.description && (
                    <p className="mt-3 max-w-xl leading-7 text-neutral-300">
                      {education.description}
                    </p>
                  )}

                  {education.experiences?.map((experience) => (
                    <div
                      key={experience.title}
                      className="mt-6 border-l-2 border-neutral-700 pl-4"
                    >
                      <h4 className="font-semibold text-white">
                        {experience.title}
                      </h4>

                      <p className="mt-1 text-sm text-neutral-400">
                        {experience.organization}
                      </p>

                      <p className="mt-1 text-xs text-neutral-500">
                        {experience.period}
                      </p>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-300">
                        {experience.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              O que quero aprofundar
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {learningAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex gap-3 text-sm leading-6 text-neutral-300"
                >
                  <span className="font-mono text-neutral-500">
                    0{index + 1}
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
