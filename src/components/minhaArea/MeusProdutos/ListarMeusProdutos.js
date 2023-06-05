import { useContext } from "react";
import { MinhaAreaContext } from "../../../pages/minhaArea/MinhaAreaContext";
import './css/listarMeusProdutos.css'

export default function ListarMeusProdutos({ onButtonClick }) {
  // const listaProdutos = useContext(MinhaAreaContext).produtos;
  // const token = localStorage.getItem("token");

  // function deleteProduto(id) {
  //   fetch(`http://127.0.0.1:8000/api/products/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   // console.log("Produto deletado");
  //   window.location.reload(true);
  // }

  // console.log(listaProdutos.produtos);


  // return listaProdutos ? (
    return(
    <>
    <div className="button-novo d-flex justify-content-end align-items-center"> 
      <button onClick={onButtonClick}> Novo </button>
    </div>
      

      <div className="row d-flex justify-content-center col-12">
        {/* {listaProdutos.map((produto) => { */}
          {/* return ( */}
            <div
              // key={produto.id}
              className="card col-10 my-2"
              style={{ maxWidth: "100vw", minHeight: "10vh" }}
            >
              <div className="row">
                <div className="col-3">
                  <img
                    // src={produto.image}
                    className="card-img p-3 border-radius-10"
                    // alt={produto.name}
                  />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h4
                      className="card-title py-2"
                      style={{ color: "#16697A" }}
                    >
                      {/* {produto.name} */}
                    </h4>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      <span className="me-2" style={{ color: "#16697A" }}>
                        Status:
                      </span>
                      {/* {produto.status} */}
                    </h6>
                  </div>
                </div>
                <div className="col-2 d-flex flex-column justify-content-around align-items-end">
                  <button
                    className="btn"
                    // onClick={() => onButtonClick(produto)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn"
                    // onClick={() => deleteProduto(produto.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          {/* );
        })} */}
      </div>
    </>
  ) ;
  // : (
  //   <>
  //   <button 
  //   onClick={onButtonClick}
  //   > Novo </button>
  //     <p>Tem que fazer uma página para essa parte de carregando</p>
  //   </>
  // );
}
