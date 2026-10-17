import { useState, type FormEvent } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

const contactEmail = "braian.ptu@gmail.com";
const whatsappNumber = "5538997469469";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/BraianMelo",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/braian-melo-5b1345389/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/braian_melo_/",
    icon: FaInstagram,
  },
];

export default function Contato() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "not-configured"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const message = String(formData.get("message"));
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject: `Contato pelo portfólio: ${name}`,
          message,
        },
        publicKey,
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section
        id="contato"
        className="bg-neutral-900 px-6 py-24 text-white lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">
              04 / Contato
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Tem um projeto em mente?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-300">
              Se quiser conversar sobre uma oportunidade ou projeto web, me
              escreva.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-300">
              Seu nome
              <input
                autoComplete="name"
                className="border border-white/15 bg-black/20 px-4 py-3 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-lime-300"
                name="name"
                placeholder="Seu nome"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-300">
              Seu e-mail
              <input
                autoComplete="email"
                className="border border-white/15 bg-black/20 px-4 py-3 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-lime-300"
                name="email"
                type="email"
                placeholder="voce@exemplo.com"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-300 sm:col-span-2">
              Mensagem
              <textarea
                className="min-h-36 resize-y border border-white/15 bg-black/20 px-4 py-3 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-lime-300"
                name="message"
                placeholder="Escreva sua mensagem..."
                required
                rows={5}
              />
            </label>

            <button
              className="inline-flex w-fit items-center gap-2 bg-lime-300 px-5 py-3 font-semibold text-neutral-950 transition hover:bg-lime-200 sm:col-span-2"
              disabled={status === "sending"}
              type="submit"
            >
              <HiOutlinePaperAirplane size={18} aria-hidden="true" />
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status !== "idle" && (
              <p
                aria-live="polite"
                className={`text-sm sm:col-span-2 ${status === "sent" ? "text-lime-200" : status === "sending" ? "text-neutral-300" : "text-rose-300"}`}
                role="status"
              >
                {status === "sending" && "Enviando sua mensagem..."}
                {status === "sent" &&
                  "Mensagem enviada. Obrigado pelo contato!"}
                {status === "error" &&
                  "Não foi possível enviar agora. Tente novamente mais tarde."}
                {status === "not-configured" &&
                  "O formulário está temporariamente indisponível."}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-black px-6 py-6 text-sm text-neutral-400 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Braian Melo</span>
          <div className="flex items-center gap-6">
            <nav aria-label="Redes sociais" className="flex items-center gap-5">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="transition hover:text-lime-200"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Conversar pelo WhatsApp"
              title="WhatsApp"
              className="inline-flex items-center gap-2 transition hover:text-lime-200"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${contactEmail}`}
              aria-label="Enviar e-mail"
              title={contactEmail}
              className="inline-flex items-center gap-2 transition hover:text-lime-200"
            >
              <HiOutlineEnvelope size={20} aria-hidden="true" />
              <span>E-mail</span>
            </a>
            <a href="#" className="transition hover:text-white">
              Voltar ao início
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
