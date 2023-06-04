
import Login from "../../components/Login/Login";
import { LoginContext } from "./LoginContext";

export default function PageLogin() {



  return (
    <LoginContext.Provider value={{}}>
      <Login />
    </LoginContext.Provider>
  );
}
