import logoNode from "./assets/img/logo_node.svg"
import "./App.css"
import Layout from "./components/layout/layout";
import Projet from "./components/projet";
import Competences from "./components/competences";
import ExperiencesDiplomes from "./components/experiencesDiplomes";

function App() {
    return (
        <div className="App">
            {/*Component qui permet d'appeler le header et le footer */}
            <div className="App-header">
                <Layout>
                    <p>Je suis dans la balise main</p>

                    <h1 className="section-lien">Daval Enzo Dev FullSteack
                        <a className="section-lien" href="https://www.linkedin.com/in/enzo-daval-7927b01ba/">
                            <img className="section-child" style={{width: "50px"}}
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                                 alt="image Linkedin"/></a>
                        <a className="section-lien" href="https://github.com/DavalEnzo/">
                            <img className="section-child" style={{width: "90px"}}
                                 src="https://logolook.net/wp-content/uploads/2022/12/GitHub-Logo.svg"
                                 alt="image Github"/></a>
                    </h1>

                    <section style={{flexDirection: "column", textDecoration: "none"}}
                             className="section-lien">Compétences :
                        <ul style={{width: "70%"}}>
                            <Competences nom="Javascript" niveau="Intermédiaire"></Competences>
                            <Competences nom="PHP" niveau="Intermédiaire"></Competences>
                            <Competences nom="Python" niveau="Débutant"></Competences>
                            <Competences nom="ReactJS" niveau="Intermédiaire"></Competences>
                            <Competences nom="Jira" niveau="Intermédiaire"></Competences>
                            <Competences nom="UX/UI" niveau="Intermédiaire"></Competences>
                            <Competences nom="Docker" niveau="Intermédiaire"></Competences>
                            <Competences nom="Kubernetes" niveau="Intermédiaire"></Competences>
                        </ul>
                    </section>

                    <ExperiencesDiplomes></ExperiencesDiplomes>

                    <section className="noList">Centre d'intérêt: Jeux Vidéo, Cinéma et Séries</section>

                    <section className="noList">Projet : Nom /Description : Img / Lien</section>
                </Layout>
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

export default App
