import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function MyCars() {
   const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? <h1>Loading...</h1> : <h1>My Cars</h1>}
      
    </>
  );
}
