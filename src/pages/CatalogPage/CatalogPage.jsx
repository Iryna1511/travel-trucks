import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <main className={css.container}>
      <Filters />
      <CampersList />
    </main>
  );
}
