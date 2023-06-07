import React, { useState } from "react";
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  Navbar,
  Container,
  Modal
} from "react-bootstrap";
import "./css/carrinhoPagamento.css";
import Header from "../Header/Header";




const CarrinhoPagamento = () => {
  const [selectedCard, setSelectedCard] = useState("cadastrado");
  const [newCardInfo, setNewCardInfo] = useState("");
  const [exibirModal, setExibirModal] = useState(false);


  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const handleButtonClick = () => {
    setExibirModal(true);
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
      <Header backgroundColor={"#16697A"} />

      <Container className="mt-5">
        <Row className="justify-content-center align-items-center mt-5">
          <section className="mt-5"></section>
          <h2 className="text-center" style={{ color: '#489fb5' }}> Dados do Pedido Aluguel</h2>
          <section className="mt-5"></section>
          <Col id="borda3" className="mx-2" md={5}>
            <div className="d-flex">
              <Image src="./assets/home/barraca.jpg" alt="Produto" className="me-3" style={{ width: '200px', height: 'auto' }} />
              <div className="textocor1">
                <h3 className=" textoProduto1">Barraca Quechua confortável</h3>
                <p>Período de Diárias: 5 dias</p>
                <p>Valor da Diária: R$ 10,00</p>
                <p>Total Valor da Diária: R$ 50,00</p>
                <p>Valor do Seguro: R$ 25,00</p>
                <p>Valor do Caução: R$ 100,00</p>
                <p>Total: R$ 175,00</p>
              </div>
            </div>
          </Col>
          <Col id="borda2" md={3}>
            <Form onSubmit={handleSubmit} className="p-3 align-items-bottom">
              <Form.Group>
                <Form.Label>Forma de Pagamento:</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    label="Cartão Cadastrado"
                    name="paymentMethod"
                    value="cadastrado"
                    checked={selectedCard === "cadastrado"}
                    onChange={handleCardChange}
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    label="Novo Cartão"
                    name="paymentMethod"
                    value="novo"
                    checked={selectedCard === "novo"}
                    onChange={handleCardChange}
                  />
                </div>
              </Form.Group>
              {selectedCard === "cadastrado" && (
                <Form.Group>
                  <Form.Label>Cartões Cadastrados: Cartão Nubank</Form.Label>
                  {/* Renderizar os cartões cadastrados aqui */}
                </Form.Group>
              )}
              {selectedCard === "novo" && (
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
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  type="submit"
                  className="mx-auto px-5 mt-3"
                  style={{ backgroundColor: "#16697A" }}
                  onClick={handleButtonClick}
                >
                  Confirmar Pedido
                </Button>

                {exibirModal && (
                  <Modal>
                    <div>
                      <h3>Mensagem de Sucesso</h3>
                      <p>Seu texto de sucesso aqui.</p>
                    </div>
                  </Modal>

                )}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarrinhoPagamento;
