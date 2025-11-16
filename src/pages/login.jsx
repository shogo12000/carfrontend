import { useEffect, useState, useContext } from "react";
import LoginForm from "../utils/LoginForm";
import RegisterForm from "../utils/RegisterForm";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Login() {
  const [register, setRegister] = useState(false);
  const { checkUserLogin, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    checkUserLogin();
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/mycars", { replace: true });
    }
  }, [user]);
  const activeRegister = () => {
    setRegister(!register);
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className="flex items-center justify-center w-full"
          style={{ height: "calc(100vh - 60px)" }}
        >
          {!register ? (
            <LoginForm ChangeForm={activeRegister} />
          ) : (
            <RegisterForm ChangeForm={activeRegister} />
          )}
        </div>
      )}
    </>
  );
}
