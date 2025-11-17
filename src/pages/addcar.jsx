import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AddCar() {
  const { loading, user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <h1>Cars</h1>
      ) : (
        "You need Login first..."
      )}
    </>
  );
}
