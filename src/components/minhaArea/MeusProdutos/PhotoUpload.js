import { useState } from 'react';

const PhotoUpload = ({ onPhotoChange }) => {
    const [selectedPhotos, setSelectedPhotos] = useState([]);

    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 5); 
        //Cria URL para as imagens selecionadas
        const urls = files.map((file) => URL.createObjectURL(file)); 
        //atualiza estado com as URLs das fotos selecionada
        setSelectedPhotos(urls); 
         //Reseta o input
        e.target.value = null;
        //Chamaa funcao de retorno passando a urls das fotos selecionasa
        onPhotoChange(urls) 
    };

    return (
        <div>
            <label className="form-label mt-1" htmlFor="foto-produto">Imagens do produto</label>
            <input type="file" className="form-control form-control-md" id="foto-produto" accept="image/*" onChange={handlePhotoChange} multiple />
        </div>
    );

};
export default PhotoUpload;

