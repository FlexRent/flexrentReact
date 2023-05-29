import React, { useState } from 'react';
import { Row, Col, Image, Form, Button, Navbar, Container } from 'react-bootstrap';
import '../../Css/carrinho/CarrinhoPagamento.css'


const CarrinhoPagamento = () => {
  const [selectedCard, setSelectedCard] = useState('cadastrado');
  const [newCardInfo, setNewCardInfo] = useState('');

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const handleNewCardChange = (event) => {
    setNewCardInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para finalizar o pagamento
  };

  return (
<>
    <Navbar style={{ backgroundColor: '#16697A' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
    <Row className="justify-content-center align-items-center vh-100">

      <Col id='borda3' className='p-4 mx-1'  md={5}>
        <div className="d-flex">
          <Image src="" alt="Produto" className="me-3" />
          <div className='textocor1'>
            <h3 className=' textoProduto1'>Nome do Produto</h3>
            <p>Período de Diárias: X dias</p>
            <p>Valor da Diária: R$X</p>
            <p>Valor do Seguro: R$X</p>
            <p>Valor do Caução: R$X</p>
            <p>Total: R$X</p>
          </div>
        </div>
      </Col>
      <Col id='borda2' md={3}>
  <Form onSubmit={handleSubmit} className="p-3 align-items-bottom">
    <Form.Group>
      <Form.Label>Forma de Pagamento:</Form.Label>
      <div className="d-flex">
        <Form.Check
          type="radio"
          label="Cartão Cadastrado"
          name="paymentMethod"
          value="cadastrado"
          checked={selectedCard === 'cadastrado'}
          onChange={handleCardChange}
          className="me-3 custom-label"
        />
        <Form.Check
          type="radio"
          label="Novo Cartão"
          name="paymentMethod"
          value="novo"
          checked={selectedCard === 'novo'}
          onChange={handleCardChange}
          className="custom-label"
        />
      </div>
    </Form.Group>
    {selectedCard === 'cadastrado' && (
      <Form.Group>
        <Form.Label>Cartões Cadastrados:</Form.Label>
        {/* Renderizar os cartões cadastrados aqui */}
      </Form.Group>
    )}
    {selectedCard === 'novo' && (
      <Form.Group>
        <Form.Label>Novo Cartão:</Form.Label>
        <Form.Control className='mb-1'
          type="text"
          placeholder="Numero do cartão"
          value={newCardInfo}
          onChange={handleNewCardChange}
        />
        <Form.Control className='mb-1'
          type="text"
          placeholder="Nome impresso"
          value={newCardInfo}
          onChange={handleNewCardChange}
        />
        <Row>
          <Col>
        <Form.Control
          type="text"
          placeholder="validade"
          value={newCardInfo}
          onChange={handleNewCardChange}
        />
        </Col>
        <Col>
        <Form.Control
          type="text"
          placeholder="CVV"
          value={newCardInfo}
          onChange={handleNewCardChange}
        />
        </Col>
        </Row>
      </Form.Group>
    )}
    <div className="botaocarrinhopagamento ">
    <Button type="submit" className="botaocarrinho">
      Alugar
    </Button>
    </div>
  </Form>
</Col>

     
    </Row>
    </Container>
    </>
  );
};

export default CarrinhoPagamento;
