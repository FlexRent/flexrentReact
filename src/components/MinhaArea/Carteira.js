import '../../Css/MinhaArea/Carteira.css';
import CartaoInfo from './CartaoInfo';


export default function Carteira(){
    return(
        
        <section className='carteira-content flex-column pt-3'>

            <div className='saldo row mb-5'>

                <div className='col-12 col-md-3 d-flex align-items-center justify-content-end' id='saldo-atual'> 
                     <spam>Saldo disponivel</spam>
                </div>

                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center" id='saldo-valor'>
                    <spam>R$ 398,00</spam>
                </div>

                <div class="col-12 col-md-3 d-flex align-items-center justify-content-center" id='saldo-button'>
                    <button>Resgatar</button>
                </div>
                
            </div>


            <div className='cartao-content row d-flex justify-content-between'>
                
                <div className='bord-box-A col-12 col-md-6 '>
                    <h5> Meus cartões </h5>

                    <div className=' justify-content-center align-items-center row'> 
                        <CartaoInfo/>
                        <CartaoInfo/>
                        <CartaoInfo/>
                    </div>
                    
                </div>

                <div className='bord-box-B col-12 col-md-6'>
                    <div className='d-flex align-items-center justify-content-center' id='newCard' > 
                    <p> Novo cartão </p>
                    </div>
                    
                </div>

            </div>
         
        </section>
    )
}