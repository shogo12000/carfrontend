export default function CompFieldSet({Label, Type, PlaceHolder}) {
  return (
    <>
      <label className="label">{Label}</label>
      <input type={Type} className="input" placeholder={PlaceHolder} />
    </>
  );
}
