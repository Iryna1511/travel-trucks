import { Link } from "react-router-dom";
import css from "./Buttons.module.css";

export default function LinkBtn({ link, children }) {
  return (
    <Link className={css.button} to={link}>
      {children}
    </Link>
  );
}
