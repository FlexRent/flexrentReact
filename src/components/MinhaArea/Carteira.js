import '../../Css/Carteira.css'

export default function Carteira(){
    return(
        
        <section className='carteira-content d-flex pt-3'>

            <div className='saldo row'>

                <div className='col-sm-3 d-flex align-items-center justify-content-end' id='saldo-atual'> 
                     <spam>Saldo atual</spam>
                </div>

                <div class="col-sm-6 d-flex align-items-center justify-content-center" id='saldo-valor'>
                    <p>R$ 398,00</p>
                </div>

                <div class="col-sm-3 d-flex align-items-center justify-content-center" id='saldo-button'>
                    <button>Resgatar</button>
                </div>
                
            </div>
         
        </section>
    )
}