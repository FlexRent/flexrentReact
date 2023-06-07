import { Route, Routes } from "react-router-dom";

// import CadastroUsuario2 from "./components/CadastroUsuario/CadastroUsuario2";
// import CadastroUsuario3 from "./components/CadastroUsuario/CadastroUsuario3";
import CarrinhoPagamento from "./components/Carrinho/CarrinhoPagamento";
import CarrinhoFinal from "./components/Carrinho/CarrinhoFinal";
import DetalhesProduto from "./components/DetalhesProduto/DetalhesProduto";
import DetalhesLocacao from "./components/DetalheLocacao/DetalheLocacao";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";

import Home from "./pages/home/Home";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import Login from "./pages/login/Login";
import MinhaArea from "./pages/minhaArea/MinhaArea";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/minha-area" element={<MinhaArea />} />
      <Route path="/detalhes-produto" element={<DetalhesProduto />} />
      <Route path="/detalhes-locacao" element={<DetalhesLocacao />} />
      <Route path="/carrinho-pagamento" element={<CarrinhoPagamento />} />
      <Route path="/carrinho-final" element={<CarrinhoFinal />} />

      {/* <Route path="/cadastro-usuario2" element={<CadastroUsuario2 />} />
      <Route path="/cadastro-usuario3" element={<CadastroUsuario3 />} /> */}
    </Routes>
  );
}

export default App;
