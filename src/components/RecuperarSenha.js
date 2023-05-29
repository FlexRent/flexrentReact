import React, { useState } from 'react';
import { Form, Button, Navbar, Container, Image, Col, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import recuperarSenha from '../imagens/esqueciSenha.png';
import '../Css/recuperaSenha/recuperaSenha.css'

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailjs.send('default_service', 'template_id', {
        to_email: email,
        link: 'http://localhost:3000/redefinir-senha'
      }, 'user_id');

      console.log('E-mail enviado com sucesso!');
    } catch (error) {
      console.log('Erro ao enviar e-mail:', error);
    }
  };

  return (
    <>
      <Navbar style={{ backgroundColor: '#16697A' }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo.p"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className=" justify-content-center align-items-center vh-100">
          <Col md={7} className="d-flex justify-content-center">
            <Image src={recuperarSenha} className="mx-5" style={{ height: '60vh' }} fluid />
          </Col>
          <Col md={4} className=" ">
            <div className='bordaRecuperaSenha d-flex flex-column justify-content-center align-items-center'>
            <div className='' style={{ width: '100%', backgroundColor: '#4BBE8F' }}>
              <h4 className="ms-3 my-3 text-white">Recuperar senha</h4>
            </div>
            <Form onSubmit={handleSubmit} className=" p-4 " style={{ width: '100%' }}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
              </Form.Group>
              <div className="d-flex justify-content-end mt-5">
                <Button type="submit" className="px-3" style={{ backgroundColor: '#4BBE8F' }}>Continuar</Button>
              </div>
            </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecuperarSenha;
