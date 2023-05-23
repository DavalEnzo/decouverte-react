import logoNode from "../assets/img/logo_node.svg"
import "../App.css"
import Projet from "../components/projet";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            {/*Component qui permet d'appeler le header et le footer */}
            <div className="App-header">
                <Link to={"/competences"}>Voir les compétences</Link>
                <Projet
                    nom="Projet1"
                    img={logoNode}
                    lien="https://google.com">
                </Projet>
                <Projet
                    nom="Projet2"
                    img={logoNode}
                    lien="https://google.com">
                </Projet>
                <Projet
                    nom="Projet3"
                    img={logoNode}
                    lien="https://google.com">
                </Projet>
                <Projet
                    nom="Projet4"
                    img={logoNode}
                    lien="https://google.com">
                </Projet>
            </div>
        </div>
    )
}

export default Home
