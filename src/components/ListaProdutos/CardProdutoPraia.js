import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './css/CardProduto.css'

export default function CardProdutoPraia() {
    return (
        <>
            <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">
                <section className='card-content'>
                    <div className='image-content p-1'>
                        <img src='https://img.olx.com.br/images/70/707308754232468.jpg' />
                    </div>
                    <div className='title-content d-flex justify-content-center align-items-center'>
                        <span className='text-center'>Cadeira de praia </span>
                    </div>
                    <div className='price-content d-flex'>
                        <div className='diaria d-flex justify-content-center align-items-center'>
                            <span> Diária </span>
                        </div>

                        <div className='price  d-flex justify-content-center align-items-center'>
                            <span> R$ {"15,00"} </span>
                        </div>


                    </div>

                    {/* <div className="d-flex justify-content-center align-items-center text-white">
                <Button className="btn mt-2 rounded-4 text-white border-0" style={{ backgroundColor: '#4BBE8F' }}>
                    <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">Ver Produto</Link>
                </Button>
            </div> */}

                </section>
            </Link>
            <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">
                <section className='card-content'>
                    <div className='image-content p-1'>
                        <img src='https://photos.enjoei.com.br/cadeira-dobravel-quechua-camping-84624132/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy84OTkzMTg2Lzk1NzZhZjc3ZjkwMmJjMDllZjQyNjU5MjE1ZGY5ODFhLmpwZw' />
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

                    {/* <div className="d-flex justify-content-center align-items-center text-white">
                <Button className="btn mt-2 rounded-4 text-white border-0" style={{ backgroundColor: '#4BBE8F' }}>
                    <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">Ver Produto</Link>
                </Button>
            </div> */}

                </section>
            </Link>
            <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">
                <section className='card-content'>
                    <div className='image-content p-1'>
                        <img src='https://img.olx.com.br/images/05/053304856988708.jpg' />
                    </div>
                    <div className='title-content d-flex justify-content-center align-items-center'>
                        <span className='text-center'> Guarda sol azul</span>
                    </div>
                    <div className='price-content d-flex'>
                        <div className='diaria d-flex justify-content-center align-items-center'>
                            <span> Diária </span>
                        </div>

                        <div className='price  d-flex justify-content-center align-items-center'>
                            <span> R$ {"22,50"} </span>
                        </div>


                    </div>

                    {/* <div className="d-flex justify-content-center align-items-center text-white">
                <Button className="btn mt-2 rounded-4 text-white border-0" style={{ backgroundColor: '#4BBE8F' }}>
                    <Link to={"/detalhes-produto"} className="text-reset text-decoration-none">Ver Produto</Link>
                </Button>
            </div> */}

                </section>
            </Link>
        </>
    )
}