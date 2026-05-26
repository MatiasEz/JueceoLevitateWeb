import {
  ArrowRight,
  Building2,
  CalendarDays,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  Music2,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { assets } from "../../data/homeContent";
import { LevitateFooter } from "./LevitateFooter";
import { LevitateHeader } from "./LevitateHeader";

const venues = [
  {
    title: "Cirko de Mente",
    city: "Ciudad de México",
    date: "29, 30 y 31 de mayo 2026",
    image: assets.competition,
    href: "/sedes/ciudad-de-mexico",
  },
  {
    title: "Auditorio Daniel Forcelledo",
    city: "Puebla",
    date: "7 de junio 2026",
    image: assets.hero,
    href: "/sedes/puebla",
  },
  {
    title: "Teatro El Gran Recinto",
    city: "Tlalnepantla, Edo. Méx.",
    date: "13, 14 y 15 noviembre 2026",
    image: assets.venue,
    href: "/sedes/silo-dallas",
  },
];

const whyItems = [
  {
    icon: GraduationCap,
    title: "Talleres que enriquecen",
    text: "Espacios de aprendizaje para fortalecer técnica, confianza y expresión artística.",
  },
  {
    icon: Users,
    title: "Comunidad que inspira",
    text: "Academias, participantes y artistas que se apoyan, se acompañan y celebran cada logro.",
  },
  {
    icon: Music2,
    title: "Diversidad dancística",
    text: "Danza aérea y danza de piso conviven en una misma experiencia escénica.",
  },
  {
    icon: Heart,
    title: "Competencia con propósito",
    text: "Más que un certamen: una plataforma para crecer, conectar y trascender.",
  },
];

const stats = [
  { icon: Users, value: "+900", label: "participaciones" },
  { icon: Star, value: "+250", label: "academias" },
  { icon: MapPin, value: "16", label: "estados de la república" },
  { icon: Heart, value: "90%", label: "repite la experiencia" },
  { icon: Building2, value: "6", label: "sedes nacionales" },
];

const gallery = [
  { image: assets.venue, className: "levitate-gallery__item--wide", alt: "Público durante una presentación Levitate" },
  { image: assets.community, alt: "Comunidad Levitate celebrando backstage" },
  { image: assets.workshops, alt: "Jueces y producción de Levitate" },
  { image: assets.competition, className: "levitate-gallery__item--tall", alt: "Artista aérea en escena" },
  { image: assets.hero, alt: "Reconocimientos Levitate" },
  { image: assets.competition, alt: "Presentación aérea con luces rosas" },
  { image: assets.venue, className: "levitate-gallery__item--wide", alt: "Escenario Levitate con público" },
  { image: assets.competition, className: "levitate-gallery__item--vertical", alt: "Presentación vertical Levitate en escena" },
];

const sponsors = [
  { name: "Electrolit", logo: "/assets/electrolit-logo.png" },
  { name: "aeparty" },
  { name: "videoimagendigital" },
];

const nextEventDate = new Date("2026-05-29T00:00:00-06:00").getTime();

function getCountdown() {
  const distance = Math.max(0, nextEventDate - Date.now());
  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);
  const seconds = Math.floor((distance % 60_000) / 1000);

  return [
    { value: String(days).padStart(2, "0"), label: "días" },
    { value: String(hours).padStart(2, "0"), label: "horas" },
    { value: String(minutes).padStart(2, "0"), label: "min" },
    { value: String(seconds).padStart(2, "0"), label: "seg" },
  ];
}

