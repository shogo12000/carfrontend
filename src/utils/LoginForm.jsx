import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";
 
export default function LoginForm({ChangeForm}) {
  return (
    <fieldset className="fieldset gap-4 bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Login</legend>

      <CompFieldSet Label={"Email"} Type={"email"} PlaceHolder={"Email"} />

      <CompFieldSet
        Label={"Password"}
        Type={"password"}
        PlaceHolder={"Password"}
      />

      <ComptButton
        btnType={"submit"}
        btnText={"Login"}
        btnClick={() => alert("logado")}
      />

      <div className="flex justify-end">
        <button onClick={ChangeForm}
        className="hover:underline transition-all duration-200">Register</button>
      </div>
    </fieldset>
  );
}
