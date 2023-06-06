import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./css/NotFound.css";

export default function NotFoundComponent() {
  return (
    <section>

      <div className="not-found-content d-flex justify-content-center">
        <div className="not-found d-flex align-items-end">
          <img alt="Not Found" src="../assets/notfound.jpg" />
        </div>
      </div>
      <div className="button-content">
        <div className="d-flex justify-content-center">
          <button> Inicio</button>
        </div>
      </div>

    </section>
  );
}
