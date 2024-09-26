import css from "./Buttons.module.css";

export default function SubmitBtn({ children }) {
  return (
    <button className={css.button} type="submit">
      {children}
    </button>
  );
}
