import { Formik } from "formik";
import SubmitBtn from "../Buttons/SubmitBtn";
import css from "./BookForm.module.css";

export default function BookForm() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <Formik></Formik>
      <SubmitBtn>Send</SubmitBtn>
    </div>
  );
}
