import { useState } from "react";
import FormsProduto1 from "./FormsProduto1";
import FormsProduto2 from "./FormsProduto2";
import ListarMeusProdutos from "./ListarMeusProdutos";
import './css/meusProdutos.css';

// import FormsProduto2 from "./FormsProduto2";

export default function MeusProdutos() {

    const [novoProduto, setNovoProduto] = useState(true);
    const [primeiroForm, setPrimeiroForm] = useState(true);
    
    const novoProdutoTela = () => {
        setNovoProduto(!novoProduto);
      };

    const trocarForm = () => {
        setPrimeiroForm(!primeiroForm);
      };


    return (
        novoProduto ?
            <div>
                <ListarMeusProdutos onButtonClick={novoProdutoTela}/>
            </div>            
            :
            primeiroForm ?
                <div> 
                    <FormsProduto1 back={novoProdutoTela} next={trocarForm} />
                </div>
                :
                <div>
                    <FormsProduto2 backForm={trocarForm}/>
                </div>
                
    )

}
