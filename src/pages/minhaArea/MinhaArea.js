import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import HeaderButtons from "../../components/minhaArea/HeaderContent/HeaderButtons";
import Perfil from "../../components/minhaArea/Perfil/Perfil";
import { MinhaAreaContext } from "./MinhaAreaContext";

export default function PageMinhaArea() {
  const [produtos, setProdutos] = useState();
  const token = localStorage.getItem("token");

  function getProdutos() {
    fetch("http://localhost:8000/api/products", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProdutos(data.products);
      });
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <Header backgroundColor={"#16697A"} />
      <section>
        <MinhaAreaContext.Provider value={{ produtos }}>
          <div className="row flex-xl-nowrap">
            <div className="perfil col-12 col-md-4">
              <Perfil />
            </div>

            <div className="content-area col-12 col-md-8 ">
              <HeaderButtons />
            </div>
          </div>
        </MinhaAreaContext.Provider>
      </section>
    </>
  );
}
