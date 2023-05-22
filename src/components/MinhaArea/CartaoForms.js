import '../../Css/MinhaArea/CartaoForms.css'

export default function CartaoForms() {
    return (
        <div className='forms row'>
            <div className='forms-header d-flex justify-content-center align-items-center'>
                <h5 className='col-10'> Editar </h5>
                <button type="submit" className='col-2'> Salvar </button>
            </div>

            <div className='forms-content'>

                <form className="row">
                    <div class="col-12 ">
                        <label for="inputEmail4" class="form-label">Titulo</label>
                        <input type="text" class="form-control form-control-sm custom-border" id="titulo-cartao"/>

                        <label for="inputEmail4" class="form-label ">Nome impresso</label>
                        <input type="text" class="form-control form-control-sm custom-border" id="nome-cartao" />

                        <label for="inputEmail4" class="form-label">Numero do cartão</label>
                        <input type="number" class="form-control form-control-sm custom-border input-number-custom" id="numero-cartao" />
                    </div>

                    <div class="col-5">
                        <label for="inputEmail4" class="form-label">Validade</label>
                        <input type="email" class="form-control form-control-sm custom-border" id="validade-cartao"/>
                    </div>

                    <div className='col-2'> </div>

                    <div class="col-5">
                        <label for="inputPassword4" class="form-label">CVV</label>
                        <input  type="number" class="form-control form-control-sm custom-border" id="cvv-cartao" min="0" max="999" />
                    </div>

                </form>

            </div>

        </div>

    )
}
