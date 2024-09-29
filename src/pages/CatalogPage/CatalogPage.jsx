import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT, fetchCampers } from "../../redux/campers/camperOperations";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectPage,
  selectTotal,
} from "../../redux/campers/camperSelectors";

import Layout from "../../components/Layout/Layout";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import Loader from "../../components/Loader/Loader";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { setPage } from "../../redux/campers/camperSlice";

export default function CatalogPage() {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const totalItems = useSelector(selectTotal);

  const totalPages = Math.ceil(totalItems / LIMIT);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers(currentPage));
  }, [dispatch, currentPage]);
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <Layout>
      <div className={css.wrap}>
        <Filters />
        <div className={css.listContainer}>
          {isLoading && <Loader />}
          {isError && <ErrorMsg />}

          {campers && campers.length > 0 && <CampersList />}
          {currentPage < totalPages && (
            <button onClick={handleLoadMore} className={css.btn} type="button">
              Load more
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
