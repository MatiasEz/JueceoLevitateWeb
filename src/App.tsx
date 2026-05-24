import { HomePage } from "./components/home/HomePage";
import { RulesPage } from "./components/rules/RulesPage";
import { VenuePage } from "./components/venue/VenuePage";
import { getVenueBySlug } from "./data/venueContent";

export default function App() {
  const rulesMatch = window.location.pathname.match(/^\/reglamento\/?$/);
  const venueMatch = window.location.pathname.match(/^\/sedes\/([^/]+)\/?$/);

  if (rulesMatch) {
    return <RulesPage />;
  }

  if (venueMatch) {
    return <VenuePage venue={getVenueBySlug(venueMatch[1])} />;
  }

  return <HomePage />;
}
