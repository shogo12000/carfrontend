import CompButton from "../components/ComponentButton";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <CompButton btnType="submit" btnClick={()=>alert("TESTE")} btnText="teste"/>
    </>
  );
}
