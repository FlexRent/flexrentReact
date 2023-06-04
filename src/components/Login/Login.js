import { Image, Form, Button, Container, Row, Col } from "react-bootstrap";
import login from "../../assets/login.png";
import "./css/login.css";
import Header from "../Header/Header";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const loginResponse = await fetch("http://localhost:8000/api/login", {
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
        const userResponse = await fetch("http://localhost:8000/api/user", {
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
      <Header backgroundColor={"#16697A"} />
      <Container>
        <Row>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={login}
                className="w-100"
                style={{ minHeight: "50vh" }}
              />
            </Col>
            <Col lg={6} className="bordaformlogin">
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

                  <Row className="mt-5">
                    <Col>
                      <Button className="botaocadastrese px-1">
                        <Link
                          to={"/cadastro-usuario"}
                          className="text-reset text-decoration-none"
                        >
                          Cadastre-se
                        </Link>
                      </Button>
                    </Col>
                    <Col>
                      <Button type="submit" className="botaologin px-2">
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
}
