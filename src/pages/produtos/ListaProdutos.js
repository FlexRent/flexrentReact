import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListaTodasCategorias from "../../components/ListaProdutos/ListaTodasCategorias";
import ListaCategoria from "../../components/ListaProdutos/ListaCategoria";

export default function ListaProdutos(){

  return (
    <div>
      <Header isHome={true} />
      <div className="banner">
        <img src="./assets/home/banner.png" alt="banner" className="banner-image" />
      </div>
      <ListaCategoria categoria={"Camping"} />
      {/* <ListaTodasCategorias/> */}

      <Footer />
    </div>
  );
}


