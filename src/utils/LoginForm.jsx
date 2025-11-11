import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";

export default function LoginForm() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Login</legend>

      <CompFieldSet Label={"Email"} Type={"email"} PlaceHolder={"Email"} />

      <CompFieldSet
        Label={"Password"}
        Type={"password"}
        PlaceHolder={"Password"}
      />

      <ComptButton
        btnType={"button"}
        btnText={"Login"}
        btnClick={() => alert("logado")}
      />
    </fieldset>
  );
}
