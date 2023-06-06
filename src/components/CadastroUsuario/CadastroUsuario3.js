import { Image, Form, Button, Navbar, Container } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function CadastroUsuario3() {
  return (
<div className="container">
  <Header />
  <div className=" row d-flex justify-content-center align-items-center vh-100">
    <div className="col-8 col-md-6 d-flex justify-content-center">
      <div>
        <img src="../assets/documentacao.png" className="mx-5" style={{ height: "60vh" }} />
      </div>
    </div>
    <div className="col-11 col-md-6 d-flex justify-content-center align-items-center">
  <div style={{ width: '80%' }}>
    <div className="border rounded-top" style={{ backgroundColor: "#4BBE8F" }}>
      <h4 className="ms-3 my-3 text-white">Documentação</h4>
    </div>
    <div className="d-flex flex-column align-items-center" style={{ width: '100%', minHeight: '0' }}>
      <Form className="border rounded-bottom p-4 align-items-center" style={{ height: "45vh", width: "100%" }}>
              <Form.Group controlId="formBasicUserPhoto">
                <Form.Label>Foto do usuário (jpg, png ou pdf)</Form.Label>
                <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" style={{ width: "90%" }} />
              </Form.Group>
              <Form.Group controlId="formBasicDocumentFront">
                <Form.Label>Documento frente (jpg, png ou pdf)</Form.Label>
                <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" style={{ width: "90%" }} />
              </Form.Group>
              <Form.Group controlId="formBasicDocumentBack">
                <Form.Label>Documento verso (jpg, png ou pdf)</Form.Label>
                <Form.Control type="file" accept=".jpg,.png,.pdf" className="mb-3" style={{ width: "90%" }} />
              </Form.Group>
              <Form.Group controlId="formBasicResidenceProof">
                <Form.Label>Comprovante de residência (jpg, png ou pdf)</Form.Label>
                <Form.Control type="file" accept=".jpg,.png,.pdf" style={{ width: "90%" }} />
              </Form.Group>
              <div className="d-flex justify-content-between my-4">
                <Button variant="primary" className="mx-auto px-5 " style={{ backgroundColor: "#4BBE8F", border: 'none' }}>
                  Finalizar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      
    </div>

   <Footer/>
  </div>
  
  );
}
