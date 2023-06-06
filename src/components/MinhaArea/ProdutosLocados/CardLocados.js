import './css/cardLocados.css'

export default function CardLocados(){
    return(


<div className="card-locado-content d-flex">
  <div className='image-card-content'>
    <img src='./assets/home/barraca.jpg' alt='Imagem da barraca' />
  </div>

<div className='row'>
    <div className='title-locado-content'>
        <span>Barraca Quechua</span>
    </div>

    <div className='content-locado-text d-flex align-items-top justify-content-between'>
        <div className='sub-title-locado'> 
            <span> 
                Status:  
            </span> 
            <span className='sub-content-text mx-2'> 
                {"Ativo"}
            </span>
        </div>

        <div className='sub-title-locado'> 
            <span> 
                Diárias:  
            </span> 
            <span className='sub-content-text mx-2'> 
                 {"5"}
            </span>
        </div>

        <div className='sub-title-locado'> 
            <span> 
                Valor:  
            </span> 
            <span className='sub-content-text mx-2'> 
                R$ {"275,00"}
            </span>
        </div>
    
    </div>
</div>

<div className='buttons-locado-content'>

    <div className='btn-checks d-flex justify-content-center align-items-end'>
        <button> Check-in</button>
    </div>

    <div className='button-detalhe-content d-flex justify-content-center align-items-end'>
            <button> Detalhes</button>
    </div>
    
</div>

</div>
    )
}