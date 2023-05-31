import React, { useState } from "react";
import { Form, Button, Navbar, Container, Image } from "react-bootstrap";
import emailjs from "emailjs-com";
import Header from "../header/Header";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailjs.send(
        "default_service",
        "template_id",
        {
          to_email: email,
          link: "http://localhost:3000/redefinir-senha",
        },
        "user_id"
      );

      console.log("E-mail enviado com sucesso!");
    } catch (error) {
      console.log("Erro ao enviar e-mail:", error);
    }
  };

  return (
    <>
      <Header backgroundColor={"#16697A"} />

      <Container>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Image
            src="url_da_imagem"
            className="mx-5"
            style={{ height: "60vh" }}
          />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="border rounded-top"
              style={{ width: "120%", backgroundColor: "#4BBE8F" }}
            >
              <h4 className=" ms-3 my-3 text-white">Recuperar Senha</h4>
            </div>
            <Form
              onSubmit={handleSubmit}
              className="border rounded-bottom p-4"
              style={{ height: "30vh", width: "120%" }}
            >
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-between my-5">
                <div className="ms-auto">
                  <Button
                    className="px-3"
                    style={{ backgroundColor: "#4BBE8F" }}
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RecuperarSenha;
