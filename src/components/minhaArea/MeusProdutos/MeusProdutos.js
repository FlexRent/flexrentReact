import { useState } from "react";
import FormsProduto1 from "./FormsProduto1";
import FormsProduto2 from "./FormsProduto2";
import ListarMeusProdutos from "./ListarMeusProdutos";
import "./css/meusProdutos.css";

// import { MinhaAreaContext } from "./MinhaAreaContext";

// import FormsProduto2 from "./FormsProduto2";

export default function MeusProdutos() {
  const [novoProduto, setNovoProduto] = useState(true);
  const [primeiroForm, setPrimeiroForm] = useState(true);
  const [produto, setProduto] = useState();

  const novoProdutoTela = (produto) => {
    // console.log(produto);
    setProduto(produto);
    setNovoProduto(!novoProduto);
  };

  const trocarForm = () => {
    setPrimeiroForm(!primeiroForm);
  };

  return novoProduto ? (
    <div className="ListarMeusProdutos">
      <ListarMeusProdutos onButtonClick={novoProdutoTela} />
    </div>
  ) : primeiroForm ? (
    <div className="FormsProduto1">
      <FormsProduto1 produtos={produto} back={novoProdutoTela} next={trocarForm} />
    </div>
  ) : (
    <div className="FormsProduto2">
      <FormsProduto2 backForm={trocarForm} />
    </div>
  );
}
