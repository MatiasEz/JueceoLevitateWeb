import { ArrowUpRight, CalendarDays, Clock3, Info, MapPin, Play, Sparkles, Ticket, Users } from "lucide-react";
import { assets } from "../../data/homeContent";
import { LevitateFooter } from "../home/LevitateFooter";
import { LevitateHeader } from "../home/LevitateHeader";

const disciplines = ["Telas", "Aro", "Trapecio", "Cintas", "Flex", "Expresión corporal"];

const includedCards = [
  {
    icon: Users,
    title: "Participantes inscritos",
    copy: "Si estás inscrito en la competencia, accedes sin costo a los workshops incluidos en tu experiencia Levitate.",
  },
  {
    icon: Ticket,
    title: "Público externo",
    copy: "¿No estás inscrito en la competencia? También puedes ser parte con el acceso para el público en los workshops de cada sede.",
  },
  {
    icon: Sparkles,
    title: "Grupos y disciplinas",
    copy: "Los grupos de aprendizaje se organizan según nivel, edades y disciplinas disponibles en cada sede.",
  },
  {
    icon: Clock3,
    title: "Cupo sujeto a disponibilidad",
    copy: "Los talleres y grupos tienen cupo limitado. Asegura tu lugar o sé parte de cada sede.",
  },
];

const confirmedWorkshops = [
  { discipline: "Telas", coach: "Alex Nájera" },
  { discipline: "Aro / Trapecio", coach: "Vladimir Garza" },
  { discipline: "Cintas", coach: "Luis Raio" },
  { discipline: "Flex", coach: "Yoli Campos" },
];

const quotes = [
  "Me reté, aprendí un montón y conocí a increíbles artistas.",
  "Los docentes inspiran, motivan y te impulsan a dar más.",
  "Me voy con nuevas herramientas y una energía única.",
];

const basics = [
  {
    title: "Agua",
    copy: "Para mantenerte hidratado durante la práctica.",
    icon: "♢",
  },
  {
    title: "Ropa cómoda",
    copy: "Que te permita moverte con libertad y seguridad en el aula.",
    icon: "◇",
  },
  {
    title: "Cabello recogido",
    copy: "Por tu seguridad y la de quienes entrenan a tu lado.",
    icon: "○",
  },
];

