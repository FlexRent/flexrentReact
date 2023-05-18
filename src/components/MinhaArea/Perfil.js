import '../../Css/Perfil.css'

export default function Carteira(){
    return(
        <section className='perfil row justify-content-center align-items-center circle-content pt-4'> 
            <div className='foto circle-mask '> 
                <img src='/vampeta.jpg'></img>
            </div>

            <div className='info-user pt-5'> 
                <spma className= "d-block text-center"> Vinicius Lima Santana</spma>
                <spma className= "d-block text-center p-2"> viniibl4ck@gmail.com</spma>
                <spma className= "d-block text-center"> 11 95677-9087</spma>   
            </div>

            <div className='d-flex justify-content-end'> 
                <button type="button"  data-bs-toggle="modal" data-bs-target="#meuModal"  >Editar</button>
            </div>
            
            <div className='linhaHorizontal'></div>

            <div class="modal fade" id="meuModal" tabindex="-1" aria-labelledby="meuModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="meuModalLabel">Título do Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>
                    <div class="modal-body">
                        <p>Conteúdo do Modal...</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Salvar</button>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    
    )

}