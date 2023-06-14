import {  Form, Button, Container, Row, Col } from "react-bootstrap";

import "./css/login.css";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const loginResponse = await fetch("http://ec2-15-228-10-222.sa-east-1.compute.amazonaws.com:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      const loginData = await loginResponse.json();

      if (loginData.token !== undefined) {
        const userResponse = await fetch("http://ec2-15-228-10-222.sa-east-1.compute.amazonaws.com:8000/api/user", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${loginData.token}`,
          },
        });

        const userData = await userResponse.json();
        // salvando no localStorage do navegador
        localStorage.setItem("user", JSON.stringify(userData.user));
        localStorage.setItem("token", loginData.token);
        navigate("/");
      } else {
        alert("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao fazer login:", error);
      alert(
        "Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde."
      );
    }
  };

  // pegando o valor do token que salvou no localStorage
  // const token = localStorage.getItem("token");
  // console.log(token);

  return (
    <>
      <Container>
        <Row>
          <div className="d-flex justify-content-center align-items-center vh-100 row">
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center align-items-center" >
                <img src="./assets/login/login.png" className="w-100" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="bordaformlogin">
                <div className="bordaformlogin d-flex flex-column justify-content-center align-items-center">
                  <div className="topoFormLogin p-1">
                    <h4 className="ms-3 mt-3">Login</h4>
                  </div>
                  <Form onSubmit={handleSubmit} className="fullForm p-5">
                    <Form.Group
                      controlId="formBasicEmail"
                      className="textoformlogin"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="mb-3 custom-border"
                        name="email"
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
                        name="password"
                      />
                    </Form.Group>
                    <h6 className="mt-2 esquecisenha">
                      <Link
                        to={"/recuperar-senha"}
                        className="text-reset"
                      >
                        Esqueceu sua senha
                      </Link>
                    </h6>

                    <div className="d-flex  justify-content-center">
                      <div className=" buttons-login mt-5 d-flex justify-content-between align-items-center">
                        <div>
                          <Button className="botaocadastrese px-1">
                            <Link to={"/cadastro-usuario"} className="text-reset text-decoration-none" >
                              Cadastre-se
                            </Link>
                          </Button>
                        </div>

                        <div>
                          <Button type="submit" className="botaologin">
                            Login
                          </Button>
                        </div>
                      </div>
                    </div>

                  </Form>
                </div>
              </div>
            </div>

          </div>
        </Row>
      </Container>
    </>
  );
}
