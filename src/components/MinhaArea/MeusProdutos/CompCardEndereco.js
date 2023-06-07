import './css/compCardEndereco.css';
import React, { useState } from 'react';


export default function CompCardEndereco(listaEnderecos) {
  const [corAlterada, setCorAlterada] = useState(false);
  const enderecos = listaEnderecos.enderecos
  const alterarCor = () => {
    setCorAlterada(!corAlterada);
  };

  const elementoPaiStyle = {
    backgroundColor: corAlterada ? '#4BBE8F' : '#F4F4F4',
    color: corAlterada ? '#F4F4F4' : '#4BBE8F'
  };
  console.log(enderecos);
  return (
    <>
      {
        enderecos.map(endereco => (
          <div className='d-flex align-items-center justify-content-center mt-4'>
            <div className='card-endereco d-flex align-items-center p-2' style={elementoPaiStyle}>
              <span> {endereco.address_title}</span>
              <button onClick={alterarCor} style={{ color: corAlterada ? '#F4F4F4' : '#4BBE8F' }}> Selecionar </button>
            </div>
          </div >
        ))
      }
    </>

  )
}