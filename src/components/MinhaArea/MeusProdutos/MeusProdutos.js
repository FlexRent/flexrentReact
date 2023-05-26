import { useState } from "react"
import FormsProduto1 from "./FormsProduto1"
import FormsProduto2 from "./FormsProduto2";
import ListarMeusProdutos from "./ListarMeusProdutos";
import './css/meusProdutos.css'



export default function MeusProdutos() {

    const [novoProduto, setNovoProduto] = useState(false);


    return (

        novoProduto ?
            <>
                <ListarMeusProdutos />
                {/* <button onClick={setNovoProduto}> Novo </button> */}
            </>
            :
            <>
                <FormsProduto2/>
            <div className="d-flex justify-content-center mt-3"> 
                <div className='btn-bottom d-flex justify-content-between'> 
                    <button className="btn-ant"> Voltar </button>
                    <button className="btn-prox"> Próximo</button>
                </div> 
            </div>
                
            </>
           
            // <FormsProduto1 />

    )

}