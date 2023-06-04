import CardProduto from './CardProduto'
import './css/ListaCategoria.css'

export default function ListaCategoria({ categoria }){

    return(
        <section className='lista-categoria-content container'> 
            <div className='title-list d-flex align-items-center '> 
                <h2> {categoria} </h2>
            </div>

            <div className='d-flex list-product justify-content-center align-items-center flex-wrap'> 
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
            </div>
            


        </section>

        )

}
