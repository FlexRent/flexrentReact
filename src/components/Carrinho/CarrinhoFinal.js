import React, { useState } from "react";
import "./css/carrinhoFinal.css";
import {
  Image,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Header from "../Header/Header";

const CarrinhoFinal = () => {

  return (
    <>
      <Header backgroundColor={"#16697A"} />

      <Container>
        <Row className="d-flex justify-content-center align-items-center vh-100">
          <div id="borda" className="p-3 d-flex" style={{ width: "70%" }}>
            <Col id="bordasepara" md={6} className="p-3 d-flex ">
              <div className="p-5">
                <Image src="" alt="Produto" className="me-3" />
              </div>
              <div className="flex-grow-1">
                <h3 className=" textoProduto text-center mb-4">
                  Nome do Produto
                </h3>
                <div className="textocor">
                  <p>Período de Diárias: X dias</p>
                  <p>Valor da Diária: R$X</p>
                  <p>Valor do Seguro: R$X</p>
                  <p>Valor do Caução: R$X</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className=" ajustealtura flex-column d-flex align-items-center justify-content-center">
                <p>Total: R$X</p>
                <Button
                  type="submit"
                  className="px-4 mt-3 w-50"
                  style={{ backgroundColor: "#16697A" }}
                >
                  Alugar
                </Button>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CarrinhoFinal;
