import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

export default function RecuperarSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      return alert("Senhas diferentes");
    }

    try {
      const response = await fetch(
        "https://flexrent-fake-api2.vercel.app/api/recoverPassword",
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro na solicitação");
      }

      // const data = await response.json();
      // console.log(data);
      alert("Senha alterada com sucesso");
      navigate("/login");
    } catch (error) {
      console.log("Erro na solicitação:", error);
      alert("Erro a atualizar a senha, tente novamente");
    }
  };

  return (
    <>
      <Header backgroundColor={"#16697A"} />

      <Container>
        <div className="d-flex justify-content-center align-items-center vh-100 row">
          <div className="col-10 col-md-6 d-flex justify-content-center" > 
          <div className="d-flex justify-content-center align-items-center"style={{width: '80%'}}> 
            <img alt="recuperar senha" src='./assets/recuperarSenha/recuperarSenha.png'  className="mx-5" style={{ height: "100%" }}/>
          </div>
            
          </div>

          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div
              className="border rounded-top"
              style={{ width: "70%", backgroundColor: "#4BBE8F" }}
            >
              <h4 className=" ms-3 my-3 text-white">Recuperar Senha</h4>
            </div>
            <Form
              onSubmit={handleSubmit}
              className="border rounded-bottom p-4"
              style={{ height: "35vh", width: "70%" }}
            >
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password" className="textoformlogin">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  className="custom-border"
                  name="password"
                />
              </Form.Group>
              <Form.Group
                controlId="confirmPassword"
                className="textoformlogin"
              >
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme sua senha"
                  className="custom-border"
                  name="confirmPassword"
                />
              </Form.Group>
              <div className="d-flex justify-content-between my-5">
                <div className="ms-auto">
                  <Button
                    type="submit"
                    className="px-3"
                    style={{ backgroundColor: "#4BBE8F", border: 'none'}}
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
}
