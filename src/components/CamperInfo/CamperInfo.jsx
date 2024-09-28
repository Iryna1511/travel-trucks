import { useDispatch, useSelector } from "react-redux";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchById } from "../../redux/campers/camperOperations";

export default function CamperInfo({ camper }) {
  // const camper = useSelector(selectCamperWithId);
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // console.log(camper);

  // useEffect(() => {
  //   dispatch(fetchById(id));
  // }, [dispatch, id]);

  // const { name } = camper;
  console.log(camper);
  return <div>{camper !== null && <h1>{camper.name}</h1>}</div>;
}
