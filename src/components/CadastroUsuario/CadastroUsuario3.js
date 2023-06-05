import { Image, Form, Button, Navbar, Container } from 'react-bootstrap';

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
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Image src="url_da_imagem" className="mx-5" style={{ height: '70vh' }} />
        <div className="flex-column">
          <div className="border rounded-top w-100" style={{ backgroundColor: '#4BBE8F' }}>
            <h4 className="ms-3 my-3 text-white">Documentação</h4>
          </div>
          <Form className="border rounded-bottom p-4" style={{ height: '65vh', width: '100%' }}>
            <Form.Group controlId="formBasicUserPhoto">
              <Form.Label>Foto do usuário (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" style={{ width: '400px' }} />
            </Form.Group>
            <Form.Group controlId="formBasicDocumentFront">
              <Form.Label>Documento frente (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" style={{ width: '400px' }} />
            </Form.Group>
            <Form.Group controlId="formBasicDocumentBack">
              <Form.Label>Documento verso (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" style={{ width: '400px' }} />
            </Form.Group>
            <Form.Group controlId="formBasicResidenceProof">
              <Form.Label>Comprovante de residência (jpg, png ou pdf)</Form.Label>
              <Form.Control type="file" accept=".jpg,.png,.pdf" style={{ width: '400px' }} />
            </Form.Group>
            <div className="d-flex justify-content-between my-5">
              <Button variant="primary" className="mx-auto px-5" style={{ backgroundColor: '#4BBE8F' }}>Finalizar</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
