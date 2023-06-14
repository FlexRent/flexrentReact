import { useEffect, useState } from 'react'
import Carteira from '../Carteira/Carteira'
import MeusProdutos from '../MeusProdutos/MeusProdutos'
import ProdutosLocados from '../ProdutosLocados/ProdutosLocados';
import './css/headerButtons.css'

export default function HeaderButtons(cartoes) {
    // console.log(cartoes.cartoes)
    const [componenteAtivo, setComponenteAtivo] = useState(null);

    const escolha = (comp) => {
        setComponenteAtivo(comp);
    };

    let componenteSelecionado = '';

    switch (componenteAtivo) {
        case 'Carteira':
            componenteSelecionado = <Carteira cartoes={cartoes.cartoes} />;
            break
        case 'MeusProdutos':
            componenteSelecionado = <MeusProdutos />;
            break;
        case 'ProdutosLocados':
            componenteSelecionado = <ProdutosLocados />;
            break;
        default:
            componenteSelecionado = null;
    }

    useEffect(() => {
        escolha('Carteira')
    }, []);


    return (
        <section>
            <div className='buttons-menu'>
                <div className='btn-group d-flex justify-content-between button-group'>
                    <button onClick={() => escolha('MeusProdutos')} type="button" className="button-menu">Meus Produtos</button>
                    <button onClick={() => escolha('ProdutosLocados')} type="button" className="button-menu">Produtos Locados</button>
                    <button onClick={() => escolha('Carteira')} type="button" className="button-menu">Carteira</button>
                </div>
            </div>
            <div className='content'>
                {/* {console.log(cartoes)} */}
                {componenteSelecionado}
            </div>
        </section>
    )

}
