import {
  Image,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  Container,
} from "react-bootstrap";

export default function DetalhesLocacao() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#16697A" }}>
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

      <Row className="justify-content-center align-items-center vh-100">
        <Col md={5}>
          <div className="d-flex">
            <Image src="caminho-da-imagem.jpg" alt="Produto" className="me-3" />
            <div>
              <h3>Nome do Produto</h3>
              <p>Período de Diárias: X dias</p>
              <p>Valor da Diária: R$X</p>
              <p>Valor do Seguro: R$X</p>
              <p>Valor do Caução: R$X</p>
              <p>Total: R$X</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
