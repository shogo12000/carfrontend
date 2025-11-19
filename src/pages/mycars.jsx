import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { userCars } from "../utils/local";
import ShowCars from "../utils/ShowCar";

export default function MyCars() {
  const { loading, user } = useContext(AuthContext);
  const [loadingCar, setLoadingCar] = useState(true);
  const [cars, setCars] = useState([]);

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
          console.log(data);
          setCars(data);
        } else {
          alert(res.msg);
        }

        console.log(data);
      } catch (err) {
        console.log(err);
        alert("error saving car...");
      } finally {
        setLoadingCar(false);
      }
    };

    userCar();
  }, []);
  return (
    <>
      {user ? (
        loadingCar ? (
          <h1>Loading Carss</h1>
        ) : (
          <>
            <ShowCars cars={cars} edit={true}/>
          </>
        )
      ) : (
        "You need Login first...."
      )}
    </>
  );
}
