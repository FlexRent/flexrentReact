import '../../Css/MinhaArea/CartaoInfo.css'

export default function CartaoInfo(){
    return(
    <div className='row card justify-content-center align-items-center'>
        <div className='col-8'> 
            <span> Cartão nubank</span>
        </div>

        <div className='col-2'> 
            <button> 
                <img src='./editar.png' alt="editar"/>
            </button>

        </div>
        <div className='col-2'> 
        <button>  
            <img src='./lixeira.png' alt="excluir"/>
        </button>
        </div>
        

    </div>        

    )}
        