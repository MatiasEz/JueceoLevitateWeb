import {
  BadgeCheck,
  Building2,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  GraduationCap,
  Home,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  Minus,
  Music2,
  PanelLeftOpen,
  Phone,
  Plus,
  Save,
  Search,
  Shirt,
  UserRoundPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";

type AdminScreenId = "home" | "choreographers" | "participants" | "dance";

type AdminNavItem = {
  label: string;
  icon: LucideIcon;
  screen?: AdminScreenId;
};

type FieldOption = {
  value: string;
  label: string;
};

type AdminFieldProps = {
  label: string;
  children: ReactNode;
  helper?: string;
  icon?: LucideIcon;
  className?: string;
};

const adminMenuItems: AdminNavItem[] = [
  { label: "Inicio", icon: Home, screen: "home" },
  { label: "Registrar coreógrafos", icon: UserRoundPlus, screen: "choreographers" },
  { label: "Registrar alumnos", icon: GraduationCap, screen: "participants" },
  { label: "Registrar baile", icon: Music2, screen: "dance" },
  { label: "Cambiar contraseña", icon: LockKeyhole },
  { label: "Reporte participante", icon: ClipboardList },
  { label: "Salir", icon: LogOut },
];

const divisions: FieldOption[] = [
  { value: "baby", label: "Baby: hasta los 6 años" },
  { value: "mini", label: "Mini: 7 a 9 años" },
  { value: "junior", label: "Junior: 10 a 12 años" },
  { value: "teen", label: "Teen: 13 a 17 años" },
  { value: "adulto", label: "Adulto: 18 años en adelante" },
];

const shirtSizes: FieldOption[] = [
  { value: "6", label: "6 años" },
  { value: "8", label: "8 años" },
  { value: "10", label: "10 años" },
  { value: "12", label: "12 años" },
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
];

const danceGenres: FieldOption[] = [
  { value: "aereo", label: "Aéreo" },
  { value: "motion", label: "Levitate Motion" },
  { value: "fusion", label: "Fusión escénica" },
];

const danceSubgenres: FieldOption[] = [
  { value: "tela", label: "Tela" },
  { value: "aro", label: "Aro" },
  { value: "trapecio", label: "Trapecio" },
  { value: "contemporaneo", label: "Contemporáneo" },
];

const danceCategories: FieldOption[] = [
  { value: "solo", label: "Solo" },
  { value: "duo", label: "Dúo" },
  { value: "trio", label: "Trío" },
  { value: "grupo", label: "Grupo" },
];

const danceLevels: FieldOption[] = [
  { value: "nudo", label: "Nudo" },
  { value: "principiante", label: "Principiante" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

const choreographers = ["Alexa Rivera", "Mariana Lugo", "Daniela Soto", "Renata Molina"];
const assignedChoreographers = ["Ati"];
const students = ["Camila Núñez", "Lucía Flores", "Valentina Ruiz", "Mía Castillo", "Sofía León"];
const assignedStudents = ["Alexia Bustos", "Regina Mora"];

function LevitateAdminLogo() {
  return (
    <div className="levitate-admin-logo" aria-label="Levitate MX">
      <span>Levitate</span>
      <small>MX</small>
    </div>
  );
}

function AdminSocials() {
  return (
    <div className="levitate-admin-socials" aria-label="Redes sociales">
      <span aria-label="Facebook">f</span>
      <span aria-label="Instagram">◎</span>
      <span aria-label="YouTube">▶</span>
    </div>
  );
}

function AdminTopBrand() {
  return (
    <header className="levitate-admin-topbar">
      <LevitateAdminLogo />
      <AdminSocials />
    </header>
  );
}

function AdminField({ label, helper, icon: Icon, children, className = "" }: AdminFieldProps) {
  return (
    <label className={`levitate-admin-field ${className}`}>
      <span className="levitate-admin-field__label">
        {Icon ? <Icon aria-hidden="true" size={17} /> : null}
        {label}
      </span>
      {children}
      {helper ? <small>{helper}</small> : null}
    </label>
  );
}

function AdminSelect({
  id,
  options,
  defaultValue,
}: {
  id: string;
  options: FieldOption[];
  defaultValue: string;
}) {
  return (
    <span className="levitate-admin-select">
      <select id={id} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" size={18} />
    </span>
  );
}

function AdminPanel({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`levitate-admin-panel ${className}`}>
      <div className="levitate-admin-panel__heading">
        {eyebrow ? <p>{eyebrow}</p> : null}
        <h1>{title}</h1>
      </div>
      {children}
    </section>
  );
}

function SaveButton() {
  return (
    <button className="levitate-admin-save" type="submit">
      <Save aria-hidden="true" size={18} />
      Guardar registro
    </button>
  );
}

function TransferList({
  sourceTitle,
  assignedTitle,
  sourceItems,
  assignedItems,
}: {
  sourceTitle: string;
  assignedTitle: string;
  sourceItems: string[];
  assignedItems: string[];
}) {
  return (
    <div className="levitate-admin-transfer">
      <div className="levitate-admin-transfer__list">
        <div className="levitate-admin-transfer__title">
          <Users aria-hidden="true" size={18} />
          <h3>{sourceTitle}</h3>
        </div>
        <label className="levitate-admin-transfer__search">
          <Search aria-hidden="true" size={16} />
          <span>Buscar</span>
          <input type="search" />
        </label>
        <ul aria-label={sourceTitle}>
          {sourceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="levitate-admin-transfer__actions" aria-label={`${sourceTitle} acciones`}>
        <button type="button">
          <Plus aria-hidden="true" size={18} />
          Agregar
        </button>
        <button type="button">
          <Minus aria-hidden="true" size={18} />
          Quitar
        </button>
      </div>

      <div className="levitate-admin-transfer__list">
        <div className="levitate-admin-transfer__title">
          <BadgeCheck aria-hidden="true" size={18} />
          <h3>{assignedTitle}</h3>
        </div>
        <ul aria-label={assignedTitle}>
          {assignedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RegistrationPageScaffold({ children }: { children: ReactNode }) {
  return (
    <main className="levitate-admin-page">
      <AdminTopBrand />
      <div className="levitate-admin-rule" aria-hidden="true" />
      <div className="levitate-admin-page__body">{children}</div>
    </main>
  );
}

function AdminSidebar({
  activeScreen,
  onScreenChange,
}: {
  activeScreen: AdminScreenId;
  onScreenChange: (screen: AdminScreenId) => void;
}) {
  return (
    <aside className="levitate-admin-sidebar" aria-label="Menú administrativo">
      <h2>Menu</h2>
      <nav>
        {adminMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.screen === activeScreen;

          return (
            <button
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "is-active" : ""}
              key={item.label}
              onClick={() => {
                if (item.screen) {
                  onScreenChange(item.screen);
                }
              }}
              type="button"
            >
              <Icon aria-hidden="true" size={17} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="levitate-admin-sidebar__meta">
        <p>Usuario: Alexia</p>
        <p>Academia: Ati</p>
        <p>Sede: CDMX - 29 /31 mayo 2026</p>
      </div>

      <small>© Levitate. Website: levitate.mx.</small>
    </aside>
  );
}

function ParticipantRegistrationPanel() {
  return (
    <AdminPanel title="Registro de nuevo participante" eyebrow="Inscripciones">
      <form
        className="levitate-admin-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <AdminField icon={Users} label="Nombre del participante">
          <input type="text" />
        </AdminField>
        <AdminField helper="Ingrese su CURP (18 caracteres)" icon={ClipboardList} label="CURP">
          <input maxLength={18} type="text" />
        </AdminField>
        <AdminField icon={CalendarDays} label="Fecha de nacimiento">
          <input type="date" />
        </AdminField>
        <AdminField icon={BadgeCheck} label="Edad">
          <input min={0} type="number" />
        </AdminField>
        <AdminField icon={GraduationCap} label="División">
          <AdminSelect defaultValue="baby" id="participant-division" options={divisions} />
        </AdminField>
        <AdminField icon={Shirt} label="Talla playera">
          <AdminSelect defaultValue="8" id="participant-shirt" options={shirtSizes} />
        </AdminField>
        <div className="levitate-admin-form__actions">
          <SaveButton />
        </div>
      </form>
    </AdminPanel>
  );
}

function ChoreographerRegistrationPanel() {
  return (
    <AdminPanel title="Registro de nuevo coreógrafo" eyebrow="Academias">
      <form
        className="levitate-admin-form levitate-admin-form--compact"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <AdminField icon={Users} label="Nombre del coreógrafo">
          <input type="text" />
        </AdminField>
        <AdminField icon={Mail} label="Correo electrónico">
          <input type="email" />
        </AdminField>
        <AdminField icon={Phone} label="Teléfono">
          <input type="tel" />
        </AdminField>
        <AdminField icon={Building2} label="Nombre de la academia">
          <input readOnly type="text" value="Ati" />
        </AdminField>
        <div className="levitate-admin-form__actions">
          <SaveButton />
        </div>
      </form>
    </AdminPanel>
  );
}

function DanceRegistrationPanel() {
  return (
    <>
      <AdminPanel className="levitate-admin-panel--dance" title="Registro de nuevo baile" eyebrow="Competencia">
        <form
          className="levitate-admin-form levitate-admin-form--dance"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <AdminField className="levitate-admin-field--wide" icon={Music2} label="Nombre del baile">
            <input type="text" />
          </AdminField>
          <AdminField icon={Music2} label="Género de baile">
            <AdminSelect defaultValue="aereo" id="dance-genre" options={danceGenres} />
          </AdminField>
          <AdminField icon={Music2} label="Subgénero">
            <AdminSelect defaultValue="tela" id="dance-subgenre" options={danceSubgenres} />
          </AdminField>
          <AdminField icon={Users} label="Categoría">
            <AdminSelect defaultValue="solo" id="dance-category" options={danceCategories} />
          </AdminField>
          <AdminField icon={BadgeCheck} label="Nivel">
            <AdminSelect defaultValue="nudo" id="dance-level" options={danceLevels} />
          </AdminField>

          <div className="levitate-admin-form__wide-block">
            <TransferList
              assignedItems={assignedChoreographers}
              assignedTitle="Coreógrafos inscritos"
              sourceItems={choreographers}
              sourceTitle="Coreógrafos"
            />
          </div>

          <div className="levitate-admin-form__wide-block">
            <TransferList
              assignedItems={assignedStudents}
              assignedTitle="Participantes inscritos"
              sourceItems={students}
              sourceTitle="Alumnos"
            />
          </div>

          <div className="levitate-admin-form__actions">
            <SaveButton />
          </div>
        </form>
      </AdminPanel>
      <section className="levitate-admin-panel levitate-admin-registered-panel" aria-label="Bailes registrados">
        <div className="levitate-admin-panel__heading">
          <p>Consulta</p>
          <h2>Bailes registrados</h2>
        </div>
        <div className="levitate-admin-registered-panel__table" aria-hidden="true">
          <span>Baile</span>
          <span>Categoría</span>
          <span>Nivel</span>
          <span>Participantes</span>
        </div>
      </section>
    </>
  );
}

function AdminWelcomePanel() {
  return (
    <section className="levitate-admin-welcome-panel">
      <PanelLeftOpen aria-hidden="true" size={34} />
      <div>
        <p>Panel Levitate</p>
        <h1>Bienvenido.</h1>
      </div>
    </section>
  );
}

function getAdminScreen(screen: AdminScreenId) {
  if (screen === "choreographers") {
    return <ChoreographerRegistrationPanel />;
  }

  if (screen === "participants") {
    return <ParticipantRegistrationPanel />;
  }

  if (screen === "dance") {
    return <DanceRegistrationPanel />;
  }

  return <AdminWelcomePanel />;
}

export function LevitateRegistrationRoute() {
  const [activeScreen, setActiveScreen] = useState<AdminScreenId>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScreenChange = (screen: AdminScreenId) => {
    setActiveScreen(screen);
    setIsMobileMenuOpen(false);
  };

  return (
    <main className={`levitate-admin-shell${isMobileMenuOpen ? " is-mobile-menu-open" : ""}`}>
      <AdminSidebar activeScreen={activeScreen} onScreenChange={handleScreenChange} />
      <button
        aria-label="Cerrar menú"
        className="levitate-admin-mobile-scrim"
        onClick={() => setIsMobileMenuOpen(false)}
        type="button"
      />

      <section className="levitate-admin-workspace">
        <button
          className="levitate-admin-menu-toggle"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
          aria-label="Abrir menú"
        >
          <Menu aria-hidden="true" size={24} />
        </button>
        <AdminTopBrand />
        <div className="levitate-admin-rule" aria-hidden="true" />
        <div className="levitate-admin-workspace__content">{getAdminScreen(activeScreen)}</div>
      </section>
    </main>
  );
}

export function LevitateParticipantRegistrationScreen() {
  return (
    <RegistrationPageScaffold>
      <ParticipantRegistrationPanel />
    </RegistrationPageScaffold>
  );
}

export function LevitateChoreographerRegistrationScreen() {
  return (
    <RegistrationPageScaffold>
      <ChoreographerRegistrationPanel />
    </RegistrationPageScaffold>
  );
}

export function LevitateDanceRegistrationScreen() {
  return (
    <RegistrationPageScaffold>
      <DanceRegistrationPanel />
    </RegistrationPageScaffold>
  );
}

export function LevitateAdminHomeScreen() {
  return <LevitateRegistrationRoute />;
}
