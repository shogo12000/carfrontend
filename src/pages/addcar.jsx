import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { allCars, addCars } from "../utils/local";
import TypeSelect from "../components/TypeSelect";
import ComptButton from "../components/ComponentButton";
import CompFieldSet from "../components/ComponentFieldSet";
import FormCar from "../utils/formCar";

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
 
        const data = await res.json();
        if (res.ok) {
 
          setGettingCar(data);
        } else {
 
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

  const carYears = (e) => {
    setUserCar((prev) => ({ ...prev, year: e.target.value }));
  };

  const carPrice = (e) => {
    const value = e.target.value;
    // permite só números e ponto (para decimais)
    if (/^\d*\.?\d*$/.test(value)) {
      setUserCar((prev) => ({ ...prev, price: Number(value) }));
    }
  };

  const carPhoto = (e) => { 
    setPhotoFile(e.target.files[0]);
  };

  const sendForm = async (e) => {
    e.preventDefault(); 
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
        setPhotoFile(null);
      } else { 
        alert("Erro: " + (data.msg || "Desconhecido"));
      }
    } catch (err) { 
      alert("error saving car...");
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <>
          <div className="w-full h-[calc(100vh-3.75rem)]  bg-blue-200 flex items-center justify-center">
            <FormCar
              encType={"multipart/form-data"}
              gettingCar={gettingCar}
              carBrand={carBrand}
              brandModel={brandModel}
              userCar={userCar}
              carModel={carModel}
              years={years}
              carYears={carYears}
              carPrice={carPrice}
              carPhoto={carPhoto}
              sendForm={sendForm}
              active={active}
              photoFile={photoFile}
            />
          </div>
        </>
      ) : (
        "You need Login first..."
      )}
    </>
  );
}
