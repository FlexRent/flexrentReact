import HeaderButtons from "./HeaderContent/HeaderButtons";
import Perfil from "./Perfil/Perfil";
import Navbar from "../Navbar/Navbar";

export default function MinhaArea(){ 
    return ( 
    <section> 
        <header>    
            <Navbar/>
        </header>

        <div className="row flex-xl-nowrap pt-5"> 
            <div className="perfil col-12 col-md-4 "> 
                <Perfil />
            </div>

            <div className="content-area col-12 col-md-8 "> 
                <HeaderButtons/> 
            </div>
        
        </div>
    </section>
    )
}