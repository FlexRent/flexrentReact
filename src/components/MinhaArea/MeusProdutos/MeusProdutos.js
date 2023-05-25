import { useState } from "react"
import FormsProduto1 from "./FormsProduto1"

export default function MeusProdutos(){

    const [novoProduto, setNovoProduto] = useState(false);


    return(
        !novoProduto ?
        <> 
        <button onClick={setNovoProduto}> Novo </button>
        </>
        :
        <FormsProduto1/>
    ) 

}