import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";

import { LoginContext } from "./LoginContext";

export default function PageLogin() {
  return (
    <LoginContext.Provider value={{}}>
      <Header backgroundColor={"#16697A"} />
      <Login />
      <Footer />
    </LoginContext.Provider>
  );
}
