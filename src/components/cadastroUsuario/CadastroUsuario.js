import { Image, Form, Button, Navbar, Container, Col, Row } from 'react-bootstrap';
import dadosPessoais from "../../images/dadosPessoais.png"
import '../../css/cadastrousuario/cadastroUsuario.css'


export default function CadastroUsuario() {
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
        <Row>
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center align-items-center vh-100">
              <Image src={dadosPessoais} className="ms-5" style={{ height: '60vh' }} />
            </div>
          </Col>
          <Col xs={12} md={6} className=' d-flex justify-content-center align-items-center vh-100'>
            <div className="bordaCadastroUsuario d-flex flex-column justify-content-center align-items-center">
              <div className="" style={{ width: '100%', backgroundColor: '#4BBE8F' }}>
                <h4 className="ms-3 my-3 text-white">Dados pessoais</h4>
              </div>
              <Form className=" p-4 align-items-center" style={{ width: '100%' }}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formNome">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" placeholder="Digite seu nome" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formSobrenome">
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control type="text" placeholder="Digite seu sobrenome" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Digite seu email" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formGenero">
                      <Form.Label>Gênero</Form.Label>
                      <Form.Control as="select" defaultValue="Selecione">
                        <option>Selecione</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Não-binário</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formTelefone">
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control type="tel" placeholder="Digite seu telefone" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formNascimento">
                      <Form.Label>Data de Nascimento</Form.Label>
                      <Form.Control type="date" placeholder="Digite sua data de nascimento" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formSenha">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password" placeholder="Digite sua senha" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formConfirmacaoSenha">
                      <Form.Label>Confirmação de Senha</Form.Label>
                      <Form.Control type="password" placeholder="Confirme sua senha" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-5">
                  <Button type="submit" className="px-5" style={{ backgroundColor: '#4BBE8F' }}>Continuar</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}