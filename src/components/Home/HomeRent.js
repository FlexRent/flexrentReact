import React from "react";
import Navbar from "../Navbar/Navbar";
import "./css/Home.css";

export default function HomeRent() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className="banner">
                <img src="/banner.png" alt="banner" className="banner-image" />
            </div>

            <section className="vantagem ">

                <div className="row">

                    <div className="titulo col-12 col-md-4 d-flex justify-content-end align-items-end">
                        <h3>Vantagens em ser Rent<spa className="ponto">.</spa> </h3>
                    </div>

                    <div className="icons col-12 col-md-8">
                        <div className="titles d-flex justify-content-start align-items-center mx-5">
                            <span> Para quem for alugar </span>
                        </div>
                        <div className=" cards row d-flex justify-content-center align-items-center">

                            <div className="cards-list d-flex justify-content-between align-items-center">

                                <div className="card-personalizado">
                                    <div className="card-icon d-flex align-items-center justify-content-center">
                                        <img src="./economia.png" />
                                    </div>
                                    <div className="card-texto text-center"> 
                                        <span> Ecônomia</span> 
                                    </div>
                                </div>
                                
                                <div className="card-personalizado">
                                    <div className="card-icon d-flex align-items-center justify-content-center">
                                        <img src="./earth.png" />
                                    </div>
                                    <div className="card-texto text-center"> 
                                        <span> Reduz o consumo excessivo</span> 
                                    </div>
                                </div>
                          
                                <div className="card-personalizado">
                                    <div className="card-icon d-flex align-items-center justify-content-center">
                                        <img src="./flexibilidade.png" />
                                    </div>
                                    <div className="card-texto text-center"> 
                                        <span> Flexibilidade</span> 
                                    </div>
                                </div>

                            </div>

                            <div className="cards-list d-flex justify-content-between align-items-center">

                            <div className="card-personalizado">
                                    <div className="card-icon d-flex align-items-center justify-content-center">
                                        <img src="./mala.png" />
                                    </div>
                                    <div className="card-texto text-center"> 
                                        <span> Oportuinidade de negócios</span> 
                                    </div>
                                </div>
                                
                                <div className="card-personalizado">
                                    <div className="card-icon d-flex align-items-center justify-content-center">
                                        <img src="./cashBack.png" />
                                    </div>
                                    <div className="card-texto text-center"> 
                                        <span>Retorno do investimento</span> 
                                    </div>
                                </div>
                          
                                <div className="card-personalizado">
                                    <div className="card-icon d-flex align-items-center justify-content-center">
                                        <img src="./rendaextra.png" />
                                    </div>
                                    <div className="card-texto text-center"> 
                                        <span> Renda extra </span> 
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="titles d-flex justify-content-end align-items-center mx-5">
                            <span> Para quem for locar </span>
                        </div>

                    </div>

                </div>


            </section>
        </div>
    );
}