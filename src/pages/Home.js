import logoNode from "../assets/img/logo_node.svg"
import "../App.css"
import Projet from "../components/projet";
import {Link} from "react-router-dom";
import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <p>
                Nombre de clics: {count}
            </p>
            <div className="card">
                <div className="card-content">
                    <button className="button" type="button" onClick={() => setCount(count + 1)}>
                        Clique sur ce bouton pour avoir une surprise
                    </button>
                    <button className="button" type="button" onClick={() => setCount(count + 10)}>
                        +10
                    </button>
                    <button className="button" type="button" onClick={() => setCount(count - 1)}>
                        -1
                    </button>
                    <button className="button" type="button" onClick={() => setCount(0)}>
                        Réinitialiser
                    </button>
                </div>
            </div>
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
