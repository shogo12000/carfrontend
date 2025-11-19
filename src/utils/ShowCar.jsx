import ComptButton from "../components/ComponentButton";
import { useNavigate } from "react-router";

export default function ShowCars({ cars, edit }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {cars.map((car) => (
          
          <div key={car._id} className="border p-4 rounded">
            {console.log(car)}
            <h2>
              {car.brand} {car.model}
            </h2>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price} </p>
            <img
              src={`${car.photo}`}
              alt={`${car.brand} ${car.model}`}
              className="w-64 h-40 object-cover"
            />
            {edit && (
              <ComptButton
                btnType={"button"}
                btnText={"Edit"}
                btnClick={() => navigate(`/edit/${car._id}`)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
