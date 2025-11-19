import { useParams } from "react-router";
import { useEffect, useState } from "react";
import FormCar from "../utils/formCar";
import { editCar, allCars, updateCar } from "../utils/local";
 
export default function EditPage() {
  const years = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => ({
    year: (1990 + i).toString(),
  }));
  const { id } = useParams();
  const [car, setCar] = useState({});

  const [brandModel, setBrandModel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gettingCar, setGettingCar] = useState([]);
  const [photoFile, setPhotoFile] = useState(null);
  const [userCar, setUserCar] = useState({
    _id: "abcde",
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    const getCar = async () => {
      setLoading(false);
      try {
        const res = await fetch(`${editCar}${id}`, {
          method: "GET",
          credentials: "include",
        });

        const fetchAllCars = await fetch(allCars, {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        const dataAllCars = await fetchAllCars.json();

        if (res.ok && fetchAllCars.ok) {
          setGettingCar(dataAllCars);
          setUserCar((prev) => ({
            _id: id,
            brand: data.brand,
            model: data.model,
            year: data.year,
            price: data.price,
          }));
        } else {
          alert(data.msg);
        }
      } catch (err) {
        alert(err);
      }
    };

    getCar();
  }, []);

  const carPhoto = (e) => {
    console.log(e.target.files[0]);
    setPhotoFile(e.target.files[0]);
  };

  const userBrand = () => {
    const brand = gettingCar.find((e) => {
      return e.brand === userCar.brand;
    });

    if (brand) {
      const formattedModels = brand.model.map((m, i) => ({
        _id: i,
        model: m,
      }));

      setBrandModel(formattedModels);
      console.log(formattedModels);
    }
  };

  useEffect(() => {
    userBrand();
    setLoading(true);
  }, [gettingCar]);

  const sendForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("brand", userCar.brand);
    formData.append("model", userCar.model);
    formData.append("year", userCar.year);
    formData.append("price", userCar.price);
    formData.append("photo", photoFile); // <-- file enviado
    formData.append("userId", userCar._id);

    try {
      const res = await fetch(updateCar, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if(res.ok){
        alert("Carro Adicionado com sucesso")
      }else {
        console.log(data);
        alert("Erro: " + (data.msg || "Unknown"));
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  useEffect(() => {
    userBrand();
  }, [userCar]);
  return (
    <div className="w-full h-[calc(100vh-3.75rem)]  bg-blue-200 flex items-center justify-center">
      {
        loading && (
          <FormCar
            sendForm={sendForm}
            gettingCar={gettingCar}
            carBrand={carBrand}
            userCar={userCar}
            brandModel={brandModel}
            years={years}
            carModel={carModel}
            carYears={carYears}
            carPrice={carPrice}
            btnText={"update"}
            encType={"multipart/form-data"}
            carPhoto={carPhoto}
            photoFile={photoFile}
          />
        )
        // console.log(brandModel)
      }
    </div>
  );
}
