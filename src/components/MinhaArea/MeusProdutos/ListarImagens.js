import React from "react";

const ListarImagem = ({ images }) => {
    console.log(images)
    return (
        
        <div className="row">
           {images.map((url, index) => (
            <div className="col-md-4" key={index}>
                <img src={url} alt={`Image ${index}`} className="img-thumbnail" />
            </div>
           ))}
           
        </div>
       
    );
};

export default ListarImagem;
