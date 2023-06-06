import './css/cartaoInfo.css'

export default function CartaoInfo(){
    return(
    <div className='row rentall-card justify-content-center align-items-center'>
        <div className='col-8'> 
            <span> Cartão nubank</span>
        </div>

        <div className='col-2'> 
            <button> 
                <img src='./assets/minhaArea/editar.png' alt="editar"/>
            </button>

        </div>
        <div className='col-2'> 
        <button>  
            <img src='./assets/minhaArea/lixeira.png' alt="excluir"/>
        </button>
        </div>
        

    </div>        

    )}
        