import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";
import { Link } from "react-router";

export default function RegisterForm({ChangeForm}) {
  return (
    <fieldset className="fieldset gap-4 bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Register</legend>

      <CompFieldSet Label={"Email"} Type={"email"} PlaceHolder={"Email"} />

      <CompFieldSet Label={"UserName"} Type={"text"} PlaceHolder={"UserName"} />
      <CompFieldSet
        Label={"Password"}
        Type={"password"}
        PlaceHolder={"Password"}
      />

      <CompFieldSet
        Label={"Confirm Password"}
        Type={"password"}
        PlaceHolder={"Password"}
      />

      <ComptButton
        btnType={"submit"}
        btnText={"Register"}
        btnClick={() => alert("Register")}
      />

      <div className="flex justify-end">
        <button onClick={ChangeForm}>Login</button>
      </div>
    </fieldset>
  );
}
