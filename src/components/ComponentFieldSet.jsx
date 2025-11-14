export default function CompFieldSet({
  Label,
  name,
  Type,
  PlaceHolder,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="label">{Label}</label>
      <input
        type={Type}
        name={name}
        className="input focus:outline-none"
        placeholder={PlaceHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
