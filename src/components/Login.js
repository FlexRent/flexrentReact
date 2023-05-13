import { Image, Form, Button, Navbar, Container } from 'react-bootstrap';

export default function Login() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#f8f9fa' }}>
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
        <Image src="url_da_imagem" className=" mx-5" style={{ height: '70vh' }} />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="bg-light border rounded-top  w-100" >
            <h4 className=" ms-3 mt-3" >LOGIN</h4>
          </div>
          <Form className="border rounded-bottom p-4 " style={{ height: '50vh', width: '100%'  }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="mb-3" style={{ width: '400px' }} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Password" style={{ width: '400px' }} />
            </Form.Group>
            <div className="d-flex justify-content-between my-5">
              <Button variant="primary" className="ms-5">Cadastre-se</Button>
              <Button variant="secondary" className='me-5'>Login</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}