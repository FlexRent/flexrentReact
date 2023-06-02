
import Login from "../../components/login/Login";
import { LoginContext } from "./LoginContext";

export default function PageLogin() {



  return (
    <LoginContext.Provider value={{}}>
      <Login />
    </LoginContext.Provider>
  );
}
