import css from "./CategoriesList.module.css";

export default function CategoriesList({ camper }) {
  const { transmission, engine, kitchen, AC, radio, TV, bathroom } = camper;
  return (
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
  );
}
