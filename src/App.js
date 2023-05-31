import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import CadastroUsuario from "./components/cadastroUsuario/CadastroUsuario";
import CadastroUsuario2 from "./components/cadastroUsuario/CadastroUsuario2";
import CadastroUsuario3 from "./components/cadastroUsuario/CadastroUsuario3";
import Login from "./components/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/cadastro-usuario" element={<CadastroUsuario/>}/>
      <Route path="/cadastro-usuario2" element={<CadastroUsuario2/>}/>
      <Route path="/cadastro-usuario3" element={<CadastroUsuario3/>}/>
    </Routes>
  );
}

export default App;
