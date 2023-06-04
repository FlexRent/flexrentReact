import React from "react";
import { useState } from "react";
import "./css/compFormEndereco.css";

export default function CompFormEndereco() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const handleCepChange = async (event) => {
    const newCep = event.target.value;
    if (newCep.length > 9) {
      return;
    }
    setCep(newCep);

    if (newCep.length === 8) {
      const url = `https://viacep.com.br/ws/${newCep}/json/`;
      const response = await fetch(url);
      const data = await response.json();
      setEndereco(data);
    }
  };

  return (
    <div className="ComFormEndereco">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <label htmlFor="cep" className="form-label">
            CEP
          </label>

          <input
            value={cep}
            onChange={handleCepChange}
            className="form-control form-control-md custom-border"
            id="cep"
          />

          <label htmlFor="bairro" className="form-label">
            Bairro
          </label>
          <input
            value={endereco.bairro}
            type="text"
            className="form-control form-control-md custom-border"
            id="bairro"
          />

          <div className="row">
            <div className="col-6 col-md-6">
              <label htmlFor="numero" className="form-label">
                Numero
              </label>
              <input
                type="number"
                className="form-control form-control-md custom-border"
                id="numero"
              />
            </div>

            <div className="col-6 col-md-6">
              <label htmlFor="estado" className="form-label">
                Estado
              </label>
              <select
                className="form-select form-select-md custom-border"
                aria-label="Default select example"
                id="estado"
              >
                <option defaultValue>Estado</option>
                <option value="1">SP</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 ">
          <label htmlFor="logradouro" className="form-label">
            Logradouro
          </label>
          <input
            defaultValue={endereco.logradouro}
            type="text"
            className="form-control form-control-md custom-border"
            id="logradouro"
          />

          <label htmlFor="complemento" className="form-label">
            Complemento
          </label>
          <input
            type="text"
            className="form-control form-control-md custom-border"
            id="complemento"
          />

          <label htmlFor="localidade" className="form-label">
            Cidade
          </label>
          <input
            defaultValue={endereco.localidade}
            type="text"
            className="form-control form-control-md custom-border"
            id="localidade"
          />
        </div>
      </div>

      <div className="row justify-content-center align-items-end">
        <div className="col-6 col-md-6">
          <label htmlFor="titulo" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control form-control-md custom-border"
            id="titulo"
          />
        </div>

        <div className="col-6 col-md-6 btn-salvar d-flex justify-content-end">
          <button> Salvar </button>
        </div>
      </div>
    </div>
  );
}
