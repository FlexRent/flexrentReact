import React, { useState } from "react";
import { Image, Form, Button, Navbar, Container, Col, Row } from "react-bootstrap";
import endereço from "../../images/endereço.png";
import '../../css/cadastrousuario/cadastroUsuario2.css'

export default function CadastroUsuario2() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");

    const handleCepChange = async (event) => {
        const newCep = event.target.value;

        if (newCep.length > 9) {
            return;
        }

        setCep(newCep);

        if (newCep.length === 8) {
            const url = `https://viacep.com.br/ws/${newCep}/json/`;
            const response = await fetch(url);
            const data = await response.json();
            setEndereco(data);
        }
    };

    const handleNumeroChange = (event) => {
        setNumero(event.target.value);
    };

    const handleComplementoChange = (event) => {
        setComplemento(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };

    return (
        <div>
            <Navbar className="mb-3" style={{ backgroundColor: '#16697A' }}>
                <Container>
                    <Navbar.Brand href="#home">Meu Logo</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Row className=" vh-100 align-items-center justify-content-center">
                    <Col md={6} className="">
                    <div className="bordaCadastroUsuario2">
                        <div className="border  " style={{ backgroundColor: '#4BBE8F'}}>
                            <h4 className="ms-3 my-3 text-white">Endereço</h4>
                        </div>
                        <Form className=" form-text p-4">
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>CEP</Form.Label>
                                        <Form.Control type="text" maxLength={9} value={cep} onChange={handleCepChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="endereco">
                                        <Form.Label>Endereço</Form.Label>
                                        <Form.Control type="text" value={endereco.logradouro} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col>
                                    <Form.Group controlId="numero">
                                        <Form.Label>Número</Form.Label>
                                        <Form.Control type="text" value={numero} onChange={handleNumeroChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="complemento">
                                        <Form.Label>Complemento</Form.Label>
                                        <Form.Control type="text" value={complemento} onChange={handleComplementoChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col>
                                    <Form.Group controlId="bairro">
                                        <Form.Label>Bairro</Form.Label>
                                        <Form.Control type="text" value={endereco.bairro} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="cidade">
                                        <Form.Label>Cidade</Form.Label>
                                        <Form.Control type="text" value={endereco.localidade} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="estado">
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Select onChange={handleEstadoChange}>
                                           
                                            <option value="SP">São Paulo</option>
                                           
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-end">
                                <Button className="px-5 mt-4" style={{ backgroundColor: '#4BBE8F' }}>Continuar</Button>
                            </div>
                        </Form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image src={endereço} className="ms-5" style={{ height: '60vh' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}