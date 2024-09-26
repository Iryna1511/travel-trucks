import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

import Loader from "../../components/Loader/Loader";
import css from "./ProductPage.module.css";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import BookForm from "../../components/BookForm/BookForm";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function ProductPage() {
  return (
    <main>
      <CamperInfo />
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="features">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <BookForm />
    </main>
  );
}
