import "./css/formsProduto2.css";
import { useState } from "react";
import CompFormEndereco from "./CompFormEndereco";
import CompInputHora from "./CompInputHora";
import CompCardEndereco from "./CompCardEndereco";
import { useContext } from "react";
import { MinhaAreaContext } from "../../../pages/minhaArea/MinhaAreaContext";

export default function FormsProduto2({ produtos, enderecos, backForm }) {
  const produto = produtos;
  const endereco = enderecos;
  const listaEnderecos = useContext(MinhaAreaContext).enderecos;
  const [produtoAnyTime, setProdutoAnyTime] = useState(produto.any_time);
  const [customTimeFrom, setCustomTimeFrom] = useState(
    produto.custom_time_from
  );
  const [customTimeUntil, setCustomTimeUntil] = useState(
    produto.custom_time_until
  );
  const [rentDay, setRentDay] = useState(produto.rent_day);

  //  console.log(produto);
  //  console.log(listaEnderecos)

  // ****** Selecionar Endereco ******************
  const [enderecoSelecionado, setEnderecoSelecionado] = useState("");
  const handleOpcaoChange2 = (event) => {
    setEnderecoSelecionado(event.target.value);
  };

  const renderizarCampoEndereco = () => {
    if (enderecoSelecionado === "novo-end") {
      return <CompFormEndereco />;
    } else {
      return <CompCardEndereco enderecos={listaEnderecos} />;
    }
  };

  // ************ Disponibilidades ***************
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  const renderizarCampoHorario = () => {
    if (opcaoSelecionada === "h-personalizado") {
      return <CompInputHora />;
    }
    return null;
  };

  return (
    <section className="forms2 row d-flex justify-content-center align-items-center">
      {/****************** Retirada & Devoluvao ******************/}
      <div className="header-title">
        <h3> Opções de retirada e devolução </h3>
      </div>
      <div className="border-style border-A forms">
        {/******* select ******/}
        <div className="d-flex justify-content-between mt-2">
          <div className="form-check col-4">
            <label className="form-check-label" htmlFor="listar-end">
              Selecionar endereço
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="radioEndereco"
              id="listar-end"
              checked={enderecoSelecionado === "listar-end"}
              onChange={handleOpcaoChange2}
              value="listar-end"
            />
          </div>

          <div className="form-check col-4">
            <label className="form-check-label" htmlFor="novo-end">
              Novo endereço
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="radioEndereco"
              id="novo-end"
              checked={enderecoSelecionado === "novo-end"}
              onChange={handleOpcaoChange2}
              value="novo-end"
            />
          </div>
        </div>
        {/******* Content ******/}
        {renderizarCampoEndereco()}
      </div>
      {/***********************************************************/}

      {/******************* Disponibilidades **********************/}
      <div className="header-title">
        <h3> Disponibilidades</h3>
      </div>

      <div className="border-style border-B forms">
        {/* Horario */}
        <div className="row">
          {/* Radio Buttons */}
          <div className="section-hr col-6 col-md-6 mt-1">
            <div className="form-check">
              <label className="form-check-label" htmlFor="h-qualquer">
                Qualquer horário
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="opcao-horario"
                id="h-qualquer"
                checked={opcaoSelecionada === "h-qualquer"}
                onChange={handleOpcaoChange}
                value="h-qualquer"
              />
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="h-personalizado">
                Horário personalizado
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="opcao-horario"
                id="h-personalizado"
                checked={opcaoSelecionada === "h-personalizado"}
                onChange={handleOpcaoChange}
                value="h-personalizado"
              />
            </div>
          </div>
          {/* Input time */}
          <div className="section-hr col-6 col-md-6 mt-1">
            {renderizarCampoHorario()}
          </div>
        </div>

        {/* Dias */}
        <div className="dias-content mt-2">
          <span> Selecione os dias </span>
          <div className="d-flex justify-content-between mt-2">

            <div className="col-6 col-md-6">

              <select
                className="form-select form-select-md custom-border"
                aria-label="Default select example"
                id="estado"
              >
                <option defaultValue>Dias disponivies para retirada e devolução </option>
                <option value="1">Todos os dias</option>
                <option value="2">Dias de uteis</option>
                <option value="2">Fim de semana</option>
              </select>
            </div>

          </div>
        </div>
      </div>
      {/**********************************************************/}

      <div className="d-flex justify-content-center mt-3">
        <div className="btn-bottom d-flex justify-content-between">
          <button className="btn-ant" onClick={backForm}>
            Voltar
          </button>
          <button className="btn-prox"> Finalizar</button>
        </div>
      </div>
    </section>
  );
}
