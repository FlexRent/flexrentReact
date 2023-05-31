import Header from "../../components/Header/Header";
import HeaderButtons from "../../components/MinhaArea/HeaderContent/HeaderButtons";
import Perfil from "../../components/MinhaArea/Perfil/Perfil";

export default function PageMinhaArea() {
  return (
    <section>
      <Header backgroundColor={"#16697A"} />

      <div className="row flex-xl-nowrap">
        <div className="perfil col-12 col-md-4">
          <Perfil />
        </div>

        <div className="content-area col-12 col-md-8 ">
          <HeaderButtons />
        </div>
      </div>
    </section>
  );
}
