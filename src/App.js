import { Route, Routes } from "react-router-dom";

import CarrinhoPagamento from "./components/Carrinho/CarrinhoPagamento";
import CarrinhoFinal from "./components/Carrinho/CarrinhoFinal";
import DetalhesProduto from "./components/DetalhesProduto/DetalhesProduto";
import DetalhesLocacao from "./components/DetalheLocacao/DetalheLocacao";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import MinhaArea from "./pages/minhaArea/MinhaArea";
import ListaProdutos from "./pages/produtos/ListaProdutos";

function App() {
  return (
    <Routes>

      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Home />} />
      <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/minha-area" element={<MinhaArea />} />
      <Route path="/detalhes-produto" element={<DetalhesProduto />} />
      <Route path="/detalhes-locacao" element={<DetalhesLocacao />} />
      <Route path="/carrinho-pagamento" element={<CarrinhoPagamento />} />
      <Route path="/carrinho-final" element={<CarrinhoFinal />} />
      <Route path="/produtos" element={<ListaProdutos />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
