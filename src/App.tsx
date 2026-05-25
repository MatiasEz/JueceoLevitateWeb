import { HomePage } from "./components/home/HomePage";
import { RulesPage } from "./components/rules/RulesPage";
import { SedesPage } from "./components/sedes/SedesPage";
import { VenuePage } from "./components/venue/VenuePage";
import { getVenueBySlug } from "./data/venueContent";

export default function App() {
  const evaluationsMatch = window.location.pathname.match(/^\/evaluaciones\/?$/);
  const legacyRulesMatch = window.location.pathname.match(/^\/reglamento\/?$/);
  const sedesMatch = window.location.pathname.match(/^\/sedes\/?$/);
  const venueMatch = window.location.pathname.match(/^\/sedes\/([^/]+)\/?$/);

  if (evaluationsMatch || legacyRulesMatch) {
    return <RulesPage />;
  }

  if (sedesMatch) {
    return <SedesPage />;
  }

  if (venueMatch) {
    return <VenuePage venue={getVenueBySlug(venueMatch[1])} />;
  }

  return <HomePage />;
}
