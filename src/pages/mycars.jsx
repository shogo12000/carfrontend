import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { userCars } from "../utils/local";

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
          <h1>Loading Car</h1>
        ) : (
          <>
            <div className="flex flex-wrap gap-4">
              {cars.map((car) => (
                <div key={car._id} className="border p-4 rounded">
                  <h2>
                    {car.brand} {car.model}
                  </h2>
                  <p>Year: {car.year}</p>
                  <p>Price: ${car.price}</p>
                  <img
                    src={`${car.photo}`}
                    alt={`${car.brand} ${car.model}`}
                    className="w-64 h-40 object-cover"
                  />
                </div>
              ))}
            </div>{" "}
          </>
        )
      ) : (
        "You need Login first...."
      )}
    </>
  );
}
