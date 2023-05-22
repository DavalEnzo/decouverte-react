const Diplomes = () => {
    const diplomes = [
        {
            id: 1,
            nom: "Développeur Web",
            date: "2021-2022",
        },
        {
            id: 2,
            nom: "Bachelor Développeur FullSteack",
            date: "2022-2023",
        }
    ]

    const diplomesList = diplomes.map((diplome) => {
        return (
            <p key={diplome.id}> - {diplome.date} : {diplome.nom}</p>
        )
    })

    return (
        <>
            <section className="title">Diplomes</section>
            {diplomesList}
        </>
    )
}
export default Diplomes;
