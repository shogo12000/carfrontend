function TypeSelect({
  html_for,
  textFor,
  dataArray,
  valueKey,
  onChange,
  disabled,
}) { 
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={html_for}>{textFor}</label>
      <select
        name={html_for}
        id={html_for}
        onChange={onChange}
        disabled={!disabled}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value="">-- Select a Make --</option>
        {dataArray.map((d,i) => (
          <option key={i} value={d[valueKey]}>
            {d[valueKey]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeSelect;
