export default function CompFieldSet({ Label,name,Type, PlaceHolder, onChange }) {
  return (
    <div>
      <label className="label">{Label}</label>
      <input
        type={Type}
        name={name}
        className="input focus:outline-none"
        placeholder={PlaceHolder}
        onChange={onChange}
      />
    </div>
  );
}
