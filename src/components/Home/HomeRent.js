import React from "react";
import Navbar from "../Navbar/Navbar";
import "./css/Home.css";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";

export default function HomeRent() {
    return (
        <div>
            <header>
                <Navbar isHome={true} />
            </header>
            <div className="banner">
                <img src="/banner.png" alt="banner" className="banner-image" />
            </div>

            <section className="vantagem pb-5">
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

            <section className="como-funciona pt-5">
                <div className="row">
                    <div className="como-funciona-content col-12 col-md-8 px-0">

                        <div className="title-section d-flex align-items-center justify-content-end">
                            <h3>
                                Não se prive, vá em frente e experimente
                            </h3>
                        </div>
                        <div className="subtitle-section  d-flex align-items-center justify-content-center" >
                            <h3>
                                Como funciona
                            </h3>
                        </div>

                        <div className=" cards-content d-flex align-items-center justify-content-center">
                            <div className="row content-como-funciona d-flex justify-content-center align">


                                <div className="conteudo d-flex justify-content-strat row">
                                    <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                        <div className="card-como-funciona d-flex align-items-center">
                                            <span className="card-num">1.</span>
                                            <span className="card-txt" >Cadastre-se na plataforma. </span>
                                        </div>
                                    </div>
                                </div>

                                <div className=" conteudo d-flex justify-content-end row">
                                    <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                        <div className="card-como-funciona d-flex align-items-center">
                                            <span className="card-num ">2.</span>
                                            <span className="card-txt"> Alugue o item que precisar, ou disponibilize algum na plataforma. </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="conteudo d-flex justify-content-strat row">
                                    <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                        <div className="card-como-funciona d-flex align-items-center">
                                            <span className="card-num ">3.</span>
                                            <span className="card-txt" >Marque um lugar para encontrar o proprietário, e retirar o produto. </span>
                                        </div>
                                    </div>
                                </div>

                                <div className=" conteudo d-flex justify-content-end row">
                                    <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                        <div className="card-como-funciona d-flex align-items-center">
                                            <span className="card-num ">4.</span>
                                            <span className="card-txt" >Utilize e pague apenas pelo periodo, que sera nescessário. </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="content-end d-flex justify-content-center align-items-center">
                            <div>
                                <button>Começar</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <img src="./surf.jpg" alt="surf-woman"/>
                    </div>
                </div>
            </section>

            <section className="categorias"> 
                    <div> 
                        <div className="titulo-cat d-flex justify-content-center align-items-end"> 
                            <h3> Categorias</h3>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="cards-categoria-content  d-flex align-items-end justify-content-between flex-wrap">
                                
                                <div className="card-cat text-center p-2">
                                    <div className="image-card-cat">
                                        <img src="./camping.jpg" alt="camping"/>
                                    </div>
                                    <span> Camping </span>
                                </div>

                                <div className="card-cat text-center p-2">
                                    <div className="image-card-cat">
                                    <img src="./esporte.jpg" alt="esporte"/>
                                    </div>
                                    <span> Esportes </span>
                                </div>

                                <div className="card-cat text-center p-2">
                                    <div className="image-card-cat">
                                    <img src="./ferramentas.jpg" alt="ferramentas"/>
                                    </div>
                                    <span > Ferramentas </span>
                                </div>

                                <div className="card-cat text-center p-2">
                                    <div className="image-card-cat">
                                    <img src="./praia.jpg" alt="praia"/>
                                    </div>
                                    <span > Praia </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="end-content-cat d-flex align-items-end justify-content-center"> 
                      <button> Ver todos</button>
                    </div>

            </section>
            <Footer />
            
        </div>
    );
}