import { Navbar, Container } from "react-bootstrap";

export default function Header(props) {
  console.log(props.backgroundColor);
  return (
    <Navbar style={{ backgroundColor:props.backgroundColor}}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
