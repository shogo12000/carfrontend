import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { allCars, addCars } from "../utils/local";
import TypeSelect from "../components/TypeSelect";
import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";

export default function AddCar() {
  const years = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => ({
    year: (1990 + i).toString(),
  }));
  const { loading, user } = useContext(AuthContext);
  const [gettingCar, setGettingCar] = useState([]);
  const [brandModel, setBrandModel] = useState([]);
  const [active, setActive] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [userCar, setUserCar] = useState({
    _id: "",
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(allCars, {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setGettingCar(data);
        } else {
          console.log("Erro ao buscar carros:", data.msg || data.error);
          alert("Erro ao buscar carros: " + (data.msg || "Desconhecido"));
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCar();
  }, []);

  useEffect(() => {
    if (userCar.brand) {
      const res = gettingCar.find((e) => {
        return e.brand === userCar.brand;
      });

      const formattedModels = res.model.map((m, i) => ({
        _id: i,
        model: m,
      }));

      setBrandModel(formattedModels);

      setActive(true);
    } else {
      setActive(false);
    }
  }, [userCar.brand]);

  const carBrand = (e) => {
    setUserCar((prev) => ({ ...prev, brand: e.target.value }));
  };

  const carModel = (e) => {
    setUserCar((prev) => ({ ...prev, model: e.target.value }));
  };

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("Enviando");
    console.log(userCar);
    setUserCar({ ...userCar, _id: user._id });

    const formData = new FormData();
    formData.append("brand", userCar.brand);
    formData.append("model", userCar.model);
    formData.append("year", userCar.year);
    formData.append("price", userCar.price);
    formData.append("photo", photoFile); // <-- file enviado
    formData.append("userId", user._id); // <-- pega o userId do token

    try {
      const res = await fetch(addCars, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("Carro adicionado com sucesso!");
        // opcional: resetar form
        setUserCar({ _id: "", brand: "", model: "", year: "", price: "" });
      } else {
        console.log(data);
        alert("Erro: " + (data.msg || "Desconhecido"));
      }
    } catch (err) {
      console.log(err);
      alert("error saving car...");
    }

    // try {
    //   const res = await fetch(addCars, {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userCar),
    //   });

    //   const data = await res.json();
    //   if (res.ok) {
    //     alert("Carro adicionado com sucesso!");
    //     // opcional: resetar form
    //     setUserCar({ _id: "", brand: "", model: "", year: "", price: "" });
    //   } else {
    //     console.log(data);
    //     alert("Erro: " + (data.msg || "Desconhecido"));
    //   }
    // } catch (err) {
    //   console.log(err);
    //   alert("error saving car...");
    // }
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <>
          <div className="w-full h-[calc(100vh-3.75rem)]  bg-blue-200 flex items-center justify-center">
            <form
              onSubmit={(e) => sendForm(e)}
              className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg flex flex-col gap-3"
              encType="multipart/form-data"
            >
              {TypeSelect({
                html_for: "brand",
                textFor: "Choose Make: ",
                dataArray: gettingCar,
                valueKey: "brand",
                onChange: carBrand,
                disabled: true,
                value: userCar.brand,
              })}

              {TypeSelect({
                html_for: "Model",
                textFor: "Choose Model: ",
                dataArray: brandModel,
                valueKey: "model",
                onChange: carModel,
                disabled: active,
                value: userCar.model,
              })}

              {TypeSelect({
                html_for: "Year",
                textFor: "Choose Year: ",
                dataArray: years,
                valueKey: "year",
                onChange: (e) =>
                  setUserCar((prev) => ({ ...prev, year: e.target.value })),
                disabled: true,
                value: userCar.year,
              })}

              <CompFieldSet
                Label="Price"
                name="price"
                Type="text"
                PlaceHolder="Enter Price"
                onChange={(e) => {
                  const value = e.target.value;
                  // permite só números e ponto (para decimais)
                  if (/^\d*\.?\d*$/.test(value)) {
                    setUserCar((prev) => ({ ...prev, price: Number(value) }));
                  }
                }}
                value={userCar.price}
              />

              <CompFieldSet
                Label="Photo"
                Type="file"
                name="photo"
                PlaceHolder="Photo"
                accept="image/*"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setPhotoFile(e.target.files[0]);
                }}
              />
              <ComptButton btnType="submit" btnText="Add" />
            </form>
          </div>
        </>
      ) : (
        "You need Login first..."
      )}
    </>
  );
}
