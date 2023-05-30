import React, { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';


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
    <Row className="justify-content-center align-items-center">
      <Col md={6}>
        <Image src="caminho-da-imagem.jpg" alt="Produto" />
        <div>
          <h3>Nome do Produto</h3>
          <p>Período de Diárias: X dias</p>
          <p>Valor da Diária: R$X</p>
          <p>Valor do Seguro: R$X</p>
          <p>Valor do Caução: R$X</p>
          <p>Total: R$X</p>
        </div>
      </Col>
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Forma de Pagamento:</Form.Label>
            <Form.Check
              type="radio"
              label="Cartão Cadastrado"
              name="paymentMethod"
              value="cadastrado"
              checked={selectedCard === 'cadastrado'}
              onChange={handleCardChange}
            />
            <Form.Check
              type="radio"
              label="Novo Cartão"
              name="paymentMethod"
              value="novo"
              checked={selectedCard === 'novo'}
              onChange={handleCardChange}
            />
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
              <Form.Control
                type="text"
                placeholder="Informações do novo cartão"
                value={newCardInfo}
                onChange={handleNewCardChange}
              />
            </Form.Group>
          )}
          <Button type="submit">Alugar</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CarrinhoPagamento;
