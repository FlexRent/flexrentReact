import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';

function CustomNavbar() {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <Navbar bg="light" expand="lg" className="navbar-expand-lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchText} onChange={handleSearch} />
          <Button variant="outline-success" onClick={() => {console.log(searchText)}}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}




