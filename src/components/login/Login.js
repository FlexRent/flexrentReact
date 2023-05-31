import { Image, Form, Button, Container, Row, Col, Navbar } from "react-bootstrap";
import login from "../../imagens/login.png";
import "./css/login.css";
import Header from "../Header/Header";

export default function Login() {
  return (
    <>
      <Header backgroundColor={"#16697A"} />
      <Container>
        <Row>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={login}
                className="w-100"
                style={{ minHeight: "50vh" }}
              />
            </Col>
            <Col lg={6} className="bordaformlogin">
              <div className="bordaformlogin d-flex flex-column justify-content-center align-items-center">
                <div className="topoFormLogin p-1">
                  <h4 className="ms-3 mt-3">Login</h4>
                </div>
                <Form className="fullForm p-5">
                  <Form.Group
                    controlId="formBasicEmail"
                    className="textoformlogin"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="mb-3 custom-border"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicPassword"
                    className="textoformlogin"
                  >
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="custom-border"
                    />
                  </Form.Group>
                  <h6 className="mt-2 esquecisenha">Esqueceu sua senha</h6>

                  <Row className="mt-5">
                    <Col>
                      <Button className="botaocadastrese px-1">
                        Cadastre-se
                      </Button>
                    </Col>
                    <Col>
                      <Button className="botaologin px-2">Login</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
}
