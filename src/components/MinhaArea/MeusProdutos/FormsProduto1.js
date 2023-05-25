import './css/formsProduto1.css'
import ReactInputMask from 'react-input-mask';
import ListarImagens from './ListarImagens';
import PhotoUpload from './PhotoUpload';
import { useState } from 'react';



export default function FormsProduto1() {
    const [imagensSelecionadas, setImagensSelecionadas] = useState([]);
    const handlePhotoChange = (imagens) => {
        setImagensSelecionadas(imagens)
        console.log(imagens);
    }

    return (
        <section className="forms1 row d-flex justify-content-center align-items-center ">
            <div className="header-title">
                <h3> Detalhes do produto </h3>
            </div>

            <div className='forms-content forms row'>

                <div class="col-12 col-md-6 ">
                    <label for="nome-produto" class="form-label">Nome</label>
                    <input type="text" class="form-control form-control-md custom-border" id="nome-produto" />

                    <label for="marca-produto" class="form-label">Marca</label>
                    <input type="text" class="form-control form-control-md custom-border" id="marca-produto" />

                    <label for="categoria-produto" class="form-label">Categoria</label>
                    <select class="form-select form-select-md custom-border" aria-label="Default select example" id="categoria-produto">
                        <option selected>Selecione a categoria</option>
                        <option value="1">Praia</option>
                        <option value="2">Camping</option>
                        <option value="3">Esportes</option>
                        <option value="3">Ferramentas</option>
                    </select>


                    <PhotoUpload onPhotoChange={handlePhotoChange} />

                </div>

                <div class="col-12 col-md-6">
                    <label for="descricao-produto" class="form-label">Descrição</label>
                    <textarea class="form-control form-control-md custom-border" id="edescricao-produto" rows="4"></textarea>

                    <label for="preco-produto" class="form-label">Valor do produto</label>
                    <ReactInputMask class="form-control form-control-md custom-border" id="preco-produto" mask={"R$: 9999,00"} />

                    <label for="preco-diaria" class="form-label">Valor do aluguel (Diária)</label>
                    <ReactInputMask class="form-control form-control-md custom-border" id="preco-diaria" mask={"R$: 999"} />

                </div>

            </div>

            <div className='row'> 
            <ListarImagens images={imagensSelecionadas} />
            </div>

        </section>
    )
    // }
}
