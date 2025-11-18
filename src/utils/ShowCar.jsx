export default function ShowCars({ cars }) {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {cars.map((car) => (
          <div key={car._id} className="border p-4 rounded">
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
          </div>
        ))}
      </div>
    </>
  );
}
