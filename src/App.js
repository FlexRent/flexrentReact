import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CadastroProduto from "./pages/CadastroProduto";
import NotFound from "./pages/NotFound";
import CadastroProduto2 from "./pages/CadastroProduto2";
import CustomNavbar from "./pages/CustomNavbar";


function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<CustomNavbar/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro-produto" element={<CadastroProduto/>}/>
      <Route path="/cadastro-produto2" element={<CadastroProduto2/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
