import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/camperOperations";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../../redux/campers/camperSelectors";

import Layout from "../../components/Layout/Layout";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Loader from "../../components/Loader/Loader";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      currentPage: 1,
    };
    dispatch(fetchCampers(params));
  }, [dispatch]);
  const handleLoadMore = () => {};

  return (
    <Layout>
      <div className={css.wrap}>
        <Filters />
        <div className={css.listContainer}>
          {isLoading && <Loader />}
          {isError && <ErrorMsg />}

          {campers && campers.length > 0 && <CampersList />}
          <button onClick={handleLoadMore} className={css.btn} type="button">
            Load more
          </button>
        </div>
      </div>
    </Layout>
  );
}
