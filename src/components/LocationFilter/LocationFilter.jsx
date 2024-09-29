import { useId } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/filters/filterSlice";
import css from "./LocationFilter.module.css";

export default function LocationFilter() {
  const id = useId();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setLocation(e.target.value));
  };
  return (
    <div className={css.wrap}>
      <label className={css.label} htmlFor={id}>
        Location
      </label>
      <input
        className={css.input}
        onBlur={handleChange}
        name="Location"
        type="text"
        placeholder="City"
        id={id}
      />
      <svg className={css.icon} width={20} height={20}>
        <use href="/sprite.svg#icon-map"></use>
      </svg>
    </div>
  );
}
