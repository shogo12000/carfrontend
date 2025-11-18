import { useEffect, useState } from "react";
import { showAllCars } from "../utils/local";
import ShowCars from "../utils/ShowCar";

export default function Cars() {
  const [loadingCar, setLoadingCar] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const allCar = async () => {
      setLoadingCar(false);

      try {
        const res = await fetch(showAllCars, {
          method: "GET",
        });

        const data = await res.json();

        if (res.ok) {
          console.log(data);
          setCars(data);
        } else {
          alert(res.msg);
        }
      } catch (err) {
        console.log(err);
        alert(err);
      } finally {
        setLoadingCar(true);
      }
    };

    allCar();
  }, []);
  return (
    <>
      {!loadingCar ? (
        <h1>Loading Car...</h1>
      ) : (
        <>
          <ShowCars cars={cars} />
        </>
      )}
    </>
  );
}
