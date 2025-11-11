import CompButton from "../components/ComponentButton";
import FieldSet from "../components/ComponentFieldSet";
import LoginForm from "../utils/LoginForm";
import RegisterForm from "../utils/RegisterForm";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
      <CompButton
        btnType="submit"
        btnClick={() => alert("TESTE")}
        btnText="teste"
      />
      <FieldSet />
      <RegisterForm />
    </>
  );
}
