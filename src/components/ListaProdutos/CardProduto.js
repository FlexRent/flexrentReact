import './css/CardProduto.css'

export default function  CardProduto(){
    return(
        <section className='card-content'> 
            <div className='image-content p-1'> 
            <img src='./assets/home/barraca.jpg'/>
            </div>
            <div className='title-content d-flex justify-content-center align-items-center'> 
                <span className='text-center'> Barraca quechua confortavel</span>
            </div>
            <div className='price-content d-flex'>
                <div className='diaria d-flex justify-content-center align-items-center'>
                    <span> Diária </span>
                </div>

                <div className='price  d-flex justify-content-center align-items-center'> 
                        <span> R$ {"101,00"} </span>
                </div>
                    

            </div>
        </section>
    )
}