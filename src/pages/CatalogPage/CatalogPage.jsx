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
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const totalItems = useSelector(selectTotal);

  const totalPages = Math.ceil(totalItems / LIMIT);

  useEffect(() => {
    const searchParams = {
      page: currentPage,
    };
    dispatch(fetchCampers(searchParams));
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
          {campers && campers.length > 0 && !isError && <CampersList />}
          {isLoading && (
            <div className={css.logicWrap}>
              <Loader />
            </div>
          )}
          {isError && (
            <div className={css.logicWrap}>
              <ErrorMsg />
            </div>
          )}
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
