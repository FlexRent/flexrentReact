import './css/checkInComponente.css'

export default function CheckInComponente(){
    return( 
        <div className='content-checkin -1'> 
            <div className='check-title d-flex justify-content-center align-items-center'>
                <span> Check-in Barraca Quechua </span>
            </div>

            <div className='row '>
                <div className='observacao-content col-8'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Observações</label>
                        <textarea className="form-control custom-border" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                </div>

                <div className='col-4 d-flex align-items-center justify-content-center'> 
                    <div className='buttons-content-check'> 
                        <div className='row buttons-check'> 
                            <button className='my-2 btn-cancelar'> Cancelar locação</button>
                            <button className='my-2 btn-finalizar' > Finalizar </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}