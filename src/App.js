import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CadastroProduto from "./components/CadastroProduto";
import NotFound from "./components/NotFound";
import CadastroProduto2 from "./components/CadastroProduto2";
import HeaderButtons from "./components/MinhaArea/HeaderButtons";
import MinhaArea from "./components/MinhaArea/MinhaArea";

function App() {
  return (
    <Routes className="container">
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro-produto" element={<CadastroProduto/>}/>
      <Route path="/cadastro-produto2" element={<CadastroProduto2/>}/>
      <Route path="/minha-area" element={<MinhaArea/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   
  );
}

export default App;
