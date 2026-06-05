import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Mail,
  Megaphone,
  Music2,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";
import { assets } from "../../data/homeContent";
import { LevitateFooter } from "../home/LevitateFooter";
import { LevitateHeader } from "../home/LevitateHeader";

const medalSystem = [
  {
    label: "Oro",
    image: "/assets/medallero-oro.png",
    alt: "Oro, 1er lugar, 181 a 210 puntos",
    tone: "gold",
  },
  {
    label: "Plata",
    image: "/assets/medallero-plata.png",
    alt: "Plata, 2do lugar, 161 a 180 puntos",
    tone: "silver",
  },
  {
    label: "Bronce",
    image: "/assets/medallero-bronce.png",
    alt: "Bronce, 3er lugar, 141 a 160 puntos",
    tone: "bronze",
  },
  {
    label: "Participación",
    image: "/assets/medallero-participacion.png",
    alt: "Participación, menor a 140 puntos",
    tone: "pink",
  },
];

const recognitionShowcase = [
  {
    title: "Medallas",
    label: "Oro · Plata · Bronce · Participación",
    image: "/assets/medallero-oro.png",
    alt: "Medalla de oro del sistema de medallero Levitate.",
    copy: "Reconocimientos individuales diseñados para distinguir ranking, puntaje absoluto y participación dentro de cada sede.",
  },
  {
    title: "Trofeos",
    label: "Dúos · Tríos · Grupales",
    image: assets.venue,
    alt: "Escenario Levitate preparado para entrega de trofeos.",
    copy: "Piezas de escenario para primeros lugares en formatos colectivos, acompañadas por medallas para sus integrantes.",
  },
  {
    title: "Premios especiales",
    label: "MVP · Vestuario · Música · Porra",
    image: assets.community,
    alt: "Comunidad Levitate celebrando una experiencia de competencia.",
    copy: "Distinciones seleccionadas por el equipo técnico para reconocer presencia, creatividad, energía y propuesta artística.",
  },
];

const directCriteria = ["División", "Género", "Nivel", "Categoría"];

const directRanking = [
  { place: "01", position: "1er", award: "Oro" },
  { place: "02", position: "2ndo", award: "Plata" },
  { place: "03", position: "3er", award: "Bronce" },
];

const judgingSheetSteps = [
  {
    icon: Mail,
    title: "Envío por correo",
    copy: "Las hojas se hacen llegar al encargado o maestro de la academia por correo electrónico al finalizar cada bloque.",
  },
  {
    icon: ClipboardCheck,
    title: "Participaciones incluidas",
    copy: "El envío reúne las participaciones evaluadas dentro del bloque correspondiente para mantener el seguimiento claro.",
  },
  {
    icon: FileText,
    title: "Tres PDFs de criterios",
    copy: "Se incluyen tres archivos PDF con los criterios evaluados por los jueces durante la presentación.",
  },
];

const specialAwards = [
  {
    icon: Music2,
    title: "Mejor música",
    copy: "Se reconocerá la selección musical que mejor acompañe la interpretación y potencie la intención artística de la presentación.",
  },
  {
    icon: Sparkles,
    title: "Mejor idea coreográfica",
    copy: "Se premiará la originalidad de la propuesta y la creatividad en la composición coreográfica.",
  },
  {
    icon: WandSparkles,
    title: "Mejor vestuario",
    copy: "Se valorará la elección del vestuario de acuerdo al concepto, funcionalidad e impacto visual en el escenario.",
  },
  {
    icon: Megaphone,
    title: "Mejor porra",
    copy: "Se destacará la energía, apoyo y pasión del público que impulse a su equipo a través del aliento.",
  },
];

const mvpAwards = [
  {
    title: "MVP Motion",
    copy: "Para el puntaje más alto de la competencia de géneros de piso.",
    image: assets.workshops,
  },
  {
    title: "MVP Aerial",
    copy: "Para el puntaje más alto de la competencia de géneros aéreos.",
    image: assets.competition,
  },
];

const considerations = [
  "Los resultados son finales y no hay apelaciones.",
  "Las premiaciones dependen del registro, inscripción, asistencia y participación.",
  "Los premios no son canjeables por dinero ni mercancía.",
];

