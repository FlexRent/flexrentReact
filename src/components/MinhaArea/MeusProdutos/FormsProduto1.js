import './css/formsProduto1.css'
import ReactInputMask from 'react-input-mask';
import ListarImagens from './ListarImagens';
import PhotoUpload from './PhotoUpload';
import { useState } from 'react';



export default function FormsProduto1( {back, next} ) {
    const [imagensSelecionadas, setImagensSelecionadas] = useState([]);
    const handlePhotoChange = (imagens) => {
        setImagensSelecionadas(imagens)
    }

    return (
        <section className="forms1 row d-flex justify-content-center align-items-center ">
            <div className="header-title">
                <h3> Detalhes do produto </h3>
            </div>

            <div className='forms-content forms row'>

                <div className="col-12 col-md-6 ">
                    <label for="nome-produto" className="form-label">Nome</label>
                    <input type="text" className="form-control form-control-md custom-border" id="nome-produto" />

                    <label for="marca-produto" className="form-label">Marca</label>
                    <input type="text" className="form-control form-control-md custom-border" id="marca-produto" />

                    <label for="categoria-produto" className="form-label">Categoria</label>
                    <select className="form-select form-select-md custom-border" aria-label="Default select example" id="categoria-produto">
                        <option selected>Selecione a categoria</option>
                        <option value="1">Praia</option>
                        <option value="2">Camping</option>
                        <option value="3">Esportes</option>
                        <option value="3">Ferramentas</option>
                    </select>


                    <PhotoUpload onPhotoChange={handlePhotoChange} />

                </div>

                <div className="col-12 col-md-6">
                    <label for="descricao-produto" className="form-label">Descrição</label>
                    <textarea className="form-control form-control-md custom-border" id="edescricao-produto" rows="4"></textarea>

                    <label for="preco-produto" className="form-label">Valor do produto</label>
                    <ReactInputMask className="form-control form-control-md custom-border" id="preco-produto" mask={"R$: 9999,00"} />

                    <label for="preco-diaria" className="form-label">Valor do aluguel (Diária)</label>
                    <ReactInputMask className="form-control form-control-md custom-border" id="preco-diaria" mask={"R$: 999"} />

                </div>

                <div className='list-img'> 
                    <ListarImagens images={imagensSelecionadas} />
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3"> 
                <div className='btn-bottom d-flex justify-content-between'> 
                    <button className="btn-ant" onClick={back}> Cancelar </button>
                    <button className="btn-prox" onClick={next} > Próximo</button>
                </div> 
            </div>
        </section>
    )
    // }
}
