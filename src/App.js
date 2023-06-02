import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";

import CadastroUsuario from "./components/cadastroUsuario/CadastroUsuario";
import CadastroUsuario2 from "./components/cadastroUsuario/CadastroUsuario2";
import CadastroUsuario3 from "./components/cadastroUsuario/CadastroUsuario3";
import CarrinhoPagamento from "./components/carrinho/CarrinhoPagamento";
import CarrinhoFinal from "./components/carrinho/CarrinhoFinal";
import DetalhesProduto from "./components/detalhesProduto/DetalhesProduto";
import DetalhesLocacao from "./components/detalheLocacao/DetalheLocacao";
import RecuperarSenha from "./components/recuperarSenha/RecuperarSenha";
import NotFound from "./components/notFound/NotFound";
import Login from "./pages/login/Login";
import MinhaArea from "./pages/minhaArea/MinhaArea";



function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />

      <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/carrinho-pagamento" element={<CarrinhoPagamento />} />
      <Route path="/detalhes-produto" element={<DetalhesProduto />} />
      <Route path="/detalhes-locacao" element={<DetalhesLocacao />} />
      <Route path="/minha-area" element={<MinhaArea />} />


      <Route path="/cadastro-usuario2" element={<CadastroUsuario2 />} />
      <Route path="/cadastro-usuario3" element={<CadastroUsuario3 />} />
      <Route path="/carrinho-final" element={<CarrinhoFinal />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
