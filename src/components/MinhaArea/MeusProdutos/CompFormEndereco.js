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

    setCep(newCep.replace(/[^0-9]/g, "").replace(/(\d{5})(\d{3})?/, "$1-$2"));

    if (newCep.length === 9) {
      const url = `https://viacep.com.br/ws/${newCep}/json/`;
      const response = await fetch(url);
      const data = await response.json();
      setEndereco(data);
    }
  };

  const token = localStorage.getItem("token").replace(/"/g, '');
  const user = JSON.parse(localStorage.getItem("user"))

  const handleSubmit = (event) => {
    // console.log("entrou")
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("http://ec2-15-228-10-222.sa-east-1.compute.amazonaws.com:8000/api/addresses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id: user.id,
        country: "Brasil",
        address_title: formData.get('address_title'),
        street: formData.get('street'),
        number: formData.get('number'),
        complement: formData.get('complement'),
        district: formData.get('district'),
        city: formData.get('city'),
        state: formData.get('state'),
        zipcode: formData.get('zipcode').replace(/-/g, ""),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
      });
    // console.log("saiu")
  }

  return (
    <div className="ComFormEndereco">
      <form onSubmit={handleSubmit}>
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
              name="zipcode"
            />

            <label htmlFor="bairro" className="form-label">
              Bairro
            </label>
            <input
              value={endereco.bairro}
              type="text"
              className="form-control form-control-md custom-border"
              id="bairro"
              name="district"
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
                  name="number"
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
                  name="state"
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
              name="street"
            />

            <label htmlFor="complemento" className="form-label">
              Complemento
            </label>
            <input
              type="text"
              className="form-control form-control-md custom-border"
              id="complemento"
              name="complement"
            />

            <label htmlFor="localidade" className="form-label">
              Cidade
            </label>
            <input
              defaultValue={endereco.localidade}
              type="text"
              className="form-control form-control-md custom-border"
              id="localidade"
              name="city"
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
              name="address_title"
            />
          </div>

          <div className="col-6 col-md-6 btn-salvar d-flex justify-content-end">
            <button type="submit"> Salvar </button>
          </div>
        </div>
      </form>
    </div>
  );
}
