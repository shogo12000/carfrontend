import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const teste = async () => {
      try {
        const res = await fetch("https://project-car-back-end.vercel.app/", {
        // const res = await fetch("http://localhost:3000/", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    teste();
  }, []);
  return <h1>Home</h1>;
}
