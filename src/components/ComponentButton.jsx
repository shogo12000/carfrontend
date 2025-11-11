export default function ComptButton({ btnType, btnText, btnClick }) {
  return (
<button className="btn btn-soft btn-success" type={btnType} onClick={btnClick}>{btnText}</button>
  );
}
