export default function CompFieldSet({
  Label,
  name,
  Type,
  PlaceHolder,
  value,
  onChange,
  accept
}) {
  return (
    <div className="w-full flex flex-col ">
      <label className="label text-black">{Label}</label>
      <input
        type={Type}
        name={name}
        className="input border border-gray-300 rounded-md focus:outline-none w-full"
        placeholder={PlaceHolder}
        value={value}
        onChange={onChange}
        accept={accept}
      />
    </div>
  );
}
