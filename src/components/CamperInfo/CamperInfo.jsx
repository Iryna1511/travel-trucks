import { useSelector } from "react-redux";
import { selectCamperWithId } from "../../redux/campers/camperSelectors";

export default function CamperInfo() {
  const camper = useSelector(selectCamperWithId);
  const { name } = camper;
  console.log(camper);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
