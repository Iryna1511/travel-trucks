import { useDispatch, useSelector } from "react-redux";
import css from "./FiltersBtns.module.css";
import { selectVehicleEquipment } from "../../redux/filters/filterSelectors";
import { toggleEquipment } from "../../redux/filters/filterSlice";

const vehicleEquipments = [
  { name: "AC", icon: "./sprite.svg#icon-wind" },
  { name: "Automatic", icon: "./sprite.svg#icon-diagram" },
  { name: "Kitchen", icon: "./sprite.svg#icon-cup" },
  { name: "TV", icon: "./sprite.svg#icon-tv" },
  { name: "Bathroom", icon: "./sprite.svg#icon-drop" },
];

export default function FilterEquipment() {
  const dispatch = useDispatch();
  const vehicleEquipment = useSelector(selectVehicleEquipment);
  return (
    <div className={css.container}>
      <h4 className={css.title}>Vehicle equipment</h4>
      <div className={css.box}>
        {vehicleEquipments.map((type) => (
          <button
            className={css.btn}
            key={type.name}
            onClick={() => dispatch(toggleEquipment(type.name))}
            style={{
              borderColor: vehicleEquipment[type.name] ? "#d84343" : "#dadde1",
            }}
          >
            <svg className={css.icon} width={32} height={32}>
              <use href={type.icon}></use>
            </svg>
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}
