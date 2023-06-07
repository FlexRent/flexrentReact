import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderButtons from "../../components/MinhaArea/HeaderContent/HeaderButtons";
import Perfil from "../../components/MinhaArea/Perfil/Perfil";
import { MinhaAreaContext } from "./MinhaAreaContext";

export default function PageMinhaArea() {
  const [produtos, setProdutos] = useState();
  const token = localStorage.getItem("token");

  function getProdutos() {
    fetch("http://localhost:8000/api/products/user", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.products);
        setProdutos(data.products);
      });
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <MinhaAreaContext.Provider value={{ produtos }}>
      <Header backgroundColor={"#16697A"} />
      <section>
        <div className="row flex-xl-nowrap mt-5">
          <div className="perfil col-12 col-md-4 ">
            <Perfil />
          </div>

          <div className="content-area col-12 col-md-8 ">
            <HeaderButtons />
          </div>
        </div>
      </section>
      <Footer />
    </MinhaAreaContext.Provider>
  );
}
