import {
  Image,
  Form,
  Button,
  Container,
  Row,
  Col,
  Navbar,
} from "react-bootstrap";
import login from "../../assets/login.png";
import "./css/login.css";
import Header from "../header/Header";
import { useNavigate, redirect, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.token);
        // salvando o token no localStorage
        if (data.token !== undefined) {
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          alert("Usuário ou senha incorretos");
        }
      });
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
                  <h6 className="mt-2 esquecisenha">Esqueceu sua senha</h6>

                  <Row className="mt-5">
                    <Col>
                      <Button className="botaocadastrese px-1">
                        <Link to={"/cadastro-usuario"} className="text-reset text-decoration-none">Cadastre-se</Link>
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
