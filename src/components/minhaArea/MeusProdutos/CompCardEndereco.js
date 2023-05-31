import './css/compCardEndereco.css';
import React, { useState } from 'react';


export default function CompCardEndereco() {
    const [corAlterada, setCorAlterada] = useState(false);

    const alterarCor = () => {
        setCorAlterada(!corAlterada);
      };

    const elementoPaiStyle = {
        backgroundColor: corAlterada ? '#4BBE8F' : '#F4F4F4',
        color: corAlterada ? '#F4F4F4' : '#4BBE8F'
      };

    return (
    
    <div className='d-flex align-items-center justify-content-center mt-4'>
        <div className='card-endereco d-flex align-items-center p-2' style={elementoPaiStyle}>
            <span> Endereco Principal</span>
            <button onClick={alterarCor}> Selecionar </button>
        </div>
    </div>

    )
}