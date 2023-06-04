import CardProduto from './CardProduto'
import './css/ListaCategoria.css'

export default function ListaCategoria({ categoria }){

    return(
        <section className='lista-categoria-content container'> 
            <div className='title-list d-flex align-items-center '> 
                <h2> {categoria} </h2>
            </div>

            <div className='d-flex flex-wrap'> 
                <CardProduto/>
            </div>
            


        </section>

        )

}
