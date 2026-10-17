import { useEffect, useRef, useState } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiOutlineCodeBracket,
  HiOutlinePhoto,
  HiPause,
  HiPlay,
} from "react-icons/hi2";

type Project = {
  title: string;
  context: string;
  description: string;
  deployment?: string;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
};

const portfolioProject: Project = {
  title: "Rede do Patrimônio",
  context: "Empresa júnior",
  description:
    "Participei, pela Linked, do desenvolvimento da Rede do Patrimônio, uma plataforma que conecta profissionais e contribui para a valorização do patrimônio cultural. O projeto envolveu colaboração com a equipe e trabalho em ciclos ágeis.",
  image: "/assets/images/projeto_rede_vida.png",
  imageAlt: "Página Home da Rede do Patrimônio",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
  ],
  liveUrl: "https://rededopatrimonio.com.br",
};

const resenhasProject: Project = {
  title: "Projeto Resenhas",
  context: "Projeto pessoal",
  description:
    "Criei uma plataforma pessoal para reunir resenhas de livros, filmes, séries e jogos. O projeto também é uma oportunidade de desenvolver uma aplicação em PHP, desde a organização do código até a publicação na web.",
  image: "/assets/images/projeto_resenhas.png",
  imageAlt: "Página Home contendo as resenhas",
  technologies: ["PHP", "Slim 4", "Twig", "MySQL"],
  deployment: "InfinityFree",
  liveUrl: "https://braian.social-networking.me",
};

const thiagoProject: Project = {
  title: "Site Precisa Economia",
  context: "Freelance",
  image: "/assets/images/projeto_precisa_economia.png",
  description:
    "Desenvolvi o site da Precisa Economia para apresentar os serviços do escritório, incluindo gestão financeira, assessoria jurídica e apoio em licitações públicas.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
  ],
  deployment: "Vercel",
  liveUrl: "https://precisa-economia.vercel.app",
};

const projects: Project[] = [portfolioProject, thiagoProject, resenhasProject];

export default function Projetos() {
  const touchStartX = useRef<number | null>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (projects.length < 2 || !autoplayEnabled) return;

    const intervalId = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [autoplayEnabled]);

  const moveToProject = (direction: -1 | 1) => {
    setActiveProject((current) =>
      Math.max(0, Math.min(projects.length - 1, current + direction)),
    );
  };

  return (
    <section
      id="projetos"
      className="overflow-hidden bg-neutral-900 px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
              02 / Projetos
            </span>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Projetos que fazem parte da minha trajetória.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-neutral-300">
            De projetos pessoais a experiências profissionais, cada um me
            permitiu explorar tecnologias e desenvolver soluções para diferentes
            necessidades.
          </p>
        </div>

        <div
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;

            const distance =
              event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;

            if (Math.abs(distance) > 50) {
              moveToProject(distance < 0 ? 1 : -1);
            }
          }}
          role="region"
          aria-label="Carrossel de projetos"
          aria-roledescription="carrossel"
          className="mt-10 overflow-hidden touch-pan-y"
        >
          <div
            className="flex transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${projects.length}`}
                className="grid w-full shrink-0 items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-neutral-800">
                  {project.image ? (
                    project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visitar o site de ${project.title}`}
                        title={`Visitar ${project.title}`}
                        className="group/image relative block h-full w-full overflow-hidden"
                      >
                        <img
                          src={project.image}
                          alt={
                            project.imageAlt ?? `Captura de ${project.title}`
                          }
                          className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.04]"
                        />
                        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-neutral-950/80 text-white transition-colors group-hover/image:bg-lime-300 group-hover/image:text-neutral-950">
                          <HiArrowTopRightOnSquare
                            size={20}
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? `Captura de ${project.title}`}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    )
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-neutral-500">
                      <HiOutlinePhoto size={34} aria-hidden="true" />
                      <span className="text-sm">Print do projeto</span>
                    </div>
                  )}
                </div>

                <div className="py-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-lime-300">
                        PROJETO {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="border border-white/15 px-2.5 py-1 text-xs text-neutral-300">
                        {project.context}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir ${project.title}`}
                          title="Abrir projeto"
                          className="text-neutral-400 transition hover:text-lime-300"
                        >
                          <HiArrowTopRightOnSquare size={22} />
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Ver código de ${project.title}`}
                          title="Ver código-fonte"
                          className="text-neutral-400 transition hover:text-lime-300"
                        >
                          <HiOutlineCodeBracket size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-300">
                    {project.description}
                  </p>

                  {project.deployment && (
                    <p className="mt-4 text-sm text-neutral-400">
                      Hospedado em{" "}
                      <span className="font-medium text-lime-200">
                        {project.deployment}
                      </span>
                    </p>
                  )}

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="border border-white/15 px-3 py-1.5 text-xs font-medium text-neutral-300 transition duration-200 hover:-translate-y-0.5 hover:border-lime-300/60 hover:text-lime-200"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {projects.length > 1 && (
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="font-mono text-sm text-neutral-400">
              {String(activeProject + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAutoplayEnabled((enabled) => !enabled)}
                aria-label={
                  autoplayEnabled
                    ? "Pausar avanço automático"
                    : "Retomar avanço automático"
                }
                aria-pressed={!autoplayEnabled}
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-lime-300 hover:text-lime-300"
              >
                {autoplayEnabled ? (
                  <HiPause size={20} aria-hidden="true" />
                ) : (
                  <HiPlay size={20} aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={() => moveToProject(-1)}
                disabled={activeProject === 0}
                aria-label="Projeto anterior"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-lime-300 hover:text-lime-300 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <HiArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => moveToProject(1)}
                disabled={activeProject === projects.length - 1}
                aria-label="Próximo projeto"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:border-lime-300 hover:text-lime-300 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <HiArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
