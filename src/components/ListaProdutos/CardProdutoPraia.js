import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './css/CardProduto.css'

export default function  CardProdutoPraia(){
    return(
        <section className='card-content'> 
            <div className='image-content p-1'> 
            <img alt="cadeira-praia" src='./assets/apresentacao/cadeira-praia.jpeg'/>
            </div>
            <div className='title-content d-flex justify-content-center align-items-center'> 
                <span className='text-center'> Cadeira de praia c/ apoio de copo</span>
            </div>
            <div className='price-content d-flex'>
                <div className='diaria d-flex justify-content-center align-items-center'>
                    <span> Diária </span>
                </div>

                <div className='price  d-flex justify-content-center align-items-center'> 
                        <span> R$ {"10,50"} </span>
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