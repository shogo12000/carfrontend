export default function ComptButton({ btnType, btnText, btnClick }) {
  return (
    <button
      className="btn btn-soft btn-neutral"
      type={btnType}
      onClick={btnClick}
    >
      {btnText}
    </button>
  );
}
