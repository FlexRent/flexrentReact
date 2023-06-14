import { useContext } from "react";
import { MinhaAreaContext } from "../../../pages/minhaArea/MinhaAreaContext";
import "./css/listarMeusProdutos.css";

export default function ListarMeusProdutos({ onButtonClick }) {
  const listaProdutos = useContext(MinhaAreaContext).produtos;

  const token = localStorage.getItem("token").replace(/"/g, '');

  function deleteProduto(id) {
    fetch(`http://ec2-15-228-10-222.sa-east-1.compute.amazonaws.com:8000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(response => response.json()).then(data => {
      console.log(data)
      window.location.reload(true);
    });
  }
  // console.log(listaEnderecos)
  return listaProdutos ? (
    <>
      <div className="button-novo d-flex justify-content-end align-items-center">
        <button onClick={onButtonClick}> Novo </button>
      </div>

      <div className="row d-flex justify-content-center col-12">
        {listaProdutos.map((produto) => (
          <div
            key={produto.id}
            className="card col-10 my-2"
            style={{ maxWidth: "100vw", minHeight: "10vh" }}
          >
            <div className="row">
              <div className="col-3">
                <img
                  src={produto.images}
                  className="card-img p-3 border-radius-10"
                  alt={produto.name}
                />
              </div>
              <div className="col-7">
                <div className="card-body">
                  <h4 className="card-title py-2" style={{ color: "#16697A" }}>
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
              <div className="col-2 d-flex flex-column justify-content-around align-items-end">
                <button className="btn" onClick={() => onButtonClick(produto)}>
                  Editar
                </button>

                <button
                  className="btn"
                  onClick={() => deleteProduto(produto.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="button-novo d-flex justify-content-end align-items-center">
        <button onClick={onButtonClick}> Novo </button>
      </div>
      <p className="d-flex align-items-center justify-content-center h2 mt-5 text-center">Nenhum produto cadastrado</p>
    </>
  );
}
