import "./css/cartaoForms.css";
import ReactInputMask from "react-input-mask";
import { useState } from "react";

export default function CartaoForms({ clickVoltar }) {
  const token = localStorage.getItem("token").replace(/"/g, '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("https://flexrent-fake-api2.vercel.app/api/cards", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        card_title: formData.get("card_title"),
        card_name: formData.get("card_name"),
        card_number: formData.get("card_number"),
        card_cvv: formData.get("card_cvv"),
        card_expiration_date: formData.get("card_expiration_date")
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        clickVoltar();
      })
    console.log("saiu");
  }
  const [text, setText] = useState("");
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const textOnly = inputValue.replace(/[0-9]/, ""); // Remover números da entrada
    const uppercaseText = textOnly.toUpperCase(); // Converter o texto em maiúsculo
    setText(uppercaseText);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="forms row" >
        <div className="forms-header d-flex justify-content-center align-items-center">
          <h5 className="col-10"> Editar </h5>
          <button type="submit" className="col-2">
            Salvar
          </button>
        </div>
        <div className="row">
          <div className="forms-content">
            <div className="col-12 ">
              <label htmlFor="inputEmail4" className="form-label">
                Titulo
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-border"
                id="titulo-cartao"
                name="card_title"
              />

              <label htmlFor="inputEmail4" className="form-label ">
                Nome impresso
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-border"
                id="nome-cartao"
                onChange={handleInputChange}
                value={text}
                name="card_name"
              />

              <label htmlFor="inputEmail4" className="form-label">
                Numero do cartão
              </label>
              <ReactInputMask
                className="form-control form-control-sm custom-border input-number-custom"
                id="numero-cartao"
                mask={"9999  9999  9999  9999"}
                name="card_number"
              />
              {/* <input type="number" className="form-control form-control-sm custom-border input-number-custom" id="numero-cartao" /> */}
            </div>
            <div className="row">
              <div className="col-5">
                <label htmlFor="validade-cartao" className="form-label">
                  Validade
                </label>
                <ReactInputMask
                  className="form-control form-control-sm custom-border"
                  id="validade-cartao"
                  mask={"99 / 99"}
                  name="card_expiration_date"
                />
                {/* <input type="email" className="form-control form-control-sm custom-border" id="validade-cartao"/> */}
              </div>
              <div className="col-5">
                <label htmlFor="cvv-cartao" className="form-label">
                  CVV
                </label>
                <ReactInputMask
                  className="form-control form-control-sm custom-border"
                  id="cvv-cartao"
                  mask={"999"}
                  name="card_cvv"
                />
                {/* <input  type="number" className="form-control form-control-sm custom-border" id="cvv-cartao" min="0" max="999" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
