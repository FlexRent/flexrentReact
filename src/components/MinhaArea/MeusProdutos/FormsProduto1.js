import { useState } from "react";
import "./css/formsProduto1.css";
import ReactInputMask from "react-input-mask";
import ListarImagens from "./ListarImagens";
import PhotoUpload from "./PhotoUpload";

export default function FormsProduto1({ produtos, back, next }) {
  const [imagensSelecionadas, setImagensSelecionadas] = useState([]);

  const produto = produtos;
  const [produtoName, setProdutoName] = useState(produto.name);
  const [produtoBrandName, setProdutoBrandName] = useState(produto.brand_name);
  const [produtoDescription, setProdutoDescription] = useState(
    produto.description
  );
  const [produtoPrice, setProdutoPrice] = useState(produto.product_price);
  const [produtoRentPrice, setProdutoRentPrice] = useState(produto.daily_price);
  const [produtoCategory, setProdutoCategory] = useState(produto.category);

  const handlePhotoChange = (imagens) => {
    setImagensSelecionadas(imagens);
  };

  const handleCategoryChange = (event) => {
    const selectedCategoryId = event.target.value;
    setProdutoCategory(selectedCategoryId);
  };
  return (
    <section className="forms1 row d-flex justify-content-center align-items-center ">
      <div className="header-title">
        <h3> Detalhes do produto </h3>
      </div>

      <div className="forms-content forms row">
        <div className="col-12 col-md-6 ">
          <label htmlFor="nome-produto" className="form-label">
            Nome
          </label>
          <input
            value={produtoName ? produtoName : ""}
            onChange={(e) => setProdutoName(e.target.value)}
            type="text"
            className="form-control form-control-md custom-border"
            id="nome-produto"
          />

          <label htmlFor="marca-produto" className="form-label">
            Marca
          </label>
          <input
            value={produtoBrandName ? produtoBrandName : ""}
            onChange={(e) => setProdutoBrandName(e.target.value)}
            type="text"
            className="form-control form-control-md custom-border"
            id="marca-produto"
          />

          <label htmlFor="categoria-produto" className="form-label">
            Categoria
          </label>
          <select
            className="form-select form-select-md custom-border"
            aria-label="Default select example"
            id="categoria-produto"
            value={produto.category ? produtoCategory.id : ""}
            onChange={handleCategoryChange}
          >
            <option>Selecione a categoria</option>
            <option value="1">Esportes</option>
            <option value="2">Praia</option>
            <option value="3">Camping</option>
            <option value="4">Ferramentas</option>
          </select>

          <PhotoUpload onPhotoChange={handlePhotoChange} />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="descricao-produto" className="form-label">
            Descrição
          </label>
          <textarea
            value={produtoDescription ? produtoDescription : ""}
            onChange={(e) => setProdutoDescription(e.target.value)}
            className="form-control form-control-md custom-border"
            id="edescricao-produto"
            rows="4"
          ></textarea>

          <label htmlFor="preco-produto" className="form-label">
            Valor do produto
          </label>
          <ReactInputMask
            value={produtoPrice ? produtoPrice : ""}
            onChange={(e) => setProdutoPrice(e.target.value)}
            className="form-control form-control-md custom-border"
            id="preco-produto"
            // mask={"R$: 9999"}
          />

          <label htmlFor="preco-diaria" className="form-label">
            Valor do aluguel (Diária)
          </label>
          <ReactInputMask
            value={produtoRentPrice ? produtoRentPrice : ""}
            onChange={(e) => setProdutoRentPrice(e.target.value)}
            className="form-control form-control-md custom-border"
            id="preco-diaria"
            // mask={"R$: 999"}
          />
        </div>

        <div className="list-img">
          <ListarImagens images={imagensSelecionadas} />
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="btn-bottom d-flex justify-content-between">
          <button className="btn-ant" onClick={back}>
            Cancelar
          </button>
          <button className="btn-prox" onClick={next}>
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
  // }
}
