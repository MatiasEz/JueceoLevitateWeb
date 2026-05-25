import { ArrowUpRight, CalendarDays, Clock3, MapPin, Navigation, Sparkle, Users } from "lucide-react";
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
    { title: "Bloque 5", text: "Teens\n+ Legacy" },
    { title: "Bloque 6", text: "Senior" },
  ] },
];

const workshopGroups = [
  { label: "Grupo A", text: "Menores de 12 años\nDanza aérea" },
  { label: "Grupo B", text: "Mayores de 13 años\nDanza aérea" },
  { label: "Grupo C", text: "Flex" },
];

const workshops = [
  { name: "Alex Nájera", specialty: "Telas", schedule: ["10:00 AM - 11:30 AM · Grupo A", "11:45 AM - 1:15 PM · Grupo B"], image: assets.community },
  { name: "Vladimir Garza", specialty: "Aro · Trapecio", schedule: ["11:45 AM - 1:15 PM · Grupo A", "10:00 AM - 11:30 AM · Grupo B"], image: assets.workshops },
  { name: "Luis Raio", specialty: "Cintas", schedule: ["2:00 PM - 4:00 PM · Grupo B"], image: assets.competition },
  { name: "Yoli Campos", specialty: "Flex", schedule: ["2:00 PM - 4:00 PM · Grupo A", "2:00 PM - 4:00 PM · Grupo B"], image: assets.hero },
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
          <strong>Cirko de Mente</strong>

          <div className="sedes-event-info" aria-label="Información principal de la sede">
            <article>
              <MapPin aria-hidden="true" size={24} />
              <span>Lugar</span>
              <p>Cirko de Mente</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Ver en Google Maps <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </article>
            <article>
              <CalendarDays aria-hidden="true" size={24} />
              <span>Fecha del evento</span>
              <p>29 · 30 · 31<br />mayo 2026</p>
            </article>
            <article>
              <Navigation aria-hidden="true" size={24} />
              <span>Estado</span>
              <p>CDMX</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sedes-light-section sedes-genres">
        <SectionHeading kicker="Géneros" title="Participantes" />
        <div className="sedes-genre-grid">
          <article className="sedes-genre-card sedes-genre-card--motion">
            <img src={assets.competition} alt="Participante de danza motion en escena" />
            <div>
              <span className="sedes-genre-icon"><Users aria-hidden="true" size={28} /></span>
              <h3>Motion</h3>
              <ul>
                {motionGenres.map((genre) => <li key={genre}>{genre}</li>)}
              </ul>
            </div>
          </article>

          <article className="sedes-genre-card sedes-genre-card--aerial">
            <div>
              <span className="sedes-genre-icon"><Sparkle aria-hidden="true" size={28} /></span>
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
                    <Sparkle aria-hidden="true" size={28} />
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="sedes-note">*Horarios a definir. La logística puede cambiar.</p>
      </section>

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
              <img src={workshop.image} alt="" aria-hidden="true" />
              <div>
                <h3>{workshop.name}</h3>
                <strong>{workshop.specialty}</strong>
              </div>
              <ul>
                {workshop.schedule.map((slot) => (
                  <li key={slot}><Clock3 aria-hidden="true" size={16} /> {slot}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="sedes-light-section sedes-jury">
        <div className="sedes-jury__header">
          <SectionHeading kicker="Jurado" title="invitado" />
          <p>Conoce al panel de artistas y profesionales que formarán parte de esta sede. Los jurados pueden variar según bloque, categoría y disciplina.</p>
        </div>
        <div className="sedes-jury-grid">
          {jury.map((judge) => (
            <article className="sedes-jury-card" key={judge.name}>
              <img src={judge.image} alt="" aria-hidden="true" />
              <h3>{judge.name}</h3>
              <p>{judge.specialty}</p>
              <a href="/#contacto">Ver trayectoria <ArrowUpRight aria-hidden="true" size={14} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="sedes-bottom-cta">
        <p>Cada criterio es evaluado de manera individual y contribuye al puntaje final de tu presentación.</p>
        <a href="/evaluaciones">Consulta la guía de evaluación <ArrowUpRight aria-hidden="true" size={18} /></a>
        <a href="/#convocatorias">Inscribe tu coreografía <ArrowUpRight aria-hidden="true" size={18} /></a>
      </section>

      <LevitateFooter useRootLinks />
    </main>
  );
}
