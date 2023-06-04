import './css/Categorias.css';


export default function Categorias(){
    return(
        <section className="categorias"> 
        <div> 
            <div className="titulo-cat d-flex justify-content-center align-items-end"> 
                <h3> Categorias</h3>
            </div>

            <div className="d-flex justify-content-center">
                <div className="cards-categoria-content  d-flex align-items-end justify-content-between flex-wrap">
                    
                    <div className="card-cat text-center p-2">
                        <div className="image-card-cat">
                            <img src="./camping.jpg" alt="camping"/>
                        </div>
                        <span> Camping </span>
                    </div>

                    <div className="card-cat text-center p-2">
                        <div className="image-card-cat">
                        <img src="./esporte.jpg" alt="esporte"/>
                        </div>
                        <span> Esportes </span>
                    </div>

                    <div className="card-cat text-center p-2">
                        <div className="image-card-cat">
                        <img src="./ferramentas.jpg" alt="ferramentas"/>
                        </div>
                        <span > Ferramentas </span>
                    </div>

                    <div className="card-cat text-center p-2">
                        <div className="image-card-cat">
                        <img src="./praia.jpg" alt="praia"/>
                        </div>
                        <span > Praia </span>
                    </div>

                </div>
            </div>
        </div>

        <div className="end-content-cat d-flex align-items-end justify-content-center"> 
          <button> Ver todos</button>
        </div>

</section>
    )
} 