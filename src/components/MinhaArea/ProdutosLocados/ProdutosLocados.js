import CardLocados from './CardLocados'
import CheckInComponente from './CheckInComponente'
import './css/produtosLocados.css'


export default function ProdutosLocados() {

    return ( 
        <section className= "produtos-locados-content">

        <div className='row d-flex justify-content-center pt-3'> 
            <CheckInComponente/>
        </div>
             

        <div className='row d-flex justify-content-center pt-4'> 
        
                <CardLocados/>
                <CardLocados/>
        </div>
            
            
        </section>
    )
}