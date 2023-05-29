import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import '../Css/detalhes/detalhesProduto.css';

const DetalhesProduto = () => {
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productDescription, setProductDescription] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    // Lógica para buscar os dados do produto no banco de dados
    // Atualize os estados com os dados do produto recuperados
    const imagesFromDatabase = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const descriptionFromDatabase = 'Descrição do produto';
    const locationFromDatabase = 'Localização do produto';
    const rentalPriceFromDatabase = 'R$ 100,00';

    setProductImages(imagesFromDatabase);
    setProductDescription(descriptionFromDatabase);
    setProductLocation(locationFromDatabase);
    setRentalPrice(rentalPriceFromDatabase);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleRentButtonClick = () => {
    // Lógica para manipular o clique no botão de alugar
  };

  const handleRentalPeriodChange = (event) => {
    setRentalPeriod(event.target.value);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: '#16697A' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo.png" width="30" height="30" className="d-inline-block align-top" alt="Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className="vh-100 align-items-center justify-content-center">
        <Row className="text-center align-items-end" style={{ height: '30%' }}>
          <h4>Produto</h4>
        </Row>
        <div className="row justify-content-center">
          <Col md={6} className="custom-image-column d-flex justify-content-end my-2">
            <div className="bordaDetalhesProduto p-3 d-flex justify-content-center align-items-center" style={{ width: '460px', height: '420px' }}>
              {productImages.length > 0 && (
                <>
                  <img src={productImages[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} className="img-fluid" />
                  <button className="carousel-control-prev" onClick={handlePreviousImage}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" onClick={handleNextImage}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                  </button>
                </>
              )}
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-start my-2">
            <div className="bordaDetalhesProduto1 p-3" style={{ width: '460px', height: '420px' }}>
              <p>
                <h6>Descrição</h6> {productDescription}<br />
                <h5 className="mb-3">Lorem ipsum, lorem ipsum, lorem ipsum, kkkkkkkkkkkkkkkkkkk:</h5>
                <h6>Localização:</h6> {productLocation}<br />
                <h5 className="mb-3">Santo Amaro</h5>
                <div className="d-flex align-items-center">
                  <h6 className="me-2">Retirada:</h6>
                  <input type="date" className="form-control me-2" />
                  <h6 className="me-2">Devolução:</h6>
                  <input type="date" className="form-control" />
                </div>
                <br />
                <div className="hr1 mb-3"></div>
                <h6 className="">Total:</h6> {rentalPrice}<br />
              </p>
              <div className="d-flex justify-content-end">
                <Button onClick={handleRentButtonClick} className="w-50 botaodetalheproduto">
                  Alugar
                </Button>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default DetalhesProduto;
