import './css/DetalhesProduto.css'
export default function DetalhesProduto() {
  return (
    <section className="detalhes-produto-content container">
      <div className="title-product-content d-flex justify-content-center align-items-end">
        <h2> Nome do produto</h2>
      </div>

      <div className='d-flex flex-wrap justify-content-center align-items-center'>

        <div className='product-content d-flex flex-wrap '>

          <div className='product-image my-1 d-flex justify-content-center align-items-center '>
            <img src='./barraca.jpg' alt=''/>
          </div>

          <div className='product-info m-1'>
                <div className='info-desc-content m-2' >
                      <span className='title-info d-block'> Descrição</span>
                      <div className='info-desc'> 
                        <span> Otima barraca para acampar com a mulher e deixar uns herdeiros no mundo. 🥰 </span>
                      </div>
                </div>

                <div className='localizacao-content m-2'> 
                  <span className='title-info d-block'> Localização</span>
                  <span className='bairro-title'> Bairro: </span> 
                  <span> {"Parque Santo Amaro "} </span>
                </div>

                <div className='periodo-content m-2'> 
                  <span className='title-info d-block'> Periodo</span>
                  <div class="d-flex justify-content-between">
                    <div class="flex-grow-2 mx-2">
                      <label for="dataInicio">Data de Início:</label>
                      <input type="date" id="dataInicio" class="form-control" name="dataInicio"/>
                    </div>
                    <div class="flex-grow-2 mx-2">
                      <label for="dataFim">Data de Fim:</label>
                      <input type="date" id="dataFim" class="form-control" name="dataFim"/>
                    </div>
                  </div>

                </div>
              
                <div className='d-flex justify-content-center align-items-center'> 
                  <div className='linha'></div>
                </div>
                
                <div className='price-content m-2'> 
                    <div className='title-valor mx-2'> 
                        <span> Total</span>
                    </div> 

                    <div className='d-flex align-items-center'> 
                      <div className='total-diaria d-flex justify-content-center mx-2'> 
                        <span> R$ 38,90</span>
                      </div>

                      <div className='botao-content d-flex justify-content-center'> 
                          <button> Alugar </button>
                      </div>
                </div>

                <div className='aviso d-flex justify-content-end' > 
                    <span> Valor referente a diária, mais taxas. </span>
                </div>


                </div>
          </div>

        </div>
      </div>
    </section>
  )
}
