import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./css/DetalhesProduto.css";

export default function DetalhesProduto() {
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState();
  const token = localStorage.getItem("token");


  

  const fetchProductData = () => {
    // Lógica para buscar os dados do produto no banco de dados
    fetch("http://127.0.0.1:8000/api/products/showOne?product_id=2", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.product);
        setProduct(data.product);
      });

    // Atualize os estados com os dados do produto recuperados
    const imagesFromDatabase = [
      "./assets/home/barraca.jpg",
      "./assets/home/camping.jpg",
      "./assets/home/barraca.jpg",
      "./assets/home/camping.jpg",
      "./assets/home/barraca.jpg",
    ];
    setProductImages(imagesFromDatabase);

  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return product ? (

    <>
      <Header />
      <section className="detalhes-produto-content container">
        <div className="title-product-content d-flex justify-content-center align-items-end">
          <h2>{product.name}</h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="product-content d-flex flex-wrap ">
            {productImages.length > 0 && (
              <div className="product-image my-1 d-flex justify-content-center align-items-center ">
                <button
                  className="btn btn-overlay2"
                  onClick={handlePreviousImage}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img src={productImages[currentImageIndex]} alt="" />
                <button className="btn btn-overlay" onClick={handleNextImage}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            )}

            <div className="product-info m-1">
              <div className="info-desc-content m-2">
                <span className="title-info d-block"> Descrição</span>
                <div className="info-desc">
                  <span>
                     {product.description}                    
                  </span>
                </div>
              </div>

              <div className="localizacao-content m-2">
                <span className="title-info d-block"> Localização</span>
                <span className="bairro-title"> Bairro: </span>
                <span> {"Parque Santo Amaro "} </span>
              </div>

              <div className="periodo-content m-2">
                <span className="title-info d-block"> Periodo</span>
                <div className="d-flex justify-content-between">
                  <div className="flex-grow-2 mx-2">
                    <label for="dataInicio">Retirada</label>
                    <input
                      type="date"
                      id="dataInicio"
                      className="form-control"
                      name="dataInicio"
                    />
                  </div>
                  <div className="flex-grow-2 mx-2">
                    <label for="dataFim">Devolução</label>
                    <input
                      type="date"
                      id="dataFim"
                      className="form-control"
                      name="dataFim"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <div className="linha"></div>
              </div>

              <div className="price-content m-2">
                <div className="title-valor mx-2">
                  <span> Valor diária:</span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="total-diaria d-flex justify-content-center mx-2">
                    <span>R${product.daily_price}</span>
                  </div>

                  <div className="botao-content d-flex justify-content-center">
                    <button> Alugar </button>
                  </div>
                </div>

                <div className="aviso d-flex justify-content-end">
                  <span> Valor referente a diária, mais taxas. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  ) : (
    
    <>
      <Header />
      <section className="detalhes-produto-content container">
        <div className="title-product-content d-flex justify-content-center align-items-end">
          <h2>Barraca</h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="product-content d-flex flex-wrap ">
            {productImages.length > 0 && (
              <div className="product-image my-1 d-flex justify-content-center align-items-center ">
                <button
                  className="btn btn-overlay2"
                  onClick={handlePreviousImage}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img src={productImages[currentImageIndex]} alt="" />
                <button className="btn btn-overlay" onClick={handleNextImage}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            )}

            <div className="product-info m-1">
              <div className="info-desc-content m-2">
                <span className="title-info d-block"> Descrição</span>
                <div className="info-desc">
                  <span>
                    {" "}
                    Otima barraca para acampar com a mulher e deixar uns
                    herdeiros no mundo. 🥰{" "}
                  </span>
                </div>
              </div>

              <div className="localizacao-content m-2">
                <span className="title-info d-block"> Localização</span>
                <span className="bairro-title"> Bairro: </span>
                <span> {"Parque Santo Amaro "} </span>
              </div>

              <div className="periodo-content m-2">
                <span className="title-info d-block"> Periodo</span>
                <div className="d-flex justify-content-between">
                  <div className="flex-grow-2 mx-2">
                    <label for="dataInicio">Retirada</label>
                    <input
                      type="date"
                      id="dataInicio"
                      className="form-control"
                      name="dataInicio"
                    />
                  </div>
                  <div className="flex-grow-2 mx-2">
                    <label for="dataFim">Devolução</label>
                    <input
                      type="date"
                      id="dataFim"
                      className="form-control"
                      name="dataFim"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <div className="linha"></div>
              </div>

              <div className="price-content m-2">
                <div className="title-valor mx-2">
                  <span> Total</span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="total-diaria d-flex justify-content-center mx-2">
                    <span> R$ 38,90</span>
                  </div>

                  <div className="botao-content d-flex justify-content-center">
                    <button> Alugar </button>
                  </div>
                </div>

                <div className="aviso d-flex justify-content-end">
                  <span> Valor referente a diária, mais taxas. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
}
