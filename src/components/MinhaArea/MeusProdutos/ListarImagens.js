import React from "react";
import './css/listarImagens.css';

const ListarImagem = ({ images }) => {

    return (
        
        <div className="img-preview d-flex ">
           {images.map((url, index) => (
            <div key={index}>
                <img src={url} alt={`Image ${index}`} className="img-thumbnail mx-3 border-bottom" />
            </div>
           ))}
           
        </div>
       
    );
};

export default ListarImagem;
