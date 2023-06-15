import './css/cartaoInfo.css'

export default function CartaoInfo(cartoes) {
    const cards = cartoes.cartoes
    return cards ? (
        cards.map(cartao => (
            <div className='row flexrent-card justify-content-center align-items-center'>
                <div className='col-8'>
                    <span> {cartao.card_title}</span>
                </div>
                <div className='col-2'>
                    <button>
                        <img src='./assets/minhaArea/editar.png' alt="editar" />
                    </button>
                </div>
                <div className='col-2'>
                    <button>
                        <img src='./assets/minhaArea/lixeira.png' alt="excluir" />
                    </button>
                </div>
            </div>
        ))
    ) : (
        <p className="d-flex align-items-center justify-content-center h2 mt-5 text-center">Nenhum cartão cadastrado</p>
        )
}
