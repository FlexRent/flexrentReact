import { useState, useEffect } from "react";

export default function ListarMeusProdutos({ onButtonClick }) {
  const [produtos, setProdutos] = useState();

  function getProdutos() {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProdutos(data.products);
      });
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return produtos ? (
    <>
      <button onClick={onButtonClick}> Novo </button>
      <div className="row d-flex justify-content-center col-12">
        {produtos.map((produto) => {
          return (
            <div key={produto.id} className="card col-10 my-2" style={{ maxWidth: "100vw", minHeight: "10vh" }}>
              <div className="row">
                <div className="col-3">
                  <img
                    src={produto.image}
                    className="card-img p-3 border-radius-10"
                    alt={produto.name}
                  />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h4
                      className="card-title py-2"
                      style={{ color: "#16697A" }}
                    >
                      {produto.name}
                    </h4>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      <span className="me-2" style={{ color: "#16697A" }}>
                        Status:
                      </span>
                      {produto.status}
                    </h6>
                  </div>
                </div>
                <div className="col-2 d-flex flex-column justify-content-around">
                  <button className="btn">Editar</button>
                  <button className="btn">Excluir</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <>
      <p>Tem que fazer uma página para essa parte de carregando</p>
    </>
  );
}
