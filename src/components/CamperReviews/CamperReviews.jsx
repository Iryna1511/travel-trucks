import { useSelector } from "react-redux";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";
import css from "./CamperReviews.module.css";
import RatingStars from "../RatingStars/RatingStars";

export default function CamperReviews() {
  const camper = useSelector(selectCamperWithId);
  const { reviews } = camper;
  return (
    <ul className={css.list}>
      {camper !== null &&
        reviews.map((review, index) => (
          <li className={css.item} key={index}>
            <div className={css.nameContainer}>
              <span className={css.circle}>
                {review.reviewer_name.slice(0, 1)}
              </span>
              <div className={css.nameWrap}>
                <p className={css.name}>{review.reviewer_name}</p>

                <p className={css.stars}>
                  <RatingStars rating={review.reviewer_rating} />
                </p>
                {/* <svg className={css.icon} width={16} height={16}>
                  <use href="/sprite.svg#icon-star"></use>
                </svg> */}
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
    </ul>
  );
}
