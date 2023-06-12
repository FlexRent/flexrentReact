import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Categorias from "../../components/Home/Categorias";
import ComoFunciona from "../../components/Home/ComoFunciona";
import Vantagem from "../../components/Home/Vantagem";
import ListaTodasCategorias from "../../components/ListaProdutos/ListaTodasCategorias";
import ListaCategoria from "../../components/ListaProdutos/ListaCategoria";
import "../../components/Home/css/Home.css";


export default function PageListaProdutos() {
  return (
    <div>
      <Header isHome={true} />
      <div className="banner">
        <img src="./assets/home/banner.png" alt="banner" className="banner-image" />
      </div>

      {/* <ListaTodasCategorias /> */}
      {/* <ListaCategoria categoria={"Camping"} /> */}
      <Vantagem />
      <ComoFunciona />
      <Categorias />
      <Footer />
    </div>
  );
}
