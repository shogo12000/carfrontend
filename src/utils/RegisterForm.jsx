import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";

import { useEffect, useState } from "react";

export default function RegisterForm({ ChangeForm }) {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    if (registerForm.password.trim().length < 4) {
      return alert("Password must be at least 5 characters long.");
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      return alert("Passwords do not match!");
    }

    try {
      //const res = await fetch("http://localhost:3000/cars/register", {
      const res = await fetch(
        "https://project-car-back-end.vercel.app/cars/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registerForm.email,
            username: registerForm.username,
            password: registerForm.password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log("Erro:", data);
        return alert(data.message || "Erro ao registrar");
      }

      setRegisterForm({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });

      alert("User registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Erro no servidor");
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <fieldset className="fieldset gap-4 bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Register</legend>

      <CompFieldSet
        Label={"Email"}
        name={"email"}
        Type={"email"}
        PlaceHolder={"Email"}
        value={registerForm.email}
        onChange={(e) => onChange(e)}
      />

      <CompFieldSet
        Label={"UserName"}
        name={"username"}
        Type={"text"}
        PlaceHolder={"UserName"}
        value={registerForm.username}
        onChange={(e) => onChange(e)}
      />

      <CompFieldSet
        Label={"Password"}
        name={"password"}
        Type={"password"}
        PlaceHolder={"Password"}
        value={registerForm.password}
        onChange={(e) => onChange(e)}
      />

      <CompFieldSet
        Label={"Confirm Password"}
        name={"confirmPassword"}
        Type={"password"}
        PlaceHolder={"Password"}
        value={registerForm.confirmPassword}
        onChange={(e) => onChange(e)}
      />

      <ComptButton
        btnType={"submit"}
        btnText={"Register"}
        btnClick={() => handleRegister()}
      />

      <div className="flex justify-end">
        <button
          onClick={ChangeForm}
          className="hover:underline transition-all duration-200"
        >
          Login
        </button>
      </div>
    </fieldset>
  );
}
