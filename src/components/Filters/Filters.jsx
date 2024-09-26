import css from "./Filters.module.css";
import SubmitBtn from "../Buttons/SubmitBtn";

export default function Filters() {
  return (
    <aside className={css.filters}>
      <SubmitBtn>Search</SubmitBtn>
    </aside>
  );
}
