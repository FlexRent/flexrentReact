import React, { useState } from "react";
import { Image, Form, Button, Container, Col, Row } from "react-bootstrap";

export default function CadastroUsuario2({ next, back }) {
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

    const token = localStorage.getItem("token").replace(/"/g, '');
    const user = JSON.parse(localStorage.getItem("user"))
    const handleSubmit = (event) => {
        // console.log("entrou")
        event.preventDefault();
        const formData = new FormData(event.target);

        fetch("https://flexrent-fake-api2.vercel.app/api/addresses", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                user_id: user.id,
                address_title: "Endereço cadastro",
                country: "Brasil",
                street: formData.get('street'),
                number: formData.get('number'),
                complement: formData.get('complement'),
                district: formData.get('district'),
                city: formData.get('city'),
                state: formData.get('state'),
                zipcode: formData.get('zipcode').replace(/-/g, "")
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                next(3)
                // console.log("next")
            });
        // console.log("saiu")
    }

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center vh-100">
                <div style={{ width: '50%' }}>
                    <div className="border rounded-top" style={{ backgroundColor: '#4BBE8F' }}>
                        <h4 className="ms-3 my-3 text-white">Endereço</h4>
                    </div>
                    <Form onSubmit={handleSubmit} className="border rounded-bottom p-4" style={{ height: '40vh' }}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control name="zipcode" type="text" maxLength={9} value={cep} onChange={handleCepChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="endereco">
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control name="street" type="text" value={endereco.logradouro} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="numero">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control name="number" type="text" value={numero} onChange={handleNumeroChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="complemento">
                                    <Form.Label>Complemento</Form.Label>
                                    <Form.Control name="complement" type="text" value={complemento} onChange={handleComplementoChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="bairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control name="district" type="text" value={endereco.bairro} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="cidade">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control name="city" type="text" value={endereco.localidade} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="estado">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Select name="state" onChange={handleEstadoChange}>
                                        <option >Selecione o estado</option>
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
                        <Row>
                            {/* <Col>
                                <div className="d-flex justify-content-between my-5">
                                    <div className="ms-auto">
                                        <Button onClick={() => back(1)} className='px-5' style={{ backgroundColor: '#4BBE8F' }}>Voltar</Button>
                                    </div>
                                </div>
                            </Col> */}
                            <Col>
                                <div className="d-flex justify-content-between my-5">
                                    <div className="ms-auto">
                                        <Button type="submit" className='px-5' style={{ backgroundColor: '#4BBE8F' }}>Continuar</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div style={{ width: '50%' }}>
                    <Image src="./assets/cadastroUsuario/endereco.png" className="ms-5" style={{ height: '60vh' }} />
                </div>
            </div>
        </Container>
    );
}