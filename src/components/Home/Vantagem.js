import './css/Vantagem.css'

export default function Vantagem(){


return (
    <section className="vantagem pb-5">
        <div className="row">
            <div className="titulo col-12 col-md-4 d-flex justify-content-end align-items-end">
                <h3>Vantagens em ser Rent<spa className="ponto">.</spa> </h3>
            </div>
            <div className="icons col-12 col-md-8">
                <div className="titles d-flex justify-content-start align-items-center mx-5">
                    <span> Para quem for alugar </span>
                </div>
                <div className=" cards row d-flex justify-content-center align-items-center">

                    <div className="cards-list d-flex justify-content-between align-items-center">

                        <div className="card-personalizado">
                            <div className="card-icon d-flex align-items-center justify-content-center">
                                <img src="../assets/economia.png" alt=""/>
                            </div>
                            <div className="card-texto text-center">
                                <span> Ecônomia</span>
                            </div>
                        </div>

                        <div className="card-personalizado">
                            <div className="card-icon d-flex align-items-center justify-content-center">
                                <img src="../assets/earth.png"  alt="" />
                            </div>
                            <div className="card-texto text-center">
                                <span> Reduz o consumo excessivo</span>
                            </div>
                        </div>

                        <div className="card-personalizado">
                            <div className="card-icon d-flex align-items-center justify-content-center">
                                <img src="../assets/flexibilidade.png" alt=""/>
                            </div>
                            <div className="card-texto text-center">
                                <span> Flexibilidade</span>
                            </div>
                        </div>

                    </div>

                    <div className="cards-list d-flex justify-content-between align-items-center">

                        <div className="card-personalizado">
                            <div className="card-icon d-flex align-items-center justify-content-center">
                                <img src="../assets/mala.png" alt=""/>
                            </div>
                            <div className="card-texto text-center">
                                <span> Oportuinidade de negócios</span>
                            </div>
                        </div>

                        <div className="card-personalizado">
                            <div className="card-icon d-flex align-items-center justify-content-center">
                                <img src="../assets/cashBack.png" alt=""/>
                            </div>
                            <div className="card-texto text-center">
                                <span>Retorno do investimento</span>
                            </div>
                        </div>

                        <div className="card-personalizado">
                            <div className="card-icon d-flex align-items-center justify-content-center">
                                <img src="../assets/rendaextra.png" alt=""/>
                            </div>
                            <div className="card-texto text-center">
                                <span> Renda extra </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="titles d-flex justify-content-end align-items-center mx-5">
                    <span> Para quem for locar </span>
                </div>

            </div>
    </div>
</section>
)
}