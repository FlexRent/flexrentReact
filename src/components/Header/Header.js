import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./css/navbar.css";

export default function Header({ isHome }) {
  const [navbarTransparent, setNavbarTransparent] = useState(isHome);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const navbarBackgroundColor = navbarTransparent ? "transparent" : "#16697A";
  const navbarStyle = {
    backgroundColor:
      navbarScrolled || navbarCollapsed ? "#16697A" : navbarBackgroundColor,
  };

  function logout() {
    fetch(`http://127.0.0.1:8000/api/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("user");
    navigate("/");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3) {
        setNavbarTransparent(false);
        setNavbarScrolled(true);
      } else {
        setNavbarTransparent(isHome);
        setNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        style={navbarStyle}
      >
        <Container className="mb-0">
          <Navbar.Brand>
            <Link to={"/"}>
              <img src="./assets/logofinal.png" alt="FlexRent" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavbarToggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Inicio</Nav.Link>
              <NavDropdown className="me-3" title="Categoroias" id="collasible-nav-dropdown">
                <NavDropdown.Item>Camping</NavDropdown.Item>
                <NavDropdown.Item>
                  Esportivos
                </NavDropdown.Item>
                <NavDropdown.Item>
                  Ferramentas
                </NavDropdown.Item>
                <NavDropdown.Item>Praia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  Ver todos
                </NavDropdown.Item>
              </NavDropdown>

              <Form className="d-flex ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />

                <Button className="mx-2" variant="outline-light">
                  Buscar
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link>
                {
                  user ?
                    <NavDropdown title={user.first_name} id="collasible-nav-dropdown">
                      <NavDropdown.Item>
                        <Link
                          to={"/minha-area"}
                          className="text-reset text-decoration-none"
                        >
                          Minha área
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    : ""
                }
              </Nav.Link>
              {user ? (
                <Nav.Link className={"align-self-center"} onClick={() => logout()}>Logout</Nav.Link>
              ) : (
                <Nav.Link>
                  <Link
                    to={"/login"}
                    className="text-reset text-decoration-none"
                  >
                    Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
