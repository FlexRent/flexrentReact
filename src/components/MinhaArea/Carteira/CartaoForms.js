
import './css/CartaoForms.css'
import ReactInputMask from 'react-input-mask';
import { useState } from 'react';


export default function CartaoForms({ clickVoltar }) {

    const handleVoltarClick = () => {
        clickVoltar();
      };

    const [text, setText] = useState('');
    const handleInputChange = (event) => {
    const inputValue = event.target.value;  
    const textOnly = inputValue.replace(/[0-9]/, ''); // Remover números da entrada
    const uppercaseText = textOnly.toUpperCase(); // Converter o texto em maiúsculo
    setText(uppercaseText);
    };

    return (
        <div className='forms row'>
            <div className='forms-header d-flex justify-content-center align-items-center'>
                <h5 className='col-10'> Editar </h5>
                <button onClick={handleVoltarClick} type="submit" className='col-2'> Salvar </button>
            </div>

            <div className='forms-content'>

                <form className="row">
                    <div class="col-12 ">
                        <label for="inputEmail4" class="form-label">Titulo</label>
                        <input type="text" class="form-control form-control-sm custom-border" id="titulo-cartao"  />

                        <label for="inputEmail4" class="form-label ">Nome impresso</label>
                        <input type="text" class="form-control form-control-sm custom-border" id="nome-cartao" onChange={handleInputChange} value={text}/>

                        <label for="inputEmail4" class="form-label">Numero do cartão</label>
                        <ReactInputMask class="form-control form-control-sm custom-border input-number-custom" id="numero-cartao" mask={"9999  9999  9999  9999"} />
                        {/* <input type="number" class="form-control form-control-sm custom-border input-number-custom" id="numero-cartao" /> */}
                    </div>

                    <div class="col-5">
                        <label for="inputEmail4" class="form-label">Validade</label>
                        <ReactInputMask class="form-control form-control-sm custom-border" id="validade-cartao" mask={"99 / 99"}/>
                        {/* <input type="email" class="form-control form-control-sm custom-border" id="validade-cartao"/> */}
                    </div>

                    <div className='col-2'> </div>

                    <div class="col-5">
                        <label for="inputPassword4" class="form-label">CVV</label>
                        <ReactInputMask className='form-control form-control-sm custom-border' id="cvv-cartao" mask={"999"} />
                        {/* <input  type="number" class="form-control form-control-sm custom-border" id="cvv-cartao" min="0" max="999" /> */}
                    </div>

                </form>

            </div>

        </div>

    )};
