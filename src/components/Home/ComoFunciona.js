import './css/ComoFunciona.css'


export default function ComoFunciona(){
    return(
        <section className="como-funciona pt-5">
        <div className="row">
            <div className="como-funciona-content col-12 col-md-8 px-0">

                <div className="title-section d-flex align-items-center justify-content-end">
                    <h3>
                        Não se prive, vá em frente e experimente
                    </h3>
                </div>
                <div className="subtitle-section  d-flex align-items-center justify-content-center" >
                    <h3>
                        Como funciona
                    </h3>
                </div>

                <div className=" cards-content d-flex align-items-center justify-content-center">
                    <div className="row content-como-funciona d-flex justify-content-center align">


                        <div className="conteudo d-flex justify-content-strat row">
                            <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                <div className="card-como-funciona d-flex align-items-center">
                                    <span className="card-num">1.</span>
                                    <span className="card-txt" >Cadastre-se na plataforma. </span>
                                </div>
                            </div>
                        </div>

                        <div className=" conteudo d-flex justify-content-end row">
                            <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                <div className="card-como-funciona d-flex align-items-center">
                                    <span className="card-num ">2.</span>
                                    <span className="card-txt"> Alugue o item que precisar, ou disponibilize algum na plataforma. </span>
                                </div>
                            </div>
                        </div>

                        <div className="conteudo d-flex justify-content-strat row">
                            <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                <div className="card-como-funciona d-flex align-items-center">
                                    <span className="card-num ">3.</span>
                                    <span className="card-txt" >Marque um lugar para encontrar o proprietário, e retirar o produto. </span>
                                </div>
                            </div>
                        </div>

                        <div className=" conteudo d-flex justify-content-end row">
                            <div className="col-12 col-xl-6 d-flex align-items-center justify-content-center">
                                <div className="card-como-funciona d-flex align-items-center">
                                    <span className="card-num ">4.</span>
                                    <span className="card-txt" >Utilize e pague apenas pelo periodo, que sera nescessário. </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="content-end d-flex justify-content-center align-items-center">
                    <div>
                        <button>Começar</button>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4">
                <img src="../assets/surf.jpg" alt="surf-woman"/>
            </div>
        </div>
    </section>
    )
}