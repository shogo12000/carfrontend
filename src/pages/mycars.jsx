import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function MyCars() {
  const { loading, user } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <h1>My Cars</h1>
      ) : (
        "You need Login first..."
      )}
    </>
  );
}
