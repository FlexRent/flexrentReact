import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Aluguel de Equipamentos</h5>
            <p>Somos a sua melhor opção em aluguel de equipamentos para construção, indústria e eventos. Entre em contato conosco e solicite um orçamento.</p>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contato</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Endereço: Av. Paulista, 1000 - São Paulo/SP
              </li>
              <li>
                <i className="fas fa-phone"></i> Telefone: (11) 5555-5555
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email: contato@aluguelequipamentos.com.br
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Links Úteis</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Redes Sociais</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary py-3">
        <Container>
          <p className="text-center mb-0">&copy; 2023 Aluguel de Equipamentos. Todos os direitos reservados.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;