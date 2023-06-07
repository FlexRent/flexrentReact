import { Image, Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CadastroUsuario3({ back }) {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Image
          src="./assets/cadastroUsuario/documentacao.png"
          className="mx-5"
          style={{ height: "70vh" }}
        />
        <div className="flex-column">
          <div
            className="border rounded-top w-100"
            style={{ backgroundColor: "#4BBE8F" }}
          >
            <h4 className="ms-3 my-3 text-white">Documentação</h4>
          </div>
          <Form
            className="border rounded-bottom p-4"
            style={{ height: "65vh", width: "100%" }}
          >
            <Form.Group controlId="formBasicUserPhoto">
              <Form.Label>Foto do usuário (jpg, png ou pdf)</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg,.png,.pdf"
                className="mb-3"
                style={{ width: "400px" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDocumentFront">
              <Form.Label>Documento frente (jpg, png ou pdf)</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg,.png,.pdf"
                className="mb-3"
                style={{ width: "400px" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDocumentBack">
              <Form.Label>Documento verso (jpg, png ou pdf)</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg,.png,.pdf"
                className="mb-3"
                style={{ width: "400px" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicResidenceProof">
              <Form.Label>
                Comprovante de residência (jpg, png ou pdf)
              </Form.Label>
              <Form.Control
                type="file"
                accept=".jpg,.png,.pdf"
                style={{ width: "400px" }}
              />
            </Form.Group>
            <Row>
              {/* <Col>
                <div className="d-flex justify-content-between my-5">
                  <div className="ms-auto">
                    <Button onClick={() => back(2)} className='px-5' style={{ backgroundColor: '#4BBE8F' }}>Voltar</Button>
                  </div>
                </div>
              </Col> */}
              <Col>
                <div className="d-flex justify-content-between my-5">
                  <Link to={"/"} className="text-reset text-decoration-none">
                    <Button
                      variant="primary"
                      className="mx-auto px-5"
                      style={{ backgroundColor: "#4BBE8F" }}
                    >
                      Finalizar
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>

          </Form>
        </div>
      </div>
    </Container>
  );
}
