import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { userCars } from "../utils/local"

export default function MyCars() {
  const { loading, user } = useContext(AuthContext);
  const [loadingCar, setLoadingCar] = useState(true);

  useEffect(() => {
    const userCar = async () => {
      setLoadingCar(true);
      try {
        const res = await fetch(userCars, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          console.log(res);
        } else {
          alert(res.msg);
        }

        console.log(data);
      } catch (err) {
        console.log(err);
        alert("error saving car...");
      }finally{
        setLoadingCar(false);
      }
    };

    userCar();
  }, []);
  return (
    <>
      {user ? 
         loadingCar ? <h1>Loading Car</h1>:"Show Car"
       : (
        "You need Login first..."
      )}
    </>
  );
}
