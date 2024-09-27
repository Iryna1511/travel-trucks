export default function CamperInfo({ camper }) {
  const { name } = camper;
  return <div>{camper && <h1>{name}</h1>}</div>;
}
