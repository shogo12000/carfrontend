export default function CompFieldSet({Label, Type, PlaceHolder}) {
  return (
    <div>
      <label className="label">{Label}</label>
      <input type={Type} className="input focus:outline-none" placeholder={PlaceHolder} />
    </div>
  );
}
