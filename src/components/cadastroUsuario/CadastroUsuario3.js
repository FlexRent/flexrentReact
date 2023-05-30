import { Image, Form, Button, Navbar, Container } from 'react-bootstrap';
import documentação from "../../images/documentação.png"
import '../../css/cadastrousuario/cadastroUsuario3.css'

export default function CadastroUsuario3() {
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
      <div className="d-flex flex-wrap justify-content-center align-items-center vh-100">
        <Image src={documentação} className="mx-5" style={{ height: '70vh' }} />
        <div className="flex-column bordaCadastroUsuario3">
          <div className="border rounded-top w-100" style={{ backgroundColor: '#4BBE8F' }}>
            <h4 className="ms-3 my-3 text-white">Documentação</h4>
          </div>
          <Form className="border rounded-bottom p-5">
            <Form.Group controlId="formBasicUserPhoto">
              <Form.Label>Selfie (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" />
            </Form.Group>
            <Form.Group controlId="formBasicDocumentFront">
              <Form.Label>Documento frente (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" />
            </Form.Group>
            <Form.Group controlId="formBasicDocumentBack">
              <Form.Label>Documento verso (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" />
            </Form.Group>
            <Form.Group controlId="formBasicResidenceProof">
              <Form.Label>Comprovante de residência (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" />
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
              <Button className="px-5 botaoarquivo">Finalizar</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}