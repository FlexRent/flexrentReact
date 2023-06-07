import Header from "../../components/Header/Header";
import CadastroUsuario from "../../components/CadastroUsuario/CadastroUsuario";
import CadastroUsuario2 from "../../components/CadastroUsuario/CadastroUsuario2";
import CadastroUsuario3 from "../../components/CadastroUsuario/CadastroUsuario3";
import Footer from "../../components/Footer/Footer";
import { CadastroUsuarioContext } from "./CadastroUsuarioContext"
import { useState } from "react";

export default function PageCadastroUsuario() {
    const [form, setForm] = useState(1);

    const proximoForm = (value) => {
        setForm(value);
    };

    const voltarForm = (value) => {
        setForm(value);
    };

    return (
        <>
            <Header />
            {(() => {
                switch (form) {
                    case 3:
                        return <CadastroUsuario3 back={voltarForm} />
                    case 2:
                        return <CadastroUsuario2 back={voltarForm} next={proximoForm} />
                    default:
                        return <CadastroUsuario next={proximoForm} />
                }
            })()}
            {/* <CadastroUsuario /> */}
            <Footer />
        </>
    )
}