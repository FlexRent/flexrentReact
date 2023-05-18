import HeaderButtons from "./HeaderButtons";
import Perfil from "./Perfil";

export default function MinhaArea(){ 
    return ( 
        <section className="row"> 
            <div className="perfil col-12 col-md-4 "> 
                <Perfil />
            </div>

            <div className="content-area col-12 col-md-8 "> 
                <HeaderButtons/> 
            </div>
        

        </section>
    )
}