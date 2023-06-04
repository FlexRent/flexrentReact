import React from "react";
import Navbar from "../Navbar/Navbar";
import "./css/Home.css";

import Footer from "../Footer/Footer";
// import Categorias from "./Categorias";
// import ComoFunciona from "./ComoFunciona";
// import Vantagem from "./Vantagem";
// import ListaTodasCategorias from "../ListaProdutos/ListaTodasCategorias";
import ListaCategoria from "../ListaProdutos/ListaCategoria";

export default function HomeRent() {
    return (
        <div>
            <header>
                <Navbar isHome={true} />
            </header>
            <div className="banner">
                <img src="/banner.png" alt="banner" className="banner-image" />
            </div>

            {/* <ListaTodasCategorias/> */}
            <ListaCategoria categoria={"Camping"}/>
            {/* <Vantagem/>
            <ComoFunciona/>
            <Categorias/> */}
            <Footer />
        </div>
    );
}