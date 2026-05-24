import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const navItems = [
  { label: "Inicio", href: "#inicio" },
  {
    label: "Convocatoria",
    href: "#convocatorias",
    children: [
      { label: "Reglamento", href: "/reglamento" },
      {
        label: "Sedes",
        href: "#convocatorias",
        children: [
          { label: "Ciudad de México", href: "/sedes/ciudad-de-mexico" },
          { label: "Puebla", href: "/sedes/monterrey" },
          { label: "Estado de México", href: "/sedes/silo-dallas" },
        ],
      },
      { label: "Evaluación", href: "#premios" },
      { label: "Premiación", href: "#premios" },
    ],
  },
  {
    label: "Modalidades",
    href: "#categorías",
    children: [
      { label: "Levitate Motion", href: "#categorías" },
      { label: "Levitate Aerial", href: "#categorías" },
    ],
  },
  { label: "Workshops", href: "#workshops" },
  { label: "Costos", href: "#premios" },
  { label: "Contacto", href: "#contacto" },
] satisfies NavItem[];

function resolveHref(href: string, useRootLinks: boolean) {
  if (!useRootLinks || href.startsWith("/")) {
    return href;
  }

  return `/${href}`;
}

export function Logo({ useRootLinks = false }: { useRootLinks?: boolean }) {
  return (
    <a className="levitate-logo" href={useRootLinks ? "/#inicio" : "#inicio"} aria-label="Levitate MX inicio">
      <span>Levitate</span>
      <small>MX</small>
    </a>
  );
}

type LevitateHeaderProps = {
  activeLabel?: string;
  useRootLinks?: boolean;
};

export function LevitateHeader({ activeLabel = "Inicio", useRootLinks = false }: LevitateHeaderProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const activeNavItem = navItems.find((item) => item.label === activeMenu && item.children);

  return (
    <div className="levitate-menu-shell">
      <header className="levitate-nav">
        <Logo useRootLinks={useRootLinks} />
        <nav
          aria-label="Navegación principal"
          onMouseMove={(event) => {
            const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("[data-nav-label]");
            const item = navItems.find((navItem) => navItem.label === link?.dataset.navLabel);
            setActiveMenu(item?.children ? item.label : null);
          }}
          onPointerMove={(event) => {
            const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("[data-nav-label]");
            const item = navItems.find((navItem) => navItem.label === link?.dataset.navLabel);
            setActiveMenu(item?.children ? item.label : null);
          }}
        >
          {navItems.map((item) => (
            <div className={`levitate-nav__item${activeMenu === item.label ? " is-open" : ""}`} key={item.label}>
              <a
                aria-expanded={item.children ? activeMenu === item.label : undefined}
                aria-haspopup={item.children ? "true" : undefined}
                className={`levitate-nav__link${item.label === activeLabel ? " is-active" : ""}`}
                data-nav-label={item.label}
                href={resolveHref(item.href, useRootLinks)}
                onBlur={(event) => {
                  if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                    setActiveMenu(null);
                  }
                }}
                onClick={(event) => {
                  if (item.children) {
                    event.preventDefault();
                    setActiveMenu((current) => (current === item.label ? null : item.label));
                  }
                }}
                onFocus={() => {
                  if (item.children) {
                    setActiveMenu(item.label);
                  }
                }}
                onMouseEnter={() => {
                  if (item.children) {
                    setActiveMenu(item.label);
                  } else {
                    setActiveMenu(null);
                  }
                }}
                onMouseOver={() => {
                  if (item.children) {
                    setActiveMenu(item.label);
                  }
                }}
                onPointerEnter={() => {
                  if (item.children) {
                    setActiveMenu(item.label);
                  } else {
                    setActiveMenu(null);
                  }
                }}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </header>

      {activeNavItem ? (
        <div
          aria-label={`${activeNavItem.label} submenu`}
          className="levitate-nav__dropdown is-open"
          onFocus={() => setActiveMenu(activeNavItem.label)}
          onMouseEnter={() => setActiveMenu(activeNavItem.label)}
          onMouseLeave={() => setActiveMenu(null)}
          onPointerEnter={() => setActiveMenu(activeNavItem.label)}
          onPointerLeave={() => setActiveMenu(null)}
        >
          <div className="levitate-nav__dropdown-visual" aria-hidden="true" />
          <div className="levitate-nav__dropdown-list">
            {activeNavItem.children?.map((child) => (
              <div className="levitate-nav__dropdown-item" key={child.label}>
                <a className="levitate-nav__dropdown-main" href={resolveHref(child.href, useRootLinks)}>
                  {child.label}
                </a>
                {child.children ? (
                  <div className="levitate-nav__dropdown-sublist" aria-label={`${child.label} sedes`}>
                    {child.children.map((nestedChild) => (
                      <a href={resolveHref(nestedChild.href, useRootLinks)} key={nestedChild.label}>
                        {nestedChild.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
