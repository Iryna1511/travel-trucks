import css from "./Buttons.module.css";

export default function SubmitBtn({ children, onSearch }) {
  return (
    <button onClick={onSearch} className={css.button} type="submit">
      {children}
    </button>
  );
}
