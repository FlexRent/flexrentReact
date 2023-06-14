import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderButtons from "../../components/MinhaArea/HeaderContent/HeaderButtons";
import Perfil from "../../components/MinhaArea/Perfil/Perfil";
import { MinhaAreaContext } from "./MinhaAreaContext";


export default function PageMinhaArea() {
  const [produtos, setProdutos] = useState();
  const [enderecos, setEnderecos] = useState();
  const [cartoes, setCartoes] = useState();

  const token = localStorage.getItem("token").replace(/"/g, '');
  // console.log(token);
  function getProdutos() {
    fetch("http://localhost:8000/api/products/user", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProdutos(data.products);
      });
  }

  function getEndereco() {
    fetch("http://localhost:8000/api/addresses/user", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.addresses);
        setEnderecos(data.addresses);
      });
  }

  function getCardoes() {
    const token = localStorage.getItem("token").replace(/"/g, '');
    fetch("http://ec2-15-228-10-222.sa-east-1.compute.amazonaws.com:8000/api/cards/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.cards);
        setCartoes(data.cards);
      });
  }

  useEffect(() => {
    getProdutos();
    getEndereco();
    getCardoes();
  }, []);

  return (
    <MinhaAreaContext.Provider value={{ produtos, enderecos, cartoes }}>
      <Header backgroundColor={"#16697A"} />
      <section>
        <div className="row flex-xl-nowrap mt-5">
          <div className="perfil col-12 col-md-4 ">
            <Perfil />
          </div>

          <div className="content-area col-12 col-md-8 ">
            <HeaderButtons cartoes={cartoes} />
          </div>
        </div>
      </section>
      <Footer />
    </MinhaAreaContext.Provider>
  );
}
