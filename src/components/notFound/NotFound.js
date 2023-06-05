import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './css/NotFound.css'

export default function NotFound(){
    return(
        <section > 
            <header> 
            <Navbar/>
            </header>

            <div className="not-found-content d-flex justify-content-center" > 
                <div className="not-found d-flex align-items-end"> 
                    <img src="./notfound.jpg"/>
                </div>
            </div>
            <div className="button-content">
                <div className="d-flex justify-content-center"> 
                    <button> Inicio</button>
                </div>
            </div>
            <Footer/>
        </section>

        
    );
}