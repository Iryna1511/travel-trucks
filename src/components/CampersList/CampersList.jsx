import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/camperSelectors";
import CamperItem from "../CamperItem/CamperItem";
import css from "./CampersList.module.css";

export default function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <div>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.item}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contacts/selectors";
// import { fetchContacts } from "../../redux/contacts/operations";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";
// import { useEffect } from "react";

// const ContactList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <ul className={css.list}>
//       {filteredContacts.map((contact) => (
//         <li className={css.item} key={contact.id}>
//           <Contact contact={contact} />
//         </li>
//       ))}
//     </ul>
//   );
// };
