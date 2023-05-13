import '../../Css/HeaderButtons.css'

export default function HeaderButtons(){ 
    return (
        <section>
            <header className='buttons-menu'> 
                <div className='btn-group d-flex justify-content-between button-group'> 
                    <button type="button" className="button-menu">Meus Produtos</button>
                    <button type="button" className="button-menu">Produtos Locados</button>
                    <button type="button" className="button-menu">Carteira</button>
                </div>
            </header>
            <div className='content'> 

            </div>
        </section>

    )

}
