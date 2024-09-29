import { Link } from "react-router-dom";
import LinkBtn from "../Buttons/LinkBtn";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    transmission,
    engine,
    kitchen,
    AC,
    radio,
    TV,
    bathroom,
  } = camper;
  const countReviews = camper.reviews.length;
  const img = gallery[0].thumb;
  const formattedPrice = `${price},00`;
  const formattedDescr = description.slice(0, 60);
  return (
    <div className={css.box}>
      <img className={css.img} src={img} alt={name} />

      <div className={css.textWrap}>
        <div className={css.head}>
          <div className={css.titleWrap}>
            <h3 className={css.title}>{name}</h3>
            <p className={css.price}>
              <span>&#8364;</span>
              {formattedPrice}
            </p>
            <button className={css.heartBtn} type="button">
              <svg width={26} height={24}>
                <use href="/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>

          <div className={css.ratingWrap}>
            <Link to={`/catalog/${id}/reviews`} className={css.rating}>
              <svg className={css.icon} width={16} height={16}>
                <use href="/sprite.svg#icon-star-yellow"></use>
              </svg>
              {rating}
              <span>({countReviews} reviews)</span>
            </Link>
            <p>
              <svg className={css.icon} width={16} height={16}>
                <use href="/sprite.svg#icon-map"></use>
              </svg>
              {location}
            </p>
          </div>
        </div>

        <p>{formattedDescr}...</p>

        <ul className={css.categories}>
          <li>
            <svg className={css.icon} width={20} height={20}>
              <use href="/sprite.svg#icon-diagram"></use>
            </svg>
            {transmission}
          </li>
          <li>
            <svg className={css.icon} width={20} height={20}>
              <use href="/sprite.svg#icon-fuel-pump"></use>
            </svg>
            {engine}
          </li>
          {kitchen && (
            <li>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-cup"></use>
              </svg>
              kitchen
            </li>
          )}
          {AC && (
            <li>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              AC
            </li>
          )}
          {radio && (
            <li>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-radios"></use>
              </svg>
              radio
            </li>
          )}
          {TV && (
            <li>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              TV
            </li>
          )}
          {bathroom && (
            <li>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-drop"></use>
              </svg>
              bathroom
            </li>
          )}
        </ul>

        <LinkBtn link={`/catalog/${id}`}>Show more</LinkBtn>
      </div>
    </div>
  );
}

//  "id": "1",
//   "name": "Road Bear C 23-25",
//   "price": 10000,
//   "rating": 4.5,
//   "location": "Ukraine, Kyiv",
//   "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
//   "form": "alcove",
//   "length": "7.3m",
//   "width": "2.65m",
//   "height": "3.65m",
//   "tank": "208l",
//   "consumption": "30l/100km",

//   "transmission": "automatic",
//   "engine": "diesel",

//   "AC": true,
//   "bathroom": true,
//   "kitchen": false,
//   "TV": true,
//   "radio": true,
//   "refrigerator": false,
//   "microwave": true,
//   "gas": false,
//   "water": true,

//   "gallery": [
//     {
//       "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
//       "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
//     },
//     {
//       "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
//       "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
//     },
//     {
//       "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
//       "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
//     }
//   ],
//   "reviews": [
//     {
//       "reviewer_name": "Alice",
//       "reviewer_rating": 5,
//       "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//     },
//     {
//       "reviewer_name": "Bob",
//       "reviewer_rating": 4,
//       "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//     }
//   ]
// },
