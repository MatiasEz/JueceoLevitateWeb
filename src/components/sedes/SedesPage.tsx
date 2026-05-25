import { ArrowUpRight, CalendarDays, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { assets } from "../../data/homeContent";
import { LevitateFooter } from "../home/LevitateFooter";
import { LevitateHeader } from "../home/LevitateHeader";

const motionGenres = ["Acrojazz", "Ballet", "Belly Dance", "Contemporáneo", "Folklore", "Urbanos", "Jazz", "Lírico", "Open"];
const aerialGenres = ["Tela", "Aro", "Open"];

const competitionBlocks = [
  { date: "30 de mayo", items: [
    { title: "Bloque 1", text: "Baby · Aéreo\nPetite · Aro · Open\nJunior · Tela" },
    { title: "Bloque 2", text: "Petite · Tela" },
    { title: "Bloque 3", text: "Junior · Tela" },
  ] },
  { date: "31 de mayo", items: [
    { title: "Bloque 4", text: "Danza\nno aérea" },
    { title: "Bloque 5", text: "Teens\nLegacy" },
    { title: "Bloque 6", text: "Senior" },
  ] },
];

const workshopGroups = [
  { label: "Grupo A", text: "Menores de 12 años\nDanza aérea" },
  { label: "Grupo B", text: "Mayores de 13 años\nDanza aérea" },
  { label: "Grupo C", text: "Flex" },
];

type WorkshopSession = {
  label?: string;
  time: string;
  group: string;
};

type WorkshopCoach = {
  name: string;
  specialty?: string;
  sessions: WorkshopSession[];
};

const workshops: WorkshopCoach[] = [
  {
    name: "Alex Nájera",
    specialty: "Telas",
    sessions: [
      { time: "10:00 AM - 11:30 AM", group: "Grupo A" },
      { time: "11:45 AM - 1:15 PM", group: "Grupo B" },
    ],
  },
  {
    name: "Vladimir Garza",
    sessions: [
      { label: "Aro", time: "11:45 AM - 1:15 PM", group: "Grupo A" },
      { label: "Trapecio", time: "10:00 AM - 11:30 AM", group: "Grupo B" },
    ],
  },
  {
    name: "Luis Raio",
    specialty: "Cintas",
    sessions: [
      { time: "2:00 PM - 4:00 PM", group: "Grupo B" },
    ],
  },
  {
    name: "Yoli Campos",
    specialty: "Flex",
    sessions: [
      { time: "2:00 PM - 4:00 PM", group: "Grupo A" },
      { time: "2:00 PM - 4:00 PM", group: "Grupo B" },
    ],
  },
];

const jury = [
  { name: "Andrea Salinas", specialty: "Contemporary · Jazz", image: assets.community },
  { name: "Mariana Ríos", specialty: "Hip Hop · Urbano", image: assets.workshops },
  { name: "Daniel Figueroa", specialty: "Ballet · Técnica clásica", image: assets.venue },
  { name: "Oscar Ramírez", specialty: "Acrobacia · Tricks", image: assets.competition },
  { name: "Lucía Torres", specialty: "Danza contemporánea", image: assets.hero },
];

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="sedes-section-heading">
      <p>{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}

function renderBlockText(text: string) {
  const highlightedTerms = new Set(["baby", "junior", "petite", "teens", "senior", "legacy"]);

  return text.split("\n").map((line) => (
    <span className="sedes-block-line" key={line}>
      {line.split(/\b(Baby|Junior|Petite|Teens|Senior|Legacy)\b/gi).map((part, index) => (
        highlightedTerms.has(part.toLowerCase())
          ? <span className="sedes-block-level" key={`${part}-${index}`}>{part}</span>
          : part
      ))}
    </span>
  ));
}

export function SedesPage() {
  return (
    <main className="sedes-page">
      <section className="sedes-hero">
        <LevitateHeader activeLabel="Convocatoria" useRootLinks />
        <img className="sedes-hero__image" src={assets.venue} alt="" aria-hidden="true" />
        <div className="sedes-hero__shade" aria-hidden="true" />

        <div className="sedes-hero__content">
          <p className="sedes-kicker">Convocatoria</p>
          <h1>Sede CDMX</h1>
          <strong>Fuentes Brotantes, Tlalpan</strong>

          <div className="sedes-event-info" aria-label="Información principal de la sede">
            <article>
              <MapPin aria-hidden="true" size={24} />
              <span>Lugar</span>
              <p>Fuentes Brotantes, Tlalpan</p>
              <a href="https://maps.app.goo.gl/1k47MRq8nSqp82AE7" target="_blank" rel="noreferrer">
                Ver en Google Maps <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </article>
            <article>
              <CalendarDays aria-hidden="true" size={24} />
              <span>Fecha del evento</span>
              <p>29 · 30 · 31<br />mayo 2026</p>
            </article>
            <article>
              <CheckCircle2 aria-hidden="true" size={24} />
              <span>Status</span>
              <p>Convocatoria<br />finalizada</p>
            </article>
          </div>
        </div>
      </section>

      <div className="sedes-light-flow">
        <section className="sedes-light-section sedes-genres">
          <SectionHeading kicker="Géneros" title="Participantes" />
          <div className="sedes-genre-grid">
            <article className="sedes-genre-card sedes-genre-card--motion">
              <img src={assets.competition} alt="Participante de danza motion en escena" />
              <div>
                <h3>Motion</h3>
                <ul>
                  {motionGenres.map((genre) => <li key={genre}>{genre}</li>)}
                </ul>
              </div>
            </article>

            <article className="sedes-genre-card sedes-genre-card--aerial">
              <div>
                <h3>Aerial</h3>
                <ul>
                  {aerialGenres.map((genre) => <li key={genre}>{genre}</li>)}
                </ul>
              </div>
              <img src={assets.hero} alt="Participante aérea en aro" />
            </article>
          </div>
        </section>

        <section className="sedes-light-section sedes-blocks">
          <SectionHeading kicker="Bloques" title="de competencia" />
          <div className="sedes-block-columns">
            {competitionBlocks.map((day) => (
              <div className="sedes-block-day" key={day.date}>
                <h3>{day.date}</h3>
                <div>
                  {day.items.map((item) => (
                    <article key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{renderBlockText(item.text)}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="sedes-note">*Horarios a definir. La logística puede cambiar.</p>
        </section>
      </div>

      <section className="sedes-workshops">
        <div className="sedes-workshops__intro">
          <p className="sedes-kicker">Workshops</p>
          <h2>Viernes 29 de mayo</h2>
          <span><MapPin aria-hidden="true" size={17} /> Parque Juana de Asbaje</span>

          <div className="sedes-workshop-groups">
            {workshopGroups.map((group) => (
              <article key={group.label}>
                <span>{group.label}</span>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
          <small>*Cada participante podrá tomar 3 clases.</small>
        </div>

        <div className="sedes-workshop-grid">
          {workshops.map((workshop) => (
            <article className="sedes-workshop-card" key={workshop.name}>
              <div className="sedes-workshop-card__head">
                <div>
                  <h3>{workshop.name}</h3>
                  {workshop.specialty ? <strong>{workshop.specialty}</strong> : null}
                </div>
              </div>
              <ul>
                {workshop.sessions.map((session) => (
                  <li
                    className={session.label ? "sedes-workshop-card__session sedes-workshop-card__session--tagged" : "sedes-workshop-card__session"}
                    key={`${workshop.name}-${session.time}-${session.group}`}
                  >
                    {session.label ? <span className="sedes-workshop-card__tag">{session.label}</span> : null}
                    <span className="sedes-workshop-card__clock"><Clock3 aria-hidden="true" size={24} /></span>
                    <span className="sedes-workshop-card__session-copy">
                      <span className="sedes-workshop-card__time">{session.time}</span>
                      <span className="sedes-workshop-card__group">{session.group}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="sedes-light-section sedes-jury">
        <div className="sedes-jury__header">
          <SectionHeading kicker="Jurado" title="invitado" />
          <p>Conoce al panel de artistas y profesionales que formarán parte de esta sede.</p>
        </div>
        <div className="sedes-jury-grid">
          {jury.map((judge) => (
            <article className="sedes-jury-card" key={judge.name}>
              <img src={judge.image} alt="" aria-hidden="true" />
              <h3>{judge.name}</h3>
              <p>{judge.specialty}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sedes-final-cta">
        <img src={assets.hero} alt="" aria-hidden="true" />
        <div className="sedes-final-cta__line" aria-hidden="true"><span>✦</span></div>
        <div className="sedes-final-cta__content">
          <p>Convocatoria</p>
          <span>Checa todos los detalles de esta sede</span>
          <h2>El vuelo te espera</h2>
          <a href="/#convocatorias">
            Descargar convocatoria <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="sedes-final-cta__line" aria-hidden="true"><span>✦</span></div>
      </section>

      <LevitateFooter useRootLinks />
    </main>
  );
}