export function HomePage() {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-levitate-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="levitate-page">
      <section id="inicio" className="levitate-hero">
        <img className="levitate-hero__media" src={assets.hero} alt="" aria-hidden="true" />
        <div className="levitate-hero__smoke" aria-hidden="true" />
        <div className="levitate-hero__silk levitate-hero__silk--one" aria-hidden="true" />
        <div className="levitate-hero__silk levitate-hero__silk--two" aria-hidden="true" />

        <LevitateHeader activeLabel="Inicio" />

        <div className="levitate-hero__grid">
          <div className="levitate-hero__copy" data-levitate-reveal>
            <p className="levitate-eyebrow">Competencia nacional de danza</p>
            <h1>
              <span>Eleva tu arte</span>
              <strong>Vive la experiencia Levitate</strong>
            </h1>
            <p>Un encuentro para academias, participantes y artistas que buscan inspiración, crecimiento y conexión.</p>
            <div className="levitate-hero__actions">
              <a className="levitate-button levitate-button--primary" href="#convocatorias">
                Ver próximos eventos <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="levitate-button levitate-button--outline" href="#contacto">
                <MessageCircle aria-hidden="true" size={18} /> Contáctanos por WhatsApp
              </a>
            </div>
          </div>

          <aside className="levitate-next-event" aria-label="Próximo evento" data-levitate-reveal>
            <p>Próximo evento</p>
            <h2>Cirko de Mente</h2>
            <span><MapPin aria-hidden="true" size={17} /> Ciudad de México</span>
            <span><CalendarDays aria-hidden="true" size={17} /> 29, 30 y 31 de mayo 2026</span>
            <div className="levitate-next-event__line" />
            <div className="levitate-countdown" aria-label="Cuenta regresiva al próximo evento">
              {countdown.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="convocatorias" className="levitate-venues">
        <div className="levitate-section-title" data-levitate-reveal>
          <span />
          <h2>Próximas sedes</h2>
          <span />
        </div>
        <div className="levitate-venue-grid">
          {venues.map((venue) => (
            <a className="levitate-venue-card" href={venue.href} key={venue.title} data-levitate-reveal>
              <img src={venue.image} alt="" loading="lazy" />
              <div>
                <h3>{venue.title}</h3>
                <p><MapPin aria-hidden="true" size={16} /> {venue.city}</p>
                <p><CalendarDays aria-hidden="true" size={16} /> {venue.date}</p>
                <span>Ver convocatoria <ArrowRight aria-hidden="true" size={16} /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="categorías" className="levitate-why">
        <svg className="levitate-why__paths" viewBox="0 0 1440 620" aria-hidden="true" data-levitate-reveal>
          <path pathLength="1" d="M585 75 C780 8 935 80 900 205 C880 280 950 330 1048 238 C1110 180 1122 130 1195 122" />
          <path pathLength="1" d="M860 270 C960 270 1012 292 1094 292 C1135 292 1148 282 1195 282" />
          <path pathLength="1" d="M875 354 C980 350 1036 386 1092 402 C1136 414 1158 432 1195 430" />
          <path pathLength="1" d="M710 548 C830 568 944 555 1034 498 C1096 458 1138 574 1195 548" />
          <circle cx="1110" cy="151" r="4" />
          <circle cx="1110" cy="292" r="4" />
          <circle cx="1110" cy="420" r="4" />
          <circle cx="1070" cy="540" r="4" />
        </svg>
        <div className="levitate-why__copy" data-levitate-reveal>
          <p className="levitate-eyebrow">¿Por qué</p>
          <h2>Levitate?</h2>
          <span aria-hidden="true" />
          <div className="levitate-why__manifesto">
            <strong>No es solo competir.</strong>
            <em>Es crecer.</em>
            <strong>Aprender.</strong>
            <em>Conectar.</em>
            <strong>Y volar.</strong>
          </div>
          <p className="levitate-why__closing">
            Cada sede se vive como una <span>experiencia artística en comunidad.</span>
          </p>
        </div>

        <div className="levitate-why__art" data-levitate-reveal>
          <div className="levitate-why__figure">
            <img src={assets.competition} alt="Artista aérea durante una presentación Levitate" loading="lazy" />
          </div>
        </div>

        <div className="levitate-why__list" data-levitate-reveal>
          {whyItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <div><Icon aria-hidden="true" size={26} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="premios" className="levitate-stats" aria-label="Levitate en números" data-levitate-reveal>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.label}>
              <Icon aria-hidden="true" size={38} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          );
        })}
      </section>

      <section id="workshops" className="levitate-community">
        <div className="levitate-community__copy" data-levitate-reveal>
          <p className="levitate-eyebrow">Comunidad</p>
          <h2>Donde el arte nos une</h2>
          <span aria-hidden="true" />
        </div>
        <div className="levitate-gallery" data-levitate-reveal>
          {gallery.map((item, index) => (
            <figure className={item.className} key={`${item.image}-${index}`}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="levitate-sponsors" aria-label="Sponsors">
        <div className="levitate-section-title levitate-section-title--small" data-levitate-reveal>
          <span />
          <h2>Sponsors</h2>
          <span />
        </div>
        <div className="levitate-sponsor-row" data-levitate-reveal>
          {sponsors.map((sponsor) => (
            <strong className={sponsor.logo ? "has-logo" : ""} key={sponsor.name}>
              {sponsor.logo ? <img src={sponsor.logo} alt={sponsor.name} loading="lazy" /> : <span>{sponsor.name}</span>}
            </strong>
          ))}
        </div>
      </section>

      <LevitateFooter />
    </main>
  );
}
