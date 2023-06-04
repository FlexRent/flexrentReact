import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navbar.css'
import { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';


function CollapsibleExample({isHome}) {

  const [navbarTransparent, setNavbarTransparent] = useState(isHome);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const navbarBackgroundColor = navbarTransparent ? 'transparent' : '#16697A';
  const navbarStyle = {
    backgroundColor: navbarScrolled || navbarCollapsed ? '#16697A' : navbarBackgroundColor
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight /3 ) {
        setNavbarTransparent(false);
        setNavbarScrolled(true);
      } else {
        setNavbarTransparent(isHome);
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' style={navbarStyle}>
      <Container className='mb-0'>
        <Navbar.Brand href="#home"> <img src="./logofinal.png" alt='logo' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <NavDropdown title="Categoroias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Camping</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Esportivos </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ferramentas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Praia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Ver todos</NavDropdown.Item>
            </NavDropdown>

            <Form className="d-flex ">
              <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />

                <Button className="mx-2" variant="outline-light">Buscar</Button>

            </Form>
          </Nav>

          {/* <Nav> */}

          {/* </Nav> */}


          <Nav>
            <Nav.Link href="#deets">Aréa de Vinicius</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;