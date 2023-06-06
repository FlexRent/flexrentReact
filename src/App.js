import { Route, Routes } from "react-router-dom";


// import MinhaArea from "./components/MinhaArea/MinhaArea";
import HomeRent from "./components/Home/HomeRent";
import CadastroUsuario from "./components/CadastroUsuario/CadastroUsuario";
import CadastroUsuario2 from "./components/CadastroUsuario/CadastroUsuario2";
import CadastroUsuario3 from "./components/CadastroUsuario/CadastroUsuario3";
import CarrinhoPagamento from "./components/Carrinho/CarrinhoPagamento";
import CarrinhoFinal from "./components/Carrinho/CarrinhoFinal";
import DetalhesProduto from "./components/DetalhesProduto/DetalhesProduto";
import DetalhesLocacao from "./components/DetalheLocacao/DetalheLocacao";
import RecuperarSenha from "./components/RecuperarSenha/RecuperarSenha";
import NotFound from "./components/NotFound/NotFound";
import Login from "./pages/login/Login";
import MinhaArea from "./pages/minhaArea/MinhaArea";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
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
