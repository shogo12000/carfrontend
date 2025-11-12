import { useState } from "react";
import LoginForm from "../utils/LoginForm";
import RegisterForm from "../utils/RegisterForm";

export default function Login() {
  const [register, setRegister] = useState(false);

  const activeRegister = ()=>{
    setRegister(!register)
  }
  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ height: "calc(100vh - 60px)" }}
    >
      {!register ? <LoginForm ChangeForm={activeRegister}/> : <RegisterForm ChangeForm={activeRegister}/>}
    </div>
  );
}
