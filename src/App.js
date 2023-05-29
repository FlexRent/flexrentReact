import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CadastroProduto from "./components/CadastroProduto";
import NotFound from "./components/NotFound";
import CadastroProduto2 from "./components/CadastroProduto2";
import CadastroUsuario from "./components/CadastroUsuario";
import CadastroUsuario3 from "./components/CadastroUsuario3";
import CadastroUsuario2 from "./components/CadastroUsuario2";
import RecuperarSenha from "./components/RecuperarSenha";
import CarrinhoPagamento from "./components/carrinho/CarrinhoPagamento";
import CarrinhoFinal from "./components/carrinho/CarrinhoFinal";
import DetalhesProduto from "./components/DetalhesProduto";
import DetalhesLocacao from "./components/DetalheLocacao";
import DetalhesLocacaoFinalizada from "./components/DetalhesLocacaoFinalizada";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro-produto" element={<CadastroProduto/>}/>
      <Route path="/cadastro-produto2" element={<CadastroProduto2/>}/>
      <Route path="/cadastro-usuario" element={<CadastroUsuario/>}/>
      <Route path="/cadastro-usuario2" element={<CadastroUsuario2/>}/>
      <Route path="/cadastro-usuario3" element={<CadastroUsuario3/>}/>
      <Route path="/recuperar-senha" element={<RecuperarSenha/>}/>
      <Route path="/carrinho-pagamento" element={<CarrinhoPagamento/>}/>
      <Route path="/carrinho-final" element={<CarrinhoFinal/>}/>
      <Route path="/detalhes-produto" element={<DetalhesProduto/>}/>
      <Route path="/detalhes-locacao" element={<DetalhesLocacao/>}/>
      <Route path="/detalhes-locacao-finalizada" element={<DetalhesLocacaoFinalizada/>}/>
      
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