export function WorkshopsPage() {
  return (
    <main className="workshops-page">
      <section className="workshops-hero" id="workshops">
        <LevitateHeader activeLabel="Convocatoria" useRootLinks />
        <img className="workshops-hero__image" src={assets.hero} alt="" aria-hidden="true" />
        <div className="workshops-hero__content">
          <p className="workshops-kicker">✦ Workshops Levitate</p>
          <h1>Workshops</h1>
          <strong>El vuelo también se entrena.</strong>
          <p>
            Los workshops Levitate son espacios de aprendizaje, exploración y crecimiento artístico que complementan tu
            experiencia en la competencia.
          </p>

          <div className="workshops-hero__features">
            <article>
              <Users aria-hidden="true" size={34} />
              <div>
                <h2>Incluidos para participantes</h2>
                <p>Formación de alto nivel sin costo adicional. Un beneficio exclusivo por ser parte de Levitate.</p>
              </div>
            </article>
            <article>
              <Ticket aria-hidden="true" size={34} />
              <div>
                <h2>También para el público</h2>
                <p>Una oportunidad abierta para aprender, inspirarte y conectar con la comunidad.</p>
              </div>
            </article>
          </div>

          <a className="workshops-outline-cta" href="#workshops-disponibles">
            Ver workshops disponibles <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <section className="workshops-light-section workshops-intro">
        <div className="workshops-two-col">
          <article>
            <p className="workshops-light-kicker">¿Qué son los workshops Levitate?</p>
            <h2>Más que una clase, una experiencia formativa.</h2>
            <p>
              Cada workshop está diseñado para entrenar, inspirar y potenciar tu arte. Vivirás una experiencia única con
              docentes invitados de alto nivel.
            </p>
            <div className="workshops-disciplines" aria-label="Disciplinas de workshops">
              {disciplines.map((discipline) => (
                <span key={discipline}>
                  <i aria-hidden="true" />
                  {discipline}
                </span>
              ))}
            </div>
            <div className="workshops-note">
              <Info aria-hidden="true" size={18} />
              No todas las sedes cuentan con workshops. La disponibilidad se comunica y publica en la convocatoria de
              cada evento.
            </div>
          </article>

          <article>
            <p className="workshops-light-kicker">¿Quién puede tomarlos?</p>
            <h2>Para quienes empiezan, entrenan y quieren seguir creciendo.</h2>
            <p>
              Los workshops son para toda la comunidad apasionada por el vuelo en sus múltiples disciplinas. Encuentra
              opciones para cada nivel, objetivo y momento de tu camino artístico.
            </p>
            <div className="workshops-important">
              <Info aria-hidden="true" size={30} />
              <div>
                <h3>Importante</h3>
                <p>
                  Algunas disciplinas pueden tener restricciones por edad o nivel. Por ejemplo, cintas o trapecio pueden
                  ser únicamente para participantes mayores de 12 años.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="workshops-dark-band">
        <div className="workshops-section-head">
          <p className="workshops-kicker">¿Cómo funcionan?</p>
          <h2>Incluidos en tu experiencia Levitate</h2>
        </div>
        <div className="workshops-rule-grid">
          {includedCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title}>
                <Icon aria-hidden="true" size={34} />
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="workshops-light-section workshops-venues" id="workshops-disponibles">
        <div className="workshops-section-head workshops-section-head--light">
          <p className="workshops-light-kicker">Próximos workshops por sede</p>
        </div>

        <div className="workshops-venue-grid">
          <article className="workshops-venue-card workshops-venue-card--confirmed">
            <img src={assets.hero} alt="Artista en telas durante entrenamiento escénico Levitate." loading="lazy" />
            <div>
              <h2>CDMX · Cirko de Mente</h2>
              <p>
                <CalendarDays aria-hidden="true" size={17} /> Viernes 29 de mayo
              </p>
              <p>
                <MapPin aria-hidden="true" size={17} /> Parque Juana de Asbaje
              </p>
              <h3>Workshops confirmados</h3>
              <ul>
                {confirmedWorkshops.map((workshop) => (
                  <li key={workshop.discipline}>
                    <span aria-hidden="true" />
                    <strong>{workshop.discipline}</strong>
                    <small>{workshop.coach}</small>
                  </li>
                ))}
              </ul>
              <a href="/sedes/ciudad-de-mexico">
                Ver horarios <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </article>

          <article className="workshops-venue-card workshops-venue-card--soon">
            <img src={assets.workshops} alt="" aria-hidden="true" loading="lazy" />
            <div>
              <h2>Edo. Méx. · Teatro El Gran Recinto</h2>
              <p>
                <CalendarDays aria-hidden="true" size={17} /> 13 de noviembre
              </p>
              <h3>Una nueva experiencia está por revelarse.</h3>
              <p>
                Los workshops para esta sede se están preparando. Muy pronto conocerás talleres, docentes y horarios que
                te esperan.
              </p>
              <a href="/sedes/silo-dallas">
                Próximamente <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="workshops-experience">
        <div className="workshops-experience__copy">
          <p className="workshops-kicker">Lo que se vive en workshops</p>
          <h2>Aprender. Conectar. Inspirar.</h2>
          <p>
            Cada taller deja una ocasión para aprender, crecer, conocer y llevarte nuevas herramientas. Mira así se
            viven los workshops Levitate: una comunidad que se entrena, se inspira y se eleva juntos.
          </p>
        </div>

        <article className="workshops-video-card">
          <img src={assets.community} alt="Comunidad Levitate reunida después de una experiencia de formación." loading="lazy" />
          <button type="button" aria-label="Ver video de workshops">
            <Play aria-hidden="true" size={30} fill="currentColor" />
          </button>
          <div>
            <strong>Así se viven los workshops Levitate</strong>
            <span>1:45</span>
          </div>
        </article>

        <div className="workshops-quotes">
          {quotes.map((quote) => (
            <blockquote key={quote}>{quote}</blockquote>
          ))}
        </div>
      </section>

      <section className="workshops-light-section workshops-basics">
        <div className="workshops-section-head workshops-section-head--light">
          <p className="workshops-light-kicker">Antes de tomar tu workshop</p>
          <h2>Para vivir la mejor experiencia</h2>
        </div>
        <div className="workshops-basics__grid">
          {basics.map((basic) => (
            <article key={basic.title}>
              <span aria-hidden="true">{basic.icon}</span>
              <div>
                <h3>{basic.title}</h3>
                <p>{basic.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="workshops-note">
          <Info aria-hidden="true" size={18} />
          Las recomendaciones pueden variar según cada workshop y disciplina. Te avisaremos en la información de cada
          sede.
        </div>
      </section>

      <section className="workshops-final">
        <img src={assets.competition} alt="" aria-hidden="true" loading="lazy" />
        <div>
          <h2>
            Entrena. Explora. <span>Eleva tu técnica.</span>
          </h2>
          <p>
            Consulta los workshops disponibles en cada sede y da el siguiente paso en tu crecimiento artístico. Más
            entrenamiento, más conexión, más vuelo.
          </p>
        </div>
        <div className="workshops-final__actions">
          <a href="/sedes">
            Ver próximas sedes <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <a href="#workshops-disponibles">
            Inscribir coreografía <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <LevitateFooter useRootLinks />
    </main>
  );
}
