import { useEffect, useState } from "react";

const institutions = [
  {
    name: "Universidade Federal de São João del-Rei",
    shortName: "UFSJ",
    image: "/assets/images/ufsj.jpg",
  },
  {
    name: "Instituto Federal do Triângulo Mineiro - Campus Paracatu",
    shortName: "IFTM - Campus Paracatu",
    image: "/assets/images/iftm.jpg",
  },
];

export default function InstituicoesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(
    () => new Set(),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % institutions.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-label="Instituições da minha trajetória"
      aria-roledescription="carrossel automático"
      className="bg-black"
      role="region"
    >
      <div className="relative h-28 overflow-hidden bg-black sm:h-36 md:h-100">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {institutions.map((institution, index) => (
            <InstitutionSlide
              key={institution.shortName}
              institution={institution}
              index={index}
              total={institutions.length}
              imageLoaded={loadedImages.has(institution.shortName)}
              onImageLoad={(loaded) => {
                setLoadedImages((current) => {
                  const next = new Set(current);
                  if (loaded) {
                    next.add(institution.shortName);
                  } else {
                    next.delete(institution.shortName);
                  }
                  return next;
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Institution = (typeof institutions)[number];

function InstitutionSlide({
  institution,
  index,
  total,
  imageLoaded,
  onImageLoad,
}: {
  institution: Institution;
  index: number;
  total: number;
  imageLoaded: boolean;
  onImageLoad: (loaded: boolean) => void;
}) {
  return (
    <article
      aria-label={`${institution.shortName}, ${index + 1} de ${total}`}
      aria-roledescription="slide"
      className="relative h-full w-full shrink-0"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500">
        <span className="font-mono text-3xl font-semibold text-white/80 sm:text-4xl">
          {institution.shortName}
        </span>
        <span className="mt-1 text-xs text-neutral-400 sm:text-sm">
          {institution.name}
        </span>
      </div>
      <img
        src={institution.image}
        alt={institution.name}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
        onError={() => onImageLoad(false)}
        onLoad={() => onImageLoad(true)}
      />
      {imageLoaded && (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent px-6 py-4 lg:px-12">
          <span className="font-mono text-sm font-semibold text-white sm:text-base">
            {institution.shortName}
          </span>
        </div>
      )}
    </article>
  );
}
