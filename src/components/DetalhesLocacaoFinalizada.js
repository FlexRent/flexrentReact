import { Image, Row, Col, Form, Button, Navbar, Container } from 'react-bootstrap';
import '../Css/detalhes/detalhesLocacao.css'

export default function DetalhesLocacaoFinalizada() {
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

      <Row className="justify-content-center align-items-center vh-100">
        <Col md={4} className='bordaDetalheLocacao mx-1 mb-3'>
          <div className="d-flex justify-content-center align-items-center">
            <Image src="data:image/jpeg;base64,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" alt="Produto" className="me-3" />
            <div className='mx-5'>
              <h3>Nome do Produto</h3>
              <h5>Período de Diárias: X dias</h5>
              <h5>Valor da Diária: R$X</h5>
              <h5>Valor do Seguro: R$X</h5>
              <h5>Valor do Caução: R$X</h5>
              <h5>Total: R$X</h5>
            </div>
          </div>
        </Col>

        <Col md={3} className='backgroundlocacao p-2 mb-3'>
          <div className='px-3'>
            <h4 className='pb-4 text-center text-white'>Informações</h4>


            <Row >
              <Col xs={12} md={6} className='pb-4'>
                <p className=''>Locatário:</p>
              </Col>
              <Col xs={12} md={6}>
                <p>Telefone:</p>
              </Col>
            </Row>
            <Row>
              <Col className='pb-4'>
                <p>Endereço de Retirada:</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6} className='pb-4'>
                <p>Horário de Retirada:</p>
              </Col>
              <Col xs={6} md={6}>
                <p>Dias Disponíveis:</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4} className='pb-4'>
                <p>Retirada:</p>
              </Col>
              <Col xs={6} md={4}>
                <p>Devolução:</p>
              </Col>
              <Col xs={6} md={3}>
                <p>Status:</p>
              </Col>
            </Row>

            <Row>
              <Col className='pb-4'>
                <p>Observações Check-in: </p>
              </Col>
            </Row>
             
           
          </div>
        </Col>
      </Row>
    </>
  );
}
