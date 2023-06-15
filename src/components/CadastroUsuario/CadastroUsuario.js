

import { Image, Form, Button, Container, Col, Row } from 'react-bootstrap';

export default function CadastroUsuario({ next }) {
  const handleSubmit = (event) => {
    // console.log("entrou")
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get('password') === formData.get('confirmPassword')) {
      fetch("https://flexrent-fake-api2.vercel.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          email: formData.get('email'),
          gender: formData.get('gender'),
          phone: formData.get('phone'),
          birth_date: formData.get('birth_date'),
          cpf: formData.get('cpf'),
          password: formData.get('password')
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const userData = data;
          // salvando no localStorage do navegador
          localStorage.setItem("user", JSON.stringify(userData.user));
          localStorage.setItem("token", JSON.stringify(userData.token));
          next(2)
        });
    } else {
      alert("Senhas não são iguais")
    }
  }

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Image src="./assets/cadastroUsuario/dadosPessoais.png" className=" ms-5" style={{ height: '60vh' }} />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="border rounded-top" style={{ width: '80%', backgroundColor: '#4BBE8F' }} >
            <h4 className=" ms-3 my-3 text-white" >Dados pessoais</h4>
          </div>
          <Form onSubmit={handleSubmit} className="border rounded-bottom p-4" style={{ height: '50vh', width: '80%' }}>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control name="first_name" type="text" placeholder="Digite seu nome" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formSobrenome">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control name="last_name" type="text" placeholder="Digite seu sobrenome" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Digite seu email" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCPF ">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control name="cpf" type="number" placeholder="Digite seu cpf" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formGenero">
                  <Form.Label>Gênero</Form.Label>
                  <Form.Control name="gender" as="select" defaultValue="Selecione">
                    <option>Selecione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="O">Outro</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formTelefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control name="phone" type="tel" placeholder="Digite seu telefone" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formNascimento">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control name="birth_date" type="date" placeholder="Digite sua data de nascimento" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formSenha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Digite sua senha" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="formConfirmacaoSenha">
                  <Form.Label>Confirmação de Senha</Form.Label>
                  <Form.Control name="confirmPassword" type="password" placeholder="Confirme sua senha" />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-between my-5">
              <div className="ms-auto">
                <Button type="submit" className='px-5' style={{ backgroundColor: '#4BBE8F' }}>Continuar</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  )
}