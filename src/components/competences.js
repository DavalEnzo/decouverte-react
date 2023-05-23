import {Link, useParams} from "react-router-dom";

const competenceList = [
    {
        id: 1,
        nom: "HTML",
        niveau: "Bon"
    },
    {
        id: 2,
        nom: "CSS",
        niveau: "Bon"
    },
    {
        id: 3,
        nom: "Javascript",
        niveau: "Moyen"
    }
]

const selectedCompetence = (id) => {
    const competence = competenceList.find((competence) => competence.id === parseInt(id));

    if (!competence) {
        return (
            <>
                <h3>Cette compétence n'existe pas</h3>
            </>
        )
    } else {
        return (
            <>
                <p>Compétence: {competence.nom}</p>
                <p>Niveau: {competence.niveau}</p>
            < />
        )
    }
}

const getCompetenceList = competenceList.map((competence) => {
    return (
        <div className="card-content" key={competence.id}>
            <h2>{competence.nom}</h2>
            <Link className="button" to={`${competence.id}`}>Plus de détails</Link>
        </div>
    )
})


const Competences = () => {
    const {id} = useParams();
    if (id) {
        return (
            <div className="card">
                <div className="card-content">
                    <h3 style={{color: "black"}}>Competence n°{id}</h3>
                    {selectedCompetence(id)}
                    <Link className="button" to="/competences">Retour</Link>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <h1 style={{margin: "2% auto", width: "15%", color: "white"}}>Compétences</h1>
                <div className="card">
                    {getCompetenceList}
                </div>
            </>
        )
    }
}
export default Competences;
