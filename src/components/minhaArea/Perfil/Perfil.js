import './css/perfil.css'

export default function Carteira(){
    return(
        <section className='perfil row justify-content-center align-items-center circle-content pt-4'> 
            <div className='foto circle-mask '> 
                <img src='../../../assets/vampeta.jpg' alt='perfil'></img>
            </div>

            <div className='info-user pt-5'> 
                <span className= "d-block text-center"> Vinicius Lima Santana</span>
                <span className= "d-block text-center p-2"> viniibl4ck@gmail.com</span>
                <span className= "d-block text-center"> 11 95677-9087</span>   
            </div>

            <div className='d-flex justify-content-end'> 
                <button type="button"  data-bs-toggle="modal" data-bs-target="#meuModal"  >Editar</button>
            </div>
            
            <div className='linhaHorizontal my-4'></div>

            <div className='avaliacao px-4'> 
                <span> Avaliações </span>

                <div className='content-estrela d-flex justify-content-center align-items-center py-4'> 
                    <div className='estrela-box d-flex align-items-center '> 
                   
                        <div className='estrela-img d-flex justify-content-center align-items-center'> 
                            <img src='./star.png' alt='avaliacao'></img>
                        </div>
                        <span className='avaliacao-res px-3'>4.87</span>
                    </div>
                </div>
  

            </div>


            <div className="modal fade" id="meuModal" tabIndex="-1" aria-labelledby="meuModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="meuModalLabel">Título do Modal</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>
                    <div className="modal-body">
                        <p>Conteúdo do Modal...</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    
    )

}