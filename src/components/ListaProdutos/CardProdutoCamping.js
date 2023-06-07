import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/CardProduto.css'

export default function CardProdutoCamping() {
    return (
        <section className='card-content'>
            <div className='image-content p-1'>
                <img src='https://macamp.com.br/site/wp-content/uploads/2017/02/12.jpg' />
            </div>
            <div className='title-content d-flex justify-content-center align-items-center'>
                <span className='text-center'>Barraca Quechua confortável</span>
            </div>
            <div className='price-content d-flex'>
                <div className='diaria d-flex justify-content-center align-items-center'>
                    <span> Diária </span>
                </div>

                <div className='price  d-flex justify-content-center align-items-center'>
                    <span> R$ {"10,00"} </span>
                </div>

            </div>

            <div className="d-flex justify-content-center align-items-center text-white">
                <Button className="btn mt-2 rounded-4 text-white border-0" style={{ backgroundColor: '#4BBE8F' }}>
                    <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">Ver Produto</Link>
                </Button>
            </div>

        </section>
    )
}