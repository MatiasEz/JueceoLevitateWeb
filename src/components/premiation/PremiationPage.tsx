import {
  ArrowUpRight,
  CheckCircle2,
  Megaphone,
  Medal,
  Music2,
  Ribbon,
  Sparkles,
  Star,
  Trophy,
  WandSparkles,
} from "lucide-react";
import { assets } from "../../data/homeContent";
import { LevitateFooter } from "../home/LevitateFooter";
import { LevitateHeader } from "../home/LevitateHeader";

const medalSystem = [
  { label: "Oro", place: "1er lugar", range: "181-210", icon: Medal, tone: "gold" },
  { label: "Plata", place: "2do lugar", range: "161-180", icon: Medal, tone: "silver" },
  { label: "Bronce", place: "3er lugar", range: "141-160", icon: Medal, tone: "bronze" },
  { label: "Participación", place: "Reconocimiento", range: "Menor a 140", icon: Ribbon, tone: "pink" },
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
    copy: "Para el mejor puntaje de estilo libre con el puntaje más alto del evento.",
    image: assets.workshops,
  },
  {
    title: "MVP Aerial",
    copy: "Para el mejor puntaje aéreo con el puntaje más alto del evento.",
    image: assets.competition,
  },
];

const considerations = [
  "Los resultados son finales y no hay apelaciones.",
  "Las premiaciones dependen del registro, inscripción, asistencia y participación.",
  "La organización se reserva el derecho de modificar los premios sin previo aviso.",
  "Los premios no son canjeables por dinero ni mercancía.",
  "Las premiaciones se entregarán únicamente durante la ceremonia oficial.",
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
        <div className="premiation-section__number">01.</div>
        <div className="premiation-section__body">
          <p className="premiation-kicker">Sistemas de premiación</p>
          <h2>Competencia directa</h2>
          <div className="premiation-direct__grid">
            <div className="premiation-podium" aria-hidden="true">
              <Trophy size={54} />
            </div>
            <div className="premiation-direct__copy">
              <p>
                Cuando las participaciones comparten la misma división, género, nivel y categoría, compiten directamente
                entre sí.
              </p>
              <div className="premiation-places">
                <span><strong>01</strong>1er lugar</span>
                <span><strong>02</strong>2do lugar</span>
                <span><strong>03</strong>3er lugar</span>
              </div>
              <p>
                Si una categoría cuenta con más de tres participaciones, las presentaciones restantes reciben medalla de
                participación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="premiation-section premiation-section--dark premiation-medals">
        <div className="premiation-section__number">02.</div>
        <div className="premiation-section__body">
          <p className="premiation-kicker">Medallero</p>
          <div className="premiation-medals__layout">
            <div>
              <h2>Sistema de medallero</h2>
              <p className="premiation-pink">En Levitate MX no se asignan posiciones de manera automática.</p>
              <p>
                Se premia el nivel real de cada participante, reflejando su presencia, ejecución y puntaje obtenido bajo
                los criterios oficiales de jueceo.
              </p>
            </div>

            <div className="premiation-medal-grid">
              {medalSystem.map((medal) => {
                const Icon = medal.icon;
                return (
                  <article className={`premiation-medal-card premiation-medal-card--${medal.tone}`} key={medal.label}>
                    <Icon size={45} />
                    <h3>{medal.label}</h3>
                    <span>{medal.place}</span>
                    <strong>{medal.range}</strong>
                    <small>Puntos</small>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="premiation-section premiation-section--light premiation-special">
        <div className="premiation-section__number">03.</div>
        <div className="premiation-section__body">
          <div className="premiation-split-heading">
            <div>
              <p className="premiation-kicker">Premios especiales</p>
              <h2>Premios especiales por bloque</h2>
            </div>
            <p>
              Además de los premios por categoría, en cada bloque de competencia se otorgan premios individuales
              seleccionados por el staff técnico entre quienes mejor representen el espíritu de Levitate MX.
            </p>
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

      <section className="premiation-section premiation-section--dark premiation-mvp">
        <div className="premiation-section__number">04.</div>
        <div className="premiation-section__body">
          <p className="premiation-kicker">MVP Levitate</p>
          <div className="premiation-mvp__layout">
            <div>
              <h2>El mejor puntaje del evento.</h2>
              <p>
                El MVP de Levitate MX se concede a la rutina de toda la competencia que obtenga el puntaje más alto, sin
                importar el nivel, división o categoría.
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

      <section className="premiation-section premiation-section--light premiation-alliances">
        <div className="premiation-section__number">05.</div>
        <div className="premiation-section__body">
          <p className="premiation-kicker">Becas y alianzas</p>
          <div className="premiation-alliances__layout">
            <h2>Alianzas que impulsan tu vuelo.</h2>
            <div className="premiation-logos">
              <strong>DNZARE</strong>
              <strong>Costa Rica<br />Open Dance</strong>
            </div>
            <p>
              Levitate MX cuenta con alianzas con competencias aliadas como DNZARE y Costa Rica Open Dance, que te abren
              la puerta a nuevas oportunidades dentro y fuera del país. <span>Tu mejor presentación puede llevarte más lejos.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="premiation-bottom">
        <article>
          <span>06.</span>
          <p className="premiation-kicker">Entrega de premios</p>
          <h2>Premiación por bloque</h2>
          <p>
            La premiación se realiza al concluir cada bloque de competencia. Los horarios y dinámicas por premio podrán
            variar; consúltalos en tu recibo oficial o en la app Levitate MX.
          </p>
        </article>
        <article>
          <span>07.</span>
          <p className="premiation-kicker">Consideraciones importantes</p>
          <ul>
            {considerations.map((item) => (
              <li key={item}><CheckCircle2 size={18} /> {item}</li>
            ))}
          </ul>
        </article>
        <a href="/#convocatorias">
          Inscribe tu coreografía <ArrowUpRight size={18} />
        </a>
      </section>

      <LevitateFooter useRootLinks />
    </main>
  );
}
