import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Mail,
  Megaphone,
  Music2,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { assets } from "../../data/homeContent";
import { LevitateFooter } from "../home/LevitateFooter";
import { LevitateHeader } from "../home/LevitateHeader";

const medalRules = [
  {
    label: "Oro",
    place: "1er lugar",
    description: "Del puntaje más alto hasta 5 puntos menos.",
    exampleRange: "146-151",
    exampleDescription: "Del puntaje más alto hasta 5 puntos menos.",
    image: "/assets/medallero-oro.png",
    alt: "Medalla de oro Levitate 2026.",
    tone: "gold",
  },
  {
    label: "Plata",
    place: "2do lugar",
    description: "De 6 a 15 puntos por debajo del puntaje más alto.",
    exampleRange: "136-145",
    exampleDescription: "De 6 a 15 puntos por debajo del puntaje más alto.",
    image: "/assets/medallero-plata.png",
    alt: "Medalla de plata Levitate 2026.",
    tone: "silver",
  },
  {
    label: "Bronce",
    place: "3er lugar",
    description: "De 16 a 25 puntos por debajo del puntaje más alto.",
    exampleRange: "126-135",
    exampleDescription: "De 16 a 25 puntos por debajo del puntaje más alto.",
    image: "/assets/medallero-bronce.png",
    alt: "Medalla de bronce Levitate 2026.",
    tone: "bronze",
  },
  {
    label: "Participación",
    place: "",
    description: "26 puntos o más por debajo del puntaje más alto.",
    exampleRange: "125 o menos",
    exampleDescription: "26 puntos o más por debajo del puntaje más alto.",
    image: "/assets/medallero-participacion.png",
    alt: "Medalla de participación Levitate 2026.",
    tone: "pink",
  },
];

const medalSystems = [
  {
    title: "Motion",
    applies: "Aplica a géneros no aéreos.",
    categoryLabel: "Divisiones",
    options: ["Baby", "Petite", "Junior", "Teen", "Senior", "Legacy"],
    reference: "La referencia es el Puntaje Mayor obtenido de cada división.",
    image: assets.competition,
    imageAlt: "Participante de Motion sobre escenario Levitate.",
    reverse: false,
  },
  {
    title: "Aerial",
    applies: "Aplica a géneros aéreos.",
    categoryLabel: "Niveles",
    options: ["Nudo", "Principiante", "Intermedio", "Avanzado", "Elite"],
    reference: "La referencia es el Puntaje Mayor obtenido de cada nivel.",
    image: assets.hero,
    imageAlt: "Participante de Aerial en telas durante una experiencia Levitate.",
    reverse: true,
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

const directRanking = [
  {
    place: "2do lugar",
    award: "Plata",
    image: assets.community,
    alt: "Participante recibiendo reconocimiento en escenario Levitate.",
    variant: "silver",
  },
  {
    place: "1er lugar",
    award: "Oro",
    image: assets.venue,
    alt: "Escenario Levitate durante una premiación.",
    variant: "gold",
    featured: true,
  },
  {
    place: "3er lugar",
    award: "Bronce",
    image: assets.workshops,
    alt: "Participantes durante una experiencia Levitate.",
    variant: "bronze",
  },
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

      <div className="premiation-awards-flow">
        <section className="premiation-section premiation-section--light premiation-direct">
          <div className="premiation-section__body">
            <div className="premiation-direct__header">
              <p className="premiation-kicker">Sistemas de premiación</p>
              <h2>Competencia directa</h2>
              <p>
                Cuando dos o más participaciones comparten la misma división, género, nivel y categoría, se comparan
                entre sí y el resultado se define por ranking.
              </p>
            </div>

            <div className="premiation-direct__stage" aria-label="Ranking de competencia directa">
              {directRanking.map((rank) => (
                <article
                  className={`premiation-rank-card premiation-rank-card--${rank.variant}${
                    rank.featured ? " is-featured" : ""
                  }`}
                  key={rank.place}
                >
                  <figure>
                    <img src={rank.image} alt={rank.alt} loading="lazy" />
                  </figure>
                  <div>
                    <strong>{rank.place}</strong>
                    <small>{rank.award}</small>
                  </div>
                </article>
              ))}
            </div>

            <div className="premiation-direct__note">
              <div>
                <strong>Ranking real por bloque.</strong>
                <p>
                  Si una categoría cuenta con más de tres participaciones, las coreografías restantes reciben medalla de
                  participación.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="premiation-section premiation-section--light premiation-medals">
          <div className="premiation-section__body">
            <div className="premiation-medals__intro">
              <h2>
                <span>Sistema de </span>
                <strong>Medallero</strong>
              </h2>
              <i className="premiation-medals__rule" aria-hidden="true" />
              <div className="premiation-medals__copy">
                <p className="premiation-pink">Así se premian las participaciones sin competencia directa.</p>
                <p>Cada sistema se calcula por subbloques comparables para que la evaluación sea más justa.</p>
              </div>
            </div>

            <div className="premiation-medal-systems">
              {medalSystems.map((system) => (
                <article
                  className={`premiation-medal-system${system.reverse ? " premiation-medal-system--reverse" : ""}`}
                  key={system.title}
                >
                  {system.reverse && (
                    <figure className="premiation-medal-system__visual">
                      <img src={system.image} alt={system.imageAlt} loading="lazy" />
                    </figure>
                  )}

                  <div className="premiation-medal-system__content">
                    <p className="premiation-medal-system__kicker">Sistema de medallero</p>
                    <h3>{system.title}</h3>
                    <p className="premiation-medal-system__applies">{system.applies}</p>
                    <p className="premiation-medal-system__label">{system.categoryLabel}</p>
                    <div className="premiation-medal-system__chips" aria-label={system.categoryLabel}>
                      {system.options.map((option) => (
                        <span key={option}>{option}</span>
                      ))}
                    </div>
                    <p className="premiation-medal-system__reference">{system.reference}</p>

                    <div className="premiation-medal-rules" aria-label={`Reglas del sistema ${system.title}`}>
                      {medalRules.map((rule) => (
                        <div className="premiation-medal-rule" key={`${system.title}-${rule.label}`}>
                          <img src={rule.image} alt={rule.alt} loading="lazy" />
                          <div className={`premiation-medal-rule__title premiation-medal-rule__title--${rule.tone}`}>
                            <strong>{rule.label}</strong>
                            {rule.place && <span>{rule.place}</span>}
                          </div>
                          <p>{rule.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {!system.reverse && (
                    <figure className="premiation-medal-system__visual">
                      <img src={system.image} alt={system.imageAlt} loading="lazy" />
                    </figure>
                  )}
                </article>
              ))}
            </div>

            <article className="premiation-medal-example">
              <div className="premiation-medal-example__header">
                <h3>Ejemplo de cómo se calcula</h3>
                <p>Si el Puntaje Mayor es 151</p>
              </div>
              <div className="premiation-medal-example__grid">
                {medalRules.map((rule) => (
                  <div className={`premiation-medal-example__item is-${rule.tone}`} key={`example-${rule.label}`}>
                    <strong>{rule.label}</strong>
                    <span>{rule.exampleRange}</span>
                    <p>{rule.exampleDescription}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>

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