export function PremiationPage() {
  return (
    <main className="premiation-page">
      <section className="premiation-hero">
        <LevitateHeader activeLabel="Convocatoria" useRootLinks />
        <img src={assets.competition} alt="" aria-hidden="true" />
        <div className="premiation-hero__shade" aria-hidden="true" />
        <div className="premiation-hero__content">
          <p className="premiation-number">✶</p>
          <h1>Premiación</h1>
          <strong>El vuelo también se reconoce.</strong>
          <p>
            En Levitate MX reconocemos el talento, la dedicación y el crecimiento artístico en cada paso que das.
          </p>
          <p>
            Nuestro sistema de premiación está diseñado para reconocer el nivel real de cada participación, otorgando a
            los participantes el mérito a su trabajo, esfuerzo y ejecución.
          </p>
        </div>
      </section>

      <section className="premiation-section premiation-section--light premiation-direct">
        <div className="premiation-section__body">
          <p className="premiation-kicker">Sistemas de premiación</p>
          <h2>Competencia directa</h2>
          <div className="premiation-direct__grid">
            <div className="premiation-direct__intro">
              <figure className="premiation-direct__image">
                <img
                  src={assets.competition}
                  alt="Participante en escena durante una competencia Levitate."
                  loading="lazy"
                />
              </figure>
              <p>
                Cuando dos o más participaciones comparten la misma ruta de competencia, se comparan entre sí y el
                resultado se define por ranking.
              </p>
              <div className="premiation-direct__criteria" aria-label="Criterios para competencia directa">
                {directCriteria.map((criterion) => (
                  <span key={criterion}>{criterion}</span>
                ))}
              </div>
            </div>
            <div className="premiation-direct__copy">
              <div className="premiation-direct__stage" aria-label="Ranking de competencia directa">
                {directRanking.map((rank) => (
                  <article className="premiation-rank-card" key={rank.place}>
                    <span>{rank.place}</span>
                    <strong>{rank.position}</strong>
                    <small>{rank.award}</small>
                  </article>
                ))}
                <div className="premiation-direct__motion-line" aria-hidden="true" />
              </div>
              <div className="premiation-direct__note">
                <strong>Ranking real por bloque.</strong>
                <p>
                  Si una categoría cuenta con más de tres participaciones, las coreografías restantes reciben medalla de
                  participación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premiation-section premiation-section--light premiation-medals">
        <div className="premiation-section__body">
          <p className="premiation-kicker">Medallero</p>
          <div className="premiation-medals__layout">
            <div>
              <span className="premiation-medals__badge">Sin competencia directa</span>
              <h2>Sistema de medallero</h2>
              <p className="premiation-pink">
                Este sistema aplica para participaciones o coreografías que no tienen competencia directa dentro del
                programa.
              </p>
              <p>
                Es decir, cuando no existe otra participación que corresponda a su mismo nivel, género, división o
                categoría. En esos casos no se asigna un lugar por comparación: el reconocimiento se define por puntaje
                absoluto del jurado.
              </p>
            </div>

            <div className="premiation-medal-grid">
              {medalSystem.map((medal) => (
                <article className={`premiation-medal-card premiation-medal-card--${medal.tone}`} key={medal.label}>
                  <img src={medal.image} alt={medal.alt} loading="lazy" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="premiation-dark-flow">
        <section className="premiation-section premiation-section--dark premiation-recognition">
          <div className="premiation-section__body">
            <div className="premiation-split-heading premiation-recognition__heading">
              <div>
                <p className="premiation-kicker">Reconocimientos Levitate</p>
                <h2>Lo que se entrega en escena.</h2>
              </div>
            </div>

            <div className="premiation-recognition__grid">
              {recognitionShowcase.map((item) => (
                <article className="premiation-recognition__card" key={item.title}>
                  <figure className="premiation-recognition__visual">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </figure>
                  <div>
                    <span className="premiation-recognition__label">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="premiation-light-flow">
        <section className="premiation-section premiation-section--light premiation-special">
          <div className="premiation-section__body">
            <div className="premiation-split-heading">
              <div>
                <p className="premiation-kicker">Premios especiales</p>
                <h2>Premios especiales por bloque</h2>
              </div>
            </div>
            <div className="premiation-special-grid">
              {specialAwards.map((award) => {
                const Icon = award.icon;
                return (
                  <article key={award.title}>
                    <Icon size={34} />
                    <h3>{award.title}</h3>
                    <p>{award.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="premiation-section premiation-section--light premiation-mvp">
          <div className="premiation-section__body">
            <p className="premiation-kicker">MVP Levitate</p>
            <div className="premiation-mvp__layout">
              <div>
                <h2>El mejor puntaje del evento.</h2>
                <p>
                  El MVP de Levitate MX se concede a la rutina de toda la competencia que obtenga el puntaje más alto,
                  sin importar el nivel, división o categoría.
                </p>
              </div>
              <div className="premiation-mvp__cards">
                {mvpAwards.map((award) => (
                  <article key={award.title}>
                    <img src={award.image} alt="" aria-hidden="true" />
                    <Star size={34} />
                    <h3>{award.title}</h3>
                    <p>{award.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="premiation-dark-flow">
        <section className="premiation-section premiation-section--dark premiation-sheets">
          <div className="premiation-section__body">
            <div className="premiation-sheets__layout">
              <div className="premiation-sheets__intro">
                <p className="premiation-kicker">Hojas de jueceo</p>
                <h2>Feedback claro al finalizar cada bloque.</h2>
                <p>
                  Al cierre de cada bloque, Levitate envía la información de jueceo al responsable de la academia para
                  que cada resultado pueda revisarse con orden y transparencia.
                </p>
                <a className="premiation-sheets__cta" href="/evaluaciones">
                  Consulta los criterios de evaluación <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </div>

              <div className="premiation-sheets__steps">
                {judgingSheetSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <article key={step.title}>
                      <Icon size={34} />
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.copy}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="premiation-bottom">
          <article>
            <p className="premiation-kicker">Entrega de premios</p>
            <h2>Premiación por bloque</h2>
          </article>
          <article>
            <p className="premiation-kicker">Consideraciones importantes</p>
            <ul>
              {considerations.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} /> {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="premiation-section premiation-section--dark premiation-alliances">
          <div className="premiation-section__body">
            <p className="premiation-kicker">Becas y alianzas</p>
            <div className="premiation-alliances__layout">
              <h2>Alianzas que impulsan tu vuelo.</h2>
              <div className="premiation-logos">
                <span className="premiation-logo-mark premiation-logo-mark--dark">
                  <img src="/assets/dnzre-logo.png" alt="DNZRE" />
                </span>
                <span className="premiation-logo-mark">
                  <img src="/assets/costa-rica-open-logo.png" alt="Costa Rica Open Dance Fest" />
                </span>
              </div>
              <div>
                <p>
                  Levitate MX cuenta con alianzas con competencias aliadas como DNZRE y Costa Rica Open Dance, que te
                  abren la puerta a nuevas oportunidades dentro y fuera del país.
                </p>
                <p className="premiation-alliances__accent">Tu mejor presentación puede llevarte más lejos.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <LevitateFooter useRootLinks />
    </main>
  );
}
