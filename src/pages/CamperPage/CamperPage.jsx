import { Suspense } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import css from "./CamperPage.module.css";
import CamperInfo from "../../components/CamperInfo/CamperInfo";
import BookForm from "../../components/BookForm/BookForm";
import { selectCampers } from "../../redux/campers/camperSelectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function ProductPage() {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  let camper = null;
  if (campers.length > 0) camper = campers.find((elem) => elem.id === id);
  console.log(camper);
  return (
    <Layout>
      <CamperInfo camper={camper} />
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
    </Layout>
  );
}
