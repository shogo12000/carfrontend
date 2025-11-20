import TypeSelect from "../components/TypeSelect";
import CompFieldSet from "../components/ComponentFieldSet";
import ComptButton from "../components/ComponentButton";

export default function FormCar({
  encType,
  gettingCar,
  carBrand,
  brandModel,
  userCar,
  carModel,
  years,
  carYears,
  carPrice,
  carPhoto,
  sendForm,
  active,
  photoFile,
  btnText
}) {
 
  return (
    <form
      onSubmit={sendForm}
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg flex flex-col gap-3"
      encType={encType}
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
        html_for: "model",
        textFor: "Choose Model: ",
        dataArray: brandModel,
        valueKey: "model",
        onChange: carModel,
        disabled: { active },
        value: userCar.model,
      })}

      {TypeSelect({
        html_for: "year",
        textFor: "Choose Year: ",
        dataArray: years,
        valueKey: "year",
        onChange: carYears,
        disabled: true,
        value: userCar.year,
      })}

        <CompFieldSet
          Label="Price"
          name="price"
          Type="text"
          PlaceHolder="Enter Price"
          onChange={carPrice}
          value={userCar.price}
        />
      
        <CompFieldSet
          Label="Photo"
          Type="file"
          name="photoFile"
          PlaceHolder="Photo"
          accept="image/*"
          onChange={carPhoto}
          // ref={photoFile} 
        />

      <ComptButton btnType="submit" btnText={btnText ? btnText: "Add"} />
    </form>
  );
}
