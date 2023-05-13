import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Container, FormControl, Button } from 'react-bootstrap';

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto">
            <FormControl type="text" placeholder="Pesquisar" className="mr-2" />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
          <Nav className="ms-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ver todas as categorias</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#ofertas-do-dia">Ofertas do dia</Nav.Link>
            <Nav.Link href="#vender">Alugar</Nav.Link>
            <Nav.Link href="#contato">Entrar</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}