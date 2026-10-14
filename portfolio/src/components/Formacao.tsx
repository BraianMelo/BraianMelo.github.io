import { HiOutlineAcademicCap } from "react-icons/hi2";

const learningAreas = [
  "Fundamentos da computação",
  "Desenvolvimento de software",
  "Construção de aplicações",
];

const educationHistory = [
  {
    status: "Em andamento",
    level: "Graduação",
    title: "Ciência da Computação",
    institution: "Universidade Federal de São João del-Rei (UFSJ)",
    period: "2022 — atual",
    description:
      "Uma formação em andamento que amplia meu repertório para pensar problemas com clareza e criar soluções de software.",
  },
  {
    status: "Concluído",
    level: "Ensino técnico",
    title: "Técnico integrado ao Ensino Médio",
    institution: "IFTM, Campus Paracatu",
    period: "2019 — 2021",
  },
];

export default function Formacao() {
  return (
    <section
      id="formacao"
      className="bg-neutral-950 px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="self-center">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
            01 / Formação
          </span>
          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight md:text-5xl">
            Uma base sólida para ideias que ganham vida.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-300">
            Minha jornada acadêmica caminha junto com a prática: aprender os
            fundamentos, experimentar e transformar conhecimento em projetos.
          </p>
        </div>

        <div className="relative border-l border-neutral-800 py-2 pl-7 sm:pl-10">
          {educationHistory.map((education, index) => (
            <article
              key={education.title}
              className={`relative pb-10 ${index > 0 ? "border-t border-neutral-800 pt-8" : ""}`}
            >
              <span
                className={`absolute -left-[33px] top-5 h-2.5 w-2.5 rounded-full ring-4 ring-neutral-950 sm:-left-[45px] ${index === 0 ? "bg-white" : "bg-neutral-500"}`}
              />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-200">
                  {index === 0 && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-300" />
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
                <div>
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
                </div>
              </div>
            </article>
          ))}

          <div className="pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              No meu radar
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
