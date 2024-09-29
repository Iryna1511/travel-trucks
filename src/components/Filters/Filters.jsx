import css from "./Filters.module.css";
import SubmitBtn from "../Buttons/SubmitBtn";
import LocationFilter from "../LocationFilter/LocationFilter";
import FilterType from "../FiltersBtns/FilterType";
import FilterEquipment from "../FiltersBtns/FilterEquipment";

export default function Filters() {
  return (
    <aside className={css.filters}>
      <LocationFilter />
      <p className={css.text}>Filters</p>
      <FilterEquipment />
      <FilterType />
      <SubmitBtn>Search</SubmitBtn>
    </aside>
  );
}
