import LinkBtn from "../Buttons/LinkBtn";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper }) {
  const { id, name, price, rating, location, description, gallery } = camper;
  const img = gallery[0].thumb;
  const formattedPrice = `${price},00`;
  const formattedDescr = description.slice(0, 60);
  return (
    <div className={css.box}>
      <img className={css.img} src={img} alt={name} />

      <div className={css.textWrap}>
        <div className={css.titleWrap}>
          <h3 className={css.title}>{name}</h3>
          <p className={css.price}>
            <span>&#8364;</span>
            {formattedPrice}
          </p>
        </div>

        <div className={css.ratingWrap}>
          <p>{rating}</p>
          <p>{location}</p>
        </div>

        <p>{formattedDescr}...</p>

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
