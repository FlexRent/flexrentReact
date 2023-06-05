import CardLocados from './CardLocados'
import './css/produtosLocados.css'


export default function ProdutosLocados() {

    return ( 
        <section className= "produtos-locados-content"> 

        <div className='row d-flex justify-content-center pt-5'> 
                <CardLocados/>
                <CardLocados/>
        </div>
            
            
        </section>
    )
}