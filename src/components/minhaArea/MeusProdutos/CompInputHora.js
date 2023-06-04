import React from "react"

export default function CompInputHora() {
    return ( 
        <div className='row d-flex justify-content-between'>
        <div className="col-6 col-md-5">
            <label htmlFor="apartir" className="form-label">Apartir</label>
            <input type="time" min="12:00" max="18:00" className="form-control form-control-md custom-border" id="horario-inicio" />
        </div>
        <div className="col-6 col-md-5">
            <label htmlFor="ate" className="form-label">Ate</label>
            <input type="time" min="12:00" max="18:00" className="form-control form-control-md custom-border" id="horaio-final" />
        </div>
    </div>
    )
}