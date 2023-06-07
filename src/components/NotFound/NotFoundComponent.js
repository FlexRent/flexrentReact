import { Link } from "react-router-dom";
import "./css/NotFound.css";

export default function NotFoundComponent() {
  return (
    <section>

      <div className="not-found-content d-flex justify-content-center">
        <div className="not-found d-flex align-items-end">
          <img alt="Not Found" src="./assets/notFound/notfound.jpg" />
        </div>
      </div>
      <div className="button-content">
        <div className="d-flex justify-content-center">
          <Link to={"/"} className="text-reset text-decoration-none">
            <button>
              Inicio
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}
