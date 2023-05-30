import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CadastroProduto from "./components/CadastroProduto";
import NotFound from "./components/NotFound";
import CadastroProduto2 from "./components/CadastroProduto2";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro-produto" element={<CadastroProduto/>}/>
      <Route path="/cadastro-produto2" element={<CadastroProduto2/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
