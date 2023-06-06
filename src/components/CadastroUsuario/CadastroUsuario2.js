import React, { useState } from "react";
import { Image, Form, Button, Container, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

        setCep(newCep.replace(/[^0-9]/g, "").replace(/(\d{5})(\d{3})?/, "$1-$2"));

        if (newCep.length === 9) {
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
        <div className="pt-4">
           <Header/>
            <Container>
                <div className="d-flex justify-content-between align-items-center vh-100 row">
                    <div className= "col-12 col-md-6 pt-3">
                        <div className="border rounded-top" style={{ backgroundColor: '#4BBE8F' }}>
                            <h4 className="ms-3 my-3 text-white">Endereço</h4>
                        </div>

                        <Form className="border rounded-bottom p-4" style={{ height: '36vh' }}>
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
                            <Row>
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
                            <Row>
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
                                            <option value="">Selecione o estado</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-between mt-5">
                                <div className="ms-auto">
                                    <Button className='px-5' style={{border: 'none', backgroundColor: '#4BBE8F' } }>Continuar</Button>
                                </div>
                            </div>
                        </Form>
                    </div>

                    <div className= "col-12 col-md-6 d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
                        <img src="../assets/endereco.png" className="ms-5" style={{ height: '100%' }} />
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>



    );
}