import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";
import { useState } from "react";

export default function LoginForm({ ChangeForm }) {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    console.log(loginForm);

    try {
      // const res = await fetch("http://localhost:3000/cars/login", {
      const res = await fetch(
        "https://project-car-back-end.vercel.app/cars/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginForm.email,
            password: loginForm.password,
          }),
        }
      );

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
      alert("Login Error");
    }
  };

  return (
    <fieldset className="fieldset gap-4 bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Login</legend>

      <CompFieldSet
        Label={"Email"}
        name={"email"}
        Type={"email"}
        PlaceHolder={"Email"}
        value={loginForm.email}
        onChange={(e) => onChange(e)}
      />

      <CompFieldSet
        Label={"Password"}
        name={"password"}
        Type={"password"}
        PlaceHolder={"Password"}
        value={loginForm.password}
        onChange={(e) => onChange(e)}
      />

      <ComptButton
        btnType={"submit"}
        btnText={"Login"}
        btnClick={() => handleLogin()}
      />

      <div className="flex justify-end">
        <button
          onClick={ChangeForm}
          className="hover:underline transition-all duration-200"
        >
          Register
        </button>
      </div>
    </fieldset>
  );
}
