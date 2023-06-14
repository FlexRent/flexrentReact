import CardProdutoCamping from './CardProdutoCamping'
import CardProdutoEsporte from './CardProdutoEsporte'
import CardProdutoFerramenta from './CardProdutoFerramenta'
import CardProdutoPraia from './CardProdutoPraia'
import './css/ListaCategoria.css'

export default function ListaCategoria({ categoria }) {

    return (
        <>

            {/* Esporte */}
            <section className='lista-categoria-content container'>
                <div className='title-list d-flex align-items-center '>
                    <h2> Esporte </h2>
                </div>

                <div className='d-flex list-product justify-content-center align-items-center flex-wrap'>
                    <CardProdutoEsporte />
                </div>
            </section>

            {/* Praia */}
            <section className='lista-categoria-content container'>
                <div className='title-list d-flex align-items-center '>
                    <h2> Praia </h2>
                </div>

                <div className='d-flex list-product justify-content-center align-items-center flex-wrap'>
                    <CardProdutoPraia />
                </div>
            </section>


            {/* Ferramentas */}
            <section className='lista-categoria-content container'>
                <div className='title-list d-flex align-items-center '>
                    <h2> Ferramentas </h2>
                </div>

                <div className='d-flex list-product justify-content-center align-items-center flex-wrap'>
                    <CardProdutoFerramenta />
                </div>
            </section>

            {/* Camping */}
            {/* <section className='lista-categoria-content container'>
                <div className='title-list d-flex align-items-center '>
                    <h2> Camping </h2>
                </div>

                <div className='d-flex list-product justify-content-center align-items-center flex-wrap'>
                    <CardProdutoCamping />
                </div>
            </section> */}

        </>

    )

}
