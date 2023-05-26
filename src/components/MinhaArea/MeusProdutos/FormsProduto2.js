import './css/formsProduto2.css'

export default function FormsProduto2(){
    return(
        <section className="forms2 row d-flex justify-content-center align-items-center" > 
            <div className="header-title">
                <h3> Detalhes do produto </h3>
            </div>

            <div className='forms-content forms row'>

                <div class="col-12 col-md-6 ">

                    <label for="nome-produto" class="form-label">CEP</label>
                    <input type="number" class="form-control form-control-md custom-border" id="nome-produto" />

                    <label for="marca-produto" class="form-label">Bairro</label>
                    <input type="text" class="form-control form-control-md custom-border" id="marca-produto" />

                </div>

                
                <div class="col-12 col-md-6 ">
                    <label for="nome-produto" class="form-label">Logradouro</label>
                    <input type="number" class="form-control form-control-md custom-border" id="nome-produto" />

                    <label for="nome-produto" class="form-label">Complemento</label>
                    <input type="number" class="form-control form-control-md custom-border" id="nome-produto" />

                    <label for="nome-produto" class="form-label">Cidade</label>
                    <input type="number" class="form-control form-control-md custom-border" id="nome-produto" />
                </div>



                <div class="col-6 col-md-3">
                    <label for="nome-produto" class="form-label">CEP</label>
                    <input type="number" class="form-control form-control-md custom-border" id="nome-produto" />
                </div>

                <div class="col-6 col-md-3">
                    <label for="nome-produto" class="form-label">CEP</label>
                    <input type="number" class="form-control form-control-md custom-border" id="nome-produto" />
                </div>

                


            </div>

        </section>
    );

};